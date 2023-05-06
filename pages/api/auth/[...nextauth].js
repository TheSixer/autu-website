import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import { ssrLogin } from '@/services';

//配置next-auth，参考https://next-auth.js.org/configuration/options
export default NextAuth({
  // provider配置凭证登录
  providers: [
    CredentialsProvider({
      name: 'login',
      async authorize(credentials, req) {//具体授权逻辑
        const { userName, password } = credentials;
        const user = await ssrLogin({ userName, password });
        if (!user?.code) {
          // return user;
          return {
            info: {
              "id": 3,
              "userName": "longjia@163.com",
              "completeBaseInfo": false,
              "completeVerify": false,
              "userAddressInfo": {
                "haveSave": false,
                "city": null,
                "postcode": null,
                "detailAddress": null
              },
              "baseInfo": {
                "haveSave": false,
                "firstName": null,
                "lastName": null,
                "nationality": null,
                "birthDate": null,
                "phone": null
              },
              "employmentInfo": {
                "haveSave": false,
                "employmentStatus": null,
                "industry": null,
                "otherIndustry": null
              },
              "financialInfo": {
                "haveSave": false,
                "annualIncome": null,
                "netWorth": null,
                "sourceOfWealth": null,
                "expectNext12Month": null
              },
              "idCardInfo": {
                "haveSave": false,
                "cardUrl": null,
                "auditStatus": null,
                "failReason": null
              }
            }
          }
        }
        return { status: 'reject', ...user }
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
      return '/personal-center/improve'
    },
    async session({ session, token, user }) {
      return session
    },
    // async jwt({token, user, account, profile}) {
    //   console.log('get token', token)
    //   return token
    // }
  },
  events: {},
  theme: { colorScheme: "light" },
  debug: true,
})
