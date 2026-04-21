/**
 * Server-side environment accessors. Edge and Node runtimes both expose
 * `process.env`, so we use it uniformly. Every accessor throws on missing
 * required values so a misconfigured deploy fails loudly at request time
 * rather than silently returning empty orders or broken emails.
 */

export function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export function optionalEnv(name: string): string | undefined {
  const value = process.env[name];
  return value && value.length > 0 ? value : undefined;
}

export function siteUrl(): string {
  return (
    optionalEnv("VITE_SITE_URL") ??
    optionalEnv("SITE_URL") ??
    "http://localhost:5173"
  ).replace(/\/$/, "");
}
