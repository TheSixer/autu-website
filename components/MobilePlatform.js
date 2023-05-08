import React from "react";
import { FormattedMessage } from "react-intl";

const MobilePlatform = () => {
  return (
    <section className="futures-spot">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-lg-10">
            <div className="futures-spot_header wow flipInX">
              <h2><FormattedMessage id="tools.mobile.title" /></h2>
              <h4><FormattedMessage id="tools.mobile.subtitle" /></h4>
              <p><FormattedMessage id="tools.mobile.content" /></p>
            </div>
          </div>
          <div className="d-flex col-md-7">
            <div className="futures-spot_image wow fadeInUp">
              <img
                src="/assets/images/tools/phone-soft@2x.png"
                className="phone_soft"
                alt=""
              />
            </div>
          </div>
          <div className="d-flex col-md-5 mt-16 md:mt-0">
            <div className="futures-spot_stores wow fadeInDown">
              <a href="https://play.google.com/store/apps/details?id=com.spotware.ct" target="_blank"><img src="/assets/images/tools/google-play@2x.png" /></a>
              <a href="https://www.amazon.com/gp/product/B0BGHKXRSL/ref=mas_pm_ctrader" target="_blank"><img src="/assets/images/tools/amazon-store@2x.png" /></a>
              <a href="https://apps.apple.com/cy/app/spotware-ctrader/id767428811" target="_blank"><img src="/assets/images/tools/app-store@2x.png" /></a>
            </div>
          </div>
          <div className="col-lg-10">
            <p className="futures-spot_text"><FormattedMessage id="tools.mobile.txt" /></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilePlatform;
