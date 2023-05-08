import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import { getCsrfToken } from "next-auth/react";
import { useEffect } from "react";
import { useSearchParams  } from 'next/navigation';
import { toast } from 'react-toastify';
import ErrorCode from '@/constant';

//获取初始化csrfToken
export async function getServerSideProps(context) {
  const token = await getCsrfToken(context);
  return {
    props: {
      csrfToken: token || null,
    },
  }
}

const LoginPage = (props) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');

    if (code && !isNaN(code)) {
      toast.error(ErrorCode[Number(code)]);
    }
  }, [])

  return (
    <div>
      <Preloader />
  
      <Layout pageTitle="Autu | Home Page">
        <Header
          btnClass="main-nav__btn"
          extraClassName="site-header-one__fixed-top"
        />
        <LoginForm token={props.csrfToken} />
        <Footer />
      </Layout>
    </div>
  )
};

export default LoginPage;
