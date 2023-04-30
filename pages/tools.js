import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WebSoftware from "../components/WebSoftware";
import ToolsBanner from "../components/ToolsBanner";
import MobilePlatform from "../components/MobilePlatform";
import CopyTrading from "../components/CopyTrading";
import PCTradePlatform from "../components/PCTradePlatform";
import AutomateTrading from "../components/AutomateTrading";

const HomePage = () => (
  <div>
    <Preloader />

    <Layout pageTitle="Apiton | Home Page">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
      <ToolsBanner />
      <PCTradePlatform />
      <WebSoftware />
      <MobilePlatform />
      <CopyTrading />
      <AutomateTrading />
      <Footer />
    </Layout>
  </div>
);

export default HomePage;
