import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";

export const getServerSideProps = async () => {
  
  // const data = false;
  // console.log('**********************************************');
  // if (!data) {
  //   console.log('login');
  //   // 如果没有数据 ，重定向回 首页, 当然你也可以响应一个状态码，next 回重定向到该状态码页面
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //       // statusCode: 302,
  //     },
  //   }
  // }
  
  // // 也可以直接返回 404 页面
  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }

  return {
    // 在组件 props 中 可以拿到 data
    props: {},
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
      <MobileMenu />
      <RegisterForm />
      <Footer />
    </Layout>
  </div>
);

export default LoginPage;
