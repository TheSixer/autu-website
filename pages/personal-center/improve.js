import Layout from "@/components/PersonalImproveLayout";
import ImproveSteps from "@/components/ImproveSteps";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)
  const res = await fetch(process.env.NEXT_PUBLIC_ORIGIN_URL + '/user/info', {
    headers: { token: session.user.accessToken }
  });
  const { code, data } = await res.json();

  if (code || data?.completeBaseInfo) {
    return {
      redirect: {
        permanent: false,
        destination: data?.completeBaseInfo ? '/personal-center' : '/login',
      }
    }
  }

  return {
    // 在组件 props 中 可以拿到 data
    props: data,
  }
}

const HomePage = ({baseInfo, employmentInfo, userAddressInfo}) => (
  <Layout>
    <div className="container">
      
      <div className="py-4">
        <div className="login-form-header-title mb-9">
          <h4 className="text-lg text-black font-bold">完善个人信息</h4>
        </div>
      </div>

      <ImproveSteps step={!baseInfo?.haveSave ? 0 : !userAddressInfo?.haveSave ? 1 : !employmentInfo?.haveSave ? 2 : 3} />
    </div>
  </Layout>
);

export default HomePage;
