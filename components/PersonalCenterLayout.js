import { use } from 'react';
import Layout from "@/components/Layout";
import Preloader from "@/components/Preloader";
import PersonalCenterMenu from "@/components/PersonalCenterMenu";
import MobileMenu from "@/components/MobileMenu";
import Header from "@/components/Header";

export default function (props) {

  return (
    <>
      <Preloader />

      <Layout pageTitle="Autu | Home Page">
        <Header
          thime="white"
          btnClass="main-nav__btn"
          extraClassName="site-header-one__fixed-top white-thime"
        />
        <MobileMenu />
        <div className="flex space-x-4">
          <PersonalCenterMenu />
          <div className="flex-1" style={{paddingTop: '76px'}}>
            {props.children}
          </div>
        </div>
      </Layout>
    </>
  )
};