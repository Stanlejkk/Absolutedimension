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
 * Cart state lives in localStorage so that a shopper can close the tab and
 * return with their bag intact. The shape is deliberately minimal — enough to
 * render a drawer, compute totals, and hand off to a Stripe Checkout Session.
 *
 * Each line item is keyed by `${productId}::${size}` so that the same product
 * in two different sizes stays as two lines, while incrementing quantity on an
 * existing line keeps them merged.
 */

export interface CartItem {
  /** Composite line-item key: `${productId}::${size}`. */
  key: string;
  productId: string;
  name: string;
  /** In PLN grosze (1/100), same unit as the catalog. */
  price: number;
  image: string;
  size: string;
  quantity: number;
}

export interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (input: Omit<CartItem, "key" | "quantity"> & { quantity?: number }) => void;
  removeItem: (key: string) => void;
  setQuantity: (key: string, quantity: number) => void;
  clear: () => void;
}

const CART_STORAGE_KEY = "ad.cart.v1";
const CartContext = createContext<CartContextValue | null>(null);

function makeKey(productId: string, size: string): string {
  return `${productId}::${size}`;
}

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isCartItem);
  } catch {
    return [];
  }
}

function isCartItem(v: unknown): v is CartItem {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  return (
    typeof o.key === "string" &&
    typeof o.productId === "string" &&
    typeof o.name === "string" &&
    typeof o.price === "number" &&
    typeof o.image === "string" &&
    typeof o.size === "string" &&
    typeof o.quantity === "number" &&
    o.quantity > 0
  );
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readStoredCart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* quota / private-mode — keep in-memory */
    }
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem: CartContextValue["addItem"] = useCallback((input) => {
    const quantity = Math.max(1, input.quantity ?? 1);
    const key = makeKey(input.productId, input.size);
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i,
        );
      }
      return [
        ...prev,
        {
          key,
          productId: input.productId,
          name: input.name,
          price: input.price,
          image: input.image,
          size: input.size,
          quantity,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key: string) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  }, []);

  const setQuantity = useCallback((key: string, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) return prev.filter((i) => i.key !== key);
      return prev.map((i) => (i.key === key ? { ...i, quantity } : i));
    });
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return {
      items,
      count,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      setQuantity,
      clear,
    };
  }, [items, isOpen, openCart, closeCart, addItem, removeItem, setQuantity, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside a <CartProvider>.");
  return ctx;
}
