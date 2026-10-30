import { NextRequest, NextResponse } from "next/server"

export function proxy(request: NextRequest) {
  const nonce = btoa(crypto.randomUUID())
  const isDevelopment = process.env.NODE_ENV === "development"
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'unsafe-inline' 'strict-dynamic'${isDevelopment ? " 'unsafe-eval'" : ""} https: http:`,
    `style-src 'self' 'nonce-${nonce}' 'unsafe-inline' https:`,
    "img-src 'self' blob: data: https:",
    "font-src 'self' data: https:",
    "connect-src 'self' https:",
    "frame-src 'self' https:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
    "upgrade-insecure-requests",
  ].join("; ")

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-nonce", nonce)
  requestHeaders.set("Content-Security-Policy", csp)

  const response = NextResponse.next({ request: { headers: requestHeaders } })
  response.headers.set("Content-Security-Policy", csp)
  return response
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
}
