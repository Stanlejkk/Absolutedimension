/**
 * Tiny JSON/HTTP helpers for Web-standard Request/Response handlers.
 */

export function json(body: unknown, init: ResponseInit = {}): Response {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...(init.headers ?? {}),
    },
  });
}

export function badRequest(message: string): Response {
  return json({ error: message }, { status: 400 });
}

export function unauthorized(message = "unauthorized"): Response {
  return json({ error: message }, { status: 401 });
}

export function forbidden(message = "forbidden"): Response {
  return json({ error: message }, { status: 403 });
}

export function serverError(message = "server-error"): Response {
  return json({ error: message }, { status: 500 });
}

export function methodNotAllowed(allow: string): Response {
  return new Response("method not allowed", {
    status: 405,
    headers: { allow },
  });
}

export async function readJson<T = unknown>(req: Request): Promise<T | null> {
  try {
    return (await req.json()) as T;
  } catch {
    return null;
  }
}
