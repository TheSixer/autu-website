import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const MarketBanner = (props) => {

  return (
    <section className="tools-banner py-28 lg:py-48 md:py-40 sm:py-28">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="text-center mb-16 lg:mb-24 wow fadeInDown">
              <h4 className="mb-4 text-white font-semibold text-lg lg:text-3xl md:text-3xl">
                <FormattedMessage id="live.banner.title" />
              </h4>
              <p className="text-white font-semibold text-base lg:text-2xl md:text-xl">
                <FormattedMessage id="live.banner.subtitle" />
              </p>
            </div>
          </Col>
          <Col xl={12} className="d-flex">
            <div className="tools-banner-rows mx-auto mb-16">
              <div className="tools-banner-rows-item wow fadeInUp">
                <img src="/assets/images/promotion/tiktok@2x.png" />
                <span><FormattedMessage id="tools.banner.windows" /></span>
              </div>
              <div className="tools-banner-rows-item wow fadeInDown">
                <img src="/assets/images/promotion/youtube@2x.png" />
                <span><FormattedMessage id="tools.banner.web" /></span>
              </div>
              <div className="tools-banner-rows-item wow fadeInUp">
                <img src="/assets/images/tools/android@2x.png" />
                <span><FormattedMessage id="tools.banner.android" /></span>
              </div>
              <div className="tools-banner-rows-item wow fadeInDown">
                <img src="/assets/images/promotion/videos@2x.png" />
                <span><FormattedMessage id="tools.banner.ios" /></span>
              </div>
            </div>
          </Col>
          <Col xl={12} className="d-flex">
            <div className="tools-banner-text mx-auto wow fadeInUp">
              <p className="text-white text-base md:text-lg leading-8 md:leading-8">
              <FormattedMessage id="live.banner.txt01" /><br/>
              <FormattedMessage id="live.banner.txt02" /><br/>
              <FormattedMessage id="live.banner.txt03" /><br/>
              <FormattedMessage id="live.banner.txt04" />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MarketBanner;
