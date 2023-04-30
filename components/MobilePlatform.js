import React from "react";

const MobilePlatform = () => {
  return (
    <section className="futures-spot">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="futures-spot_header wow flipInX">
              <h2>手机端交易平台</h2>
              <h4>安卓• iPhone</h4>
              <p>适用于iOS和Android设备的cTrader原生应用程序<br/>具有丰富的图表功能、高级订单类型和一系列重要的账户信息</p>
            </div>
          </div>
          <div className="d-flex col-lg-7">
            <div className="futures-spot_image wow fadeInUp">
              <img
                src="/assets/images/tools/phone-soft@2x.png"
                className="phone_soft"
                alt=""
              />
            </div>
          </div>
          <div className="d-flex col-lg-5 ">
            <div className="futures-spot_stores wow fadeInDown">
              <a href="https://play.google.com/store/apps/details?id=com.spotware.ct" target="_blank"><img src="/assets/images/tools/google-play@2x.png" /></a>
              <a href="https://www.amazon.com/gp/product/B0BGHKXRSL/ref=mas_pm_ctrader" target="_blank"><img src="/assets/images/tools/amazon-store@2x.png" /></a>
              <a href="https://apps.apple.com/cy/app/spotware-ctrader/id767428811" target="_blank"><img src="/assets/images/tools/app-store@2x.png" /></a>
            </div>
          </div>
          <div className="col-lg-12">
            <p className="futures-spot_text">平台提供22种语言，允许交易者提交市场、限价、止损和止损限价订单，对于每个交易品种可以查看品种信息、<br/>实时市场情绪、交易时间表、动态杠杆时间表、外部新闻等</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilePlatform;
