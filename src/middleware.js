import { NextResponse } from 'next/server'

export function middleware(request) {
    const token = request.cookies.get('token')?.value

    if (!token) return NextResponse.redirect(new URL('/login', request.url))
    if (request.url.pathname === '/login') return NextResponse.redirect(new URL('/', request.url))

}

export const config = {
    matcher: ['/((?!api|login|_next/static|_next/image|.*\\.png$).*)'],
}