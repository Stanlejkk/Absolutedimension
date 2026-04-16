import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/**
 * Client-side account store.
 *
 * Absolut Dimension's public site is a static Vite build with no backend, so
 * accounts and sessions are persisted to localStorage. Passwords are hashed
 * with SubtleCrypto before storage. This is a front-end scaffold meant to be
 * swapped for a real identity provider (e.g. Supabase, Auth.js, Shopify
 * Customer API) when the storefront gains a server.
 *
 * Two roles are supported:
 *  - "client": a regular shopper account
 *  - "admin":  an atelier operator. Promotion to admin requires the
 *              VITE_ADMIN_INVITE_CODE build-time secret (falls back to the
 *              demo code "ATELIER-ADMIN" so the flow can be exercised in
 *              development).
 */

export type UserRole = "client" | "admin";

export interface StoredAccount {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  /** Hex-encoded SHA-256 of `${salt}:${password}`. */
  passwordHash: string;
  /** Hex-encoded random salt. */
  passwordSalt: string;
  createdAt: string;
}

export interface PublicAccount {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  adminInviteCode?: string;
}

export type AuthError =
  | "email-taken"
  | "invalid-email"
  | "weak-password"
  | "name-required"
  | "invalid-admin-code"
  | "invalid-credentials"
  | "unavailable";

export interface AuthContextValue {
  user: PublicAccount | null;
  accounts: PublicAccount[];
  isReady: boolean;
  register: (input: RegisterInput) => Promise<{ ok: true } | { ok: false; error: AuthError }>;
  login: (
    email: string,
    password: string,
  ) => Promise<{ ok: true } | { ok: false; error: AuthError }>;
  logout: () => void;
  deleteAccount: (id: string) => boolean;
}

const ACCOUNTS_KEY = "ad.auth.accounts.v1";
const SESSION_KEY = "ad.auth.session.v1";
const ADMIN_INVITE_CODE =
  (import.meta.env.VITE_ADMIN_INVITE_CODE as string | undefined) ?? "ATELIER-ADMIN";

const AuthContext = createContext<AuthContextValue | null>(null);

/* ------------------------------------------------------------------ utils */

function toPublic(a: StoredAccount): PublicAccount {
  return { id: a.id, name: a.name, email: a.email, role: a.role, createdAt: a.createdAt };
}

function normaliseEmail(email: string): string {
  return email.trim().toLowerCase();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function bytesToHex(bytes: Uint8Array): string {
  let out = "";
  for (const b of bytes) out += b.toString(16).padStart(2, "0");
  return out;
}

async function hashPassword(password: string, salt: string): Promise<string> {
  const data = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return bytesToHex(new Uint8Array(digest));
}

function makeSalt(): string {
  const buf = new Uint8Array(16);
  crypto.getRandomValues(buf);
  return bytesToHex(buf);
}

function makeId(): string {
  const buf = new Uint8Array(12);
  crypto.getRandomValues(buf);
  return bytesToHex(buf);
}

function readAccounts(): StoredAccount[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(ACCOUNTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isStoredAccount);
  } catch {
    return [];
  }
}

function writeAccounts(list: StoredAccount[]) {
  try {
    window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(list));
  } catch {
    /* quota / private mode — keep in-memory */
  }
}

function readSession(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(SESSION_KEY);
  } catch {
    return null;
  }
}

function writeSession(id: string | null) {
  try {
    if (id) window.localStorage.setItem(SESSION_KEY, id);
    else window.localStorage.removeItem(SESSION_KEY);
  } catch {
    /* ignore */
  }
}

function isStoredAccount(v: unknown): v is StoredAccount {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  return (
    typeof o.id === "string" &&
    typeof o.name === "string" &&
    typeof o.email === "string" &&
    (o.role === "client" || o.role === "admin") &&
    typeof o.passwordHash === "string" &&
    typeof o.passwordSalt === "string" &&
    typeof o.createdAt === "string"
  );
}

/* --------------------------------------------------------------- provider */

export function AuthProvider({ children }: { children: ReactNode }) {
  const [accounts, setAccounts] = useState<StoredAccount[]>(readAccounts);
  const [sessionId, setSessionId] = useState<string | null>(readSession);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    writeAccounts(accounts);
  }, [accounts]);

  useEffect(() => {
    writeSession(sessionId);
  }, [sessionId]);

  const register = useCallback<AuthContextValue["register"]>(
    async (input) => {
      const name = input.name.trim();
      const email = normaliseEmail(input.email);
      if (!name) return { ok: false, error: "name-required" };
      if (!isValidEmail(email)) return { ok: false, error: "invalid-email" };
      if (!input.password || input.password.length < 8) {
        return { ok: false, error: "weak-password" };
      }
      if (input.role === "admin" && input.adminInviteCode !== ADMIN_INVITE_CODE) {
        return { ok: false, error: "invalid-admin-code" };
      }
      if (accounts.some((a) => a.email === email)) {
        return { ok: false, error: "email-taken" };
      }
      try {
        const salt = makeSalt();
        const passwordHash = await hashPassword(input.password, salt);
        const account: StoredAccount = {
          id: makeId(),
          name,
          email,
          role: input.role,
          passwordSalt: salt,
          passwordHash,
          createdAt: new Date().toISOString(),
        };
        setAccounts((prev) => [...prev, account]);
        setSessionId(account.id);
        return { ok: true };
      } catch {
        return { ok: false, error: "unavailable" };
      }
    },
    [accounts],
  );

  const login = useCallback<AuthContextValue["login"]>(
    async (emailInput, password) => {
      const email = normaliseEmail(emailInput);
      const account = accounts.find((a) => a.email === email);
      if (!account) return { ok: false, error: "invalid-credentials" };
      try {
        const hash = await hashPassword(password, account.passwordSalt);
        if (hash !== account.passwordHash) {
          return { ok: false, error: "invalid-credentials" };
        }
        setSessionId(account.id);
        return { ok: true };
      } catch {
        return { ok: false, error: "unavailable" };
      }
    },
    [accounts],
  );

  const logout = useCallback(() => setSessionId(null), []);

  const deleteAccount = useCallback(
    (id: string) => {
      const target = accounts.find((a) => a.id === id);
      if (!target) return false;
      setAccounts((prev) => prev.filter((a) => a.id !== id));
      if (sessionId === id) setSessionId(null);
      return true;
    },
    [accounts, sessionId],
  );

  const value = useMemo<AuthContextValue>(() => {
    const current = sessionId ? accounts.find((a) => a.id === sessionId) ?? null : null;
    return {
      user: current ? toPublic(current) : null,
      accounts: accounts.map(toPublic),
      isReady,
      register,
      login,
      logout,
      deleteAccount,
    };
  }, [accounts, sessionId, isReady, register, login, logout, deleteAccount]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside an <AuthProvider>.");
  return ctx;
}
