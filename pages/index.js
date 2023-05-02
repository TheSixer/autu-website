import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CTATwo from "../components/CTATwo";
import AiGift from "../components/AiGift";
import NotraderModel from "../components/NotraderModel";
import Testimonials from "../components/Testimonials";

const HomePage = () => (
  <div>
    <Preloader />

    <Layout pageTitle="Apiton | Home Page">
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
