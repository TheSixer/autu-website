import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"

const secret = process.env.NEXTAUTH_SECRET

export async function middleware(req) {
  //获取token
  const session = await getToken({ req, secret });
  //未授权，跳转到登录页面
  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url))
  } else {
    NextResponse.next()
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/personal-center/:path*',
}