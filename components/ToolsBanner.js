import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const MarketBanner = (props) => {

  return (
    <section className="tools-banner py-28 lg:py-60 md:py-48 sm:py-28">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="tools-banner-content wow fadeInDown">
              <h4 className="tools-banner-title text-xl md:text-2xl lg:text-3xl"><FormattedMessage id="tools.banner.title" /></h4>
              <p className="tools-banner-sub_title text-base sm:text-lg md:text-xl lg:text-2xl"><FormattedMessage id="tools.banner.subtitle" /></p>
            </div>
          </Col>
          <Col md={5} className="d-flex">
            <div className="tools-banner-grid wow fadeInLeft">
              <a href="https://getctrader.com/autu/ctrader-autu-setup.exe" target="_blank" className="tools-banner-grid-item">
                <img src="/assets/images/tools/windows@2x.png" />
                <span><FormattedMessage id="tools.banner.windows" /></span>
              </a>
              <a href="https://getctrader.com/autu/ctrader-autu-setup.exe" target="_blank" className="tools-banner-grid-item">
                <img src="/assets/images/tools/website@2x.png" />
                <span><FormattedMessage id="tools.banner.web" /></span>
              </a>
              <a href="../assets/sources/cTrader_4.6.54385_apkcombo.com.apk" target="_blank" className="tools-banner-grid-item">
                <img src="/assets/images/tools/android@2x.png" />
                <span><FormattedMessage id="tools.banner.android" /></span>
              </a>
              <a href="https://apps.apple.com/cy/app/spotware-ctrader/id767428811" target="_blank" className="tools-banner-grid-item">
                <img src="/assets/images/tools/iphone@2x.png" />
                <span><FormattedMessage id="tools.banner.ios" /></span>
              </a>
            </div>
          </Col>
          <Col md={7} className="d-flex mt-8 md:mt-0">
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
