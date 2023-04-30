import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LiveBroadcast from "../components/LiveBroadcast";
import PromotionBanner from "../components/PromotionBanner";
import FindMasterTrader from "../components/FindMasterTrader";

const HomePage = () => (
  <div>
    <Preloader />

    <Layout pageTitle="Apiton | Home Page">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
      <PromotionBanner />
      <LiveBroadcast />
      <FindMasterTrader />
      <Footer />
    </Layout>
  </div>
);

export default HomePage;
