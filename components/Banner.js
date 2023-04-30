import React from "react";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);
import Swiper from "react-id-swiper";

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
      <div className="item swiper-home-item bg-cover first" style={{backgroundImage: `url(/assets/images/banner01@2x.jpg)`}}>
        <div className="text main-title left-1/2 top-1/3 md:left-1/3 lg:left-1/4 wow fadeIn">
          <h2 className="mb-4 text-wihte text-center font-semibold text-3xl md:text-4xl lg:text-5xl">全球首家短视频社交投资平台</h2>
          <p className="text-wihte text-center sm:text-left font-semibold text-xl sm:text-2xl">学习其他成功交易者的方法提高自己的投资技能</p>
        </div>
        <p className="text text-center font-semibold sub-title left-1/2 top-2/3 md:left-2/3 text-xl sm:text-2xl wow fadeIn">学习顶级交易者的洞察力</p>
        <p className="text text-center break-normal font-semibold other-title left-1/2 top-3/4 md:left-3/4 text-xl sm:text-2xl wow fadeIn">随时随地，博采众长，互通有无</p>
      </div>
      <div className="item swiper-home-item bg-cover second" style={{backgroundImage: `url(/assets/images/banner02@2x.jpg)`}}>
        <p className="text text-center font-semibold main-title">为交易员服务<br/>精准报价 直连交易所</p>
        <p className="text text-center font-semibold sub-title">超便捷方式生成量化策略<br />GPT的正确打开方式</p>
      </div>
      <div className="item font-semibold swiper-home-item bg-cover third" style={{backgroundImage: `url(/assets/images/banner03@2x.jpg)`}}>
        <p className="text text-center font-semibold main-title">Autu Securities 通过衍生品提供全球金融市场的投资机会，<br/>包括股票、期货、商品、指数、加密货币等</p>
      </div>
    </Swiper>
  );
};

export default AppScreen;
