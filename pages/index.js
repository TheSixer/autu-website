import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CTATwo from "../components/CTATwo";
import AiGift from "../components/AiGift";
import NotraderModel from "../components/NotraderModel";
import Testimonials from "../components/Testimonials";
import { queryUserInfo } from '@/services';

// export const getStaticProps = async () => {
  
//   const res = await queryUserInfo();
//   // 也可以直接返回 404 页面
//   if (!res) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     // 在组件 props 中 可以拿到 data
//     props: res,
//   }
// }

const HomePage = () => (
  <div>
    <Preloader />

    <Layout pageTitle="Autu | Home Page">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <Banner />
      <Testimonials />
      <CTATwo />
      <NotraderModel />
      <AiGift />
      <Footer />
    </Layout>
  </div>
);

export default HomePage;
