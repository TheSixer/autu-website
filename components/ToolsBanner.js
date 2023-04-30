import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MarketBanner = (props) => {

  return (
    <section className="tools-banner py-28 lg:py-48 md:py-40 sm:py-28">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="tools-banner-content wow fadeInDown">
              <h4 className="tools-banner-title">满足您交易需求的全方位多终端交易平台</h4>
              <p className="tools-banner-sub_title">电脑版 • 网页版 • 移动端交易平台</p>
            </div>
          </Col>
          <Col xl={5} className="d-flex">
            <div className="tools-banner-grid wow fadeInLeft">
              <a href="https://getctrader.com/autu/ctrader-autu-setup.exe" target="_blank" className="tools-banner-grid-item">
                <img src="/assets/images/tools/windows@2x.png" />
                <span>Windows平台</span>
              </a>
              <a href="https://getctrader.com/autu/ctrader-autu-setup.exe" target="_blank" className="tools-banner-grid-item">
                <img src="/assets/images/tools/website@2x.png" />
                <span>Web平台</span>
              </a>
              <a href="../assets/sources/cTrader_4.6.54385_apkcombo.com.apk" target="_blank" className="tools-banner-grid-item">
                <img src="/assets/images/tools/android@2x.png" />
                <span>安卓平台</span>
              </a>
              <a href="https://apps.apple.com/cy/app/spotware-ctrader/id767428811" target="_blank" className="tools-banner-grid-item">
                <img src="/assets/images/tools/iphone@2x.png" />
                <span>IOS平台</span>
              </a>
            </div>
          </Col>
          <Col xl={7} className="d-flex">
            <div className="tools-banner-image wow fadeInRight">
              <img src="/assets/images/tools/versions@2x.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MarketBanner;
