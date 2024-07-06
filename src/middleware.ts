import type { NextRequest } from "next/server";

export function middleware(request : NextRequest) {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/sign-in' || path === '/sign-up'

    const token = request.cookies.get('token')?.value || '';
    if(isPublicPath && token){
        return Response.redirect(new URL('/dashboard', request.url));
    }

    if(!isPublicPath && !token){
        return Response.redirect(new URL('/sign-in', request.url));
    }
}

export const config = {
    matcher: [
        "/sign-in",
        "/sign-up",
        "/dashboard"
    ]
}