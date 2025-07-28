import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_SHOW_COMING_SOON === "true") {
    const requestHeaders = new Headers(request.headers);

    requestHeaders.set("X-Coming-Soon", "true");

    if (request.nextUrl.searchParams.get("confirm") === "true") {
      requestHeaders.set("X-Coming-Soon-Confirm", "true");
    }

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }
}
