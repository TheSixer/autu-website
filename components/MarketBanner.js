import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const MarketBanner = (props) => {

  return (
    <section className="market-banner">
      <Container className="h-full">
        <Row className="justify-content-md-center h-full">
          <Col xl={10} className="d-flex flex-col h-full justify-center">
            <h4 className="market-banner-title text-lg sm:text-2xl md:text-3xl wow fadeInDown">
              <FormattedMessage id="market.banner.title" />
              <span><FormattedMessage id="market.banner.title1" /></span>
              <FormattedMessage id="market.banner.title2" />
            </h4>
            <div className="market-banner_list md:px-28 gap-y-4 gap-x-12 sm:gap-x-18 md:gap-x-28 lg:gap-x-36">
              <div className="market-banner_list_item wow fadeInDown">
                <img className="w-14 mb-2 sm:mb-4sm:w-20 md:w-24" src="/assets/images/market/gpzs.png" alt="" />
                <p><FormattedMessage id="market.banner.stock" /></p>
              </div>
              <div className="market-banner_list_item wow fadeInUp">
                <img className="w-14 mb-2 sm:mb-4sm:w-20 md:w-24" src="/assets/images/market/spqh.png" alt="" />
                <p><FormattedMessage id="market.banner.conmmodity" /></p>
              </div>
              <div className="market-banner_list_item wow fadeInDown">
                <img className="w-14 mb-2 sm:mb-4sm:w-20 md:w-24" src="/assets/images/market/nycp.png" alt="" />
                <p><FormattedMessage id="market.banner.energies" /></p>
              </div>
              <div className="market-banner_list_item wow fadeInUp">
                <img className="w-14 mb-2 sm:mb-4sm:w-20 md:w-24" src="/assets/images/market/gjs.png" alt="" />
                <p><FormattedMessage id="market.banner.precious" /></p>
              </div>
              <div className="market-banner_list_item wow fadeInDown">
                <img className="w-14 mb-2 sm:mb-4sm:w-20 md:w-24" src="/assets/images/market/gggp.png" alt="" />
                <p><FormattedMessage id="market.banner.global" /></p>
              </div>
              <div className="market-banner_list_item wow fadeInUp">
                <img className="w-14 mb-2 sm:mb-4sm:w-20 md:w-24" src="/assets/images/market/jmhb.png" alt="" />
                <p><FormattedMessage id="market.banner.cryptocurrencies" /></p>
              </div>
              <div className="market-banner_list_item wow fadeInDown">
                <img className="w-14 mb-2 sm:mb-4sm:w-20 md:w-24" src="/assets/images/market/hbd.png" alt="" />
                <p><FormattedMessage id="market.banner.currency" /></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MarketBanner;
