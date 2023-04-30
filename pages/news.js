import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsBanner from "../components/NewsBanner";
import NewsList from "../components/NewsList";

const HomePage = () => (
  <div>
    <Preloader />

    <Layout pageTitle="Apiton | Home Page">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
      <NewsBanner />
      <NewsList />
      <Footer />
    </Layout>
  </div>
);

export default HomePage;