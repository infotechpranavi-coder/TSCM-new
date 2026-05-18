import { NextResponse } from 'next/server';

export function createPermanentRedirectRoute(destination: string) {
  function handler(request: Request) {
    return NextResponse.redirect(new URL(destination, request.url), 301);
  }

  return { GET: handler, HEAD: handler };
}
