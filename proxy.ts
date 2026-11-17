import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Serve the Markdown version of the homepage to clients that ask for it.
export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  if (accept.includes("text/markdown")) {
    return NextResponse.rewrite(new URL("/index.md", request.url));
  }
  const res = NextResponse.next();
  res.headers.set("Vary", "Accept");
  return res;
}

export const config = {
  matcher: "/",
};
