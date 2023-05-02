import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBanner from "../components/AboutBanner";
import AboutIntro from "../components/AboutIntro";

const HomePage = () => (
  <div>
    <Preloader />

    <Layout pageTitle="Autu | Home Page">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <AboutBanner />
      <AboutIntro />
      <Footer />
    </Layout>
  </div>
);

export default HomePage;
