import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import { ssrLogin } from '@/services';

//配置next-auth，参考https://next-auth.js.org/configuration/options
export const authOptions = {
  // provider配置凭证登录
  providers: [
    CredentialsProvider({
      name: 'login',
      async authorize(credentials, req) {//具体授权逻辑
        const { userName, password } = credentials;
        const { code, data } = await ssrLogin({ userName, password });
        console.log(data)
        if (!code) {
          return {
            name: data.userInfo.userName,
            email: data.userInfo.userName,
            accessToken: data.token,
            refreshToken: data.token,
            completeBaseInfo: data.userInfo.completeBaseInfo,
            completeVerify: data.userInfo.completeVerify,
          }
        }
        return { status: 'reject', code }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {},
  pages: {//自定义界面 ，可配置signIn，signOut，error，verifyRequest，newUser
    signIn: '/login',
  },
  callbacks: {//回调函数
    async signIn({ user, account, profile, email, credentials }) {
      //登录回调，如果authorize不成功，重定向到login界面，并附带错误信息参数
      if (user?.status === 'reject') {
        return `/login/?code=${user?.code}`
      }
      return true
    },
    async redirect({ url, baseUrl }) {//不设置回调，直接默认使用url
      // // url一般为被中间件拦截之前的目标url，例如：localhost:3000/management/index，baseurl为localhost:3000，如果url不包含baseUrl，大概率是signIn回调函数重定向页面
      // if (url.startsWith(baseUrl)) return url
      // else if (url.startsWith("/")) return new URL(url, baseUrl).toString()
      return '/personal-center'
    },
    async session({ session, token, user }) {
      session.user.accessToken = token.accessToken
      session.user.refreshToken = token.refreshToken
      session.user.completeBaseInfo = token.completeBaseInfo
      session.user.completeVerify = token.completeVerify
      return session
    },
    async jwt({token, user, account, profile}) {
      if (account?.type === 'credentials' && user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.completeBaseInfo = user.completeBaseInfo
        token.completeVerify = user.completeVerify
      }
      return token
    }
  },
  events: {},
  theme: { colorScheme: "light" },
  debug: process.env.NODE_ENV === 'development',
}

export default NextAuth(authOptions)
