import React from "react";

const CTATwo = () => {
  return (
    <section className="cta-two">
      <div className="container">
        <div className="row">
          <div className="d-flex col-lg-6">
            <div className="cta-two__content">
              <h3 className="cta-two__content-title wow fadeInDown" data-wow-delay=".4s">顶级执行&交易条件</h3>
              <div className="cta-two__text wow fadeInUp">
                <p>
                数据中心部署于伦敦与纽约的Equinix<br/>
                交易产品来自全球多个交易所，具有高流动性和丰富的市场深度<br/>
                直联全球各大交易所CME、CBOT, NYMEX, HKEX, SGX..<br/>
                交易系统采用先进的技术和服务器设备，保证订单执行速度
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex col-lg-6 ">
            <div className="cta-two__images">
              <div className="cta-two__images-item">
                <img
                  src="/assets/images/home/vmware@2x.png"
                  className="wow rotateInDownLeft"
                  data-wow-duration="1500ms"
                  alt=""
                />
              </div>
              <div className="cta-two__images-item">
                <img
                  src="/assets/images/home/equinix@2x.png"
                  className="wow rotateInDownRight"
                  data-wow-duration="1500ms"
                  alt=""
                />
              </div>
              <div className="cta-two__images-item">
                <img
                  src="/assets/images/home/national@2x.png"
                  className="wow fadeInUp"
                  data-wow-duration="1500ms"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
