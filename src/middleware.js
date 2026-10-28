import { NextResponse } from "next/server";

// Project pages moved from /Projects to /projects. Matching is done here with a
// case-sensitive check, so the lowercase URL never redirects to itself.
export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/Projects")) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/projects${pathname.slice("/Projects".length)}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/Projects", "/Projects/:path*"],
};
