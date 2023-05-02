import React from "react";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);
import Swiper from "react-id-swiper";
import { FormattedMessage } from "react-intl";

const AppScreen = () => {
  const params = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };
  return (
    <Swiper {...params} id="home">
      <div className="item swiper-home-item bg-cover first" style={{ backgroundImage: `url(/assets/images/banner01@2x.jpg)` }}>
        <div className="text main-title w-full sm:w-10/12 md:w-10/12 lg:w-1/2 left-4  top-1/4 sm:left-16 md:left-24 lg:left-1/5 wow fadeIn">
          <h2 className="mb-4 text-wihte text-center font-semibold text-3xl md:text-4xl lg:text-5xl">
            <FormattedMessage id="home.first.banner.title" />
          </h2>
          <p className="text-wihte text-center sm:text-left font-semibold text-xl sm:text-2xl">
            <FormattedMessage id="home.first.banner.subtitle" />
          </p>
        </div>
        <p className="text text-center font-semibold sub-title left-8 top-2/3 md:left-1/3 text-xl sm:text-2xl wow fadeIn">
          <FormattedMessage id="home.first.banner.centerTxt" />
        </p>
        <p className="text text-center break-normal font-semibold other-title left-8 top-3/4 md:left-1/2 text-xl sm:text-2xl wow fadeIn">
          <FormattedMessage id="home.first.banner.otherTxt" />
        </p>
      </div>
      <div className="item swiper-home-item bg-cover second" style={{ backgroundImage: `url(/assets/images/banner02@2x.jpg)` }}>
        <p className="text text-center font-semibold main-title text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <FormattedMessage id="home.second.banner.title" /><br />
          <FormattedMessage id="home.second.banner.subtitle" /></p>
        <p className="text text-center font-semibold sub-title text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <FormattedMessage id="home.second.banner.txt" /><br />
          <FormattedMessage id="home.second.banner.subtxt" /></p>
      </div>
      <div className="item font-semibold swiper-home-item bg-cover bg-center third" style={{ backgroundImage: `url(/assets/images/banner03@2x.jpg)` }}>
        <p className="w-9/12 max-w-screen-xl text text-center font-semibold main-title break-words text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <FormattedMessage id="home.third.banner.title" />
        </p>
      </div>
    </Swiper>
  );
};

export default AppScreen;
