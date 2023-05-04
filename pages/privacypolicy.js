import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PrivacyPolicy from "../components/PrivacyPolicy";

const Privacypolicy = () => (
  <div>
    <Preloader />

    <Layout pageTitle="Apiton | Home Page">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
      <PrivacyPolicy />
      <Footer />
    </Layout>
  </div>
);

export default Privacypolicy;
