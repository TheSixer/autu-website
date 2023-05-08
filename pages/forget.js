import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ForgetForm from "../components/ForgetForm";
import { getCsrfToken } from "next-auth/react";

//获取初始化csrfToken
export async function getServerSideProps(context) {
  const token = await getCsrfToken(context);
  return {
    props: {
      csrfToken: token || null,
    },
  }
}

const LoginPage = (props) => (
  <div>
    <Preloader />

    <Layout pageTitle="Autu | Home Page">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <ForgetForm token={props.csrfToken} />
      <Footer />
    </Layout>
  </div>
);

export default LoginPage;
