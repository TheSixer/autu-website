import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const Cryptographic = (props) => {

  return (
    <section className="global_invest">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="global_invest_header wow fadeInDown">
              <h4><FormattedMessage id="market.cryptocurrencies.title" /></h4>
              <p><FormattedMessage id="market.cryptocurrencies.subtitle" /></p>
            </div>
          </Col>
          <Col xl={12} className="d-flex">
            <div className="global_invest_currency wow bounceIn">
              <img className="mx-auto lg:w-4/5 laptop:w-3/5 mxl:w-1/2" src="/assets/images/market/currency@2x.png" alt="Awesome Image" />
            </div>
          </Col>
          <Col xl={12} className="d-flex">
            <div className="global_invest_text wow fadeInUp">
              <p className="global_invest_text-center">
              <FormattedMessage id="market.cryptocurrencies.txt01" /><br/>
              <FormattedMessage id="market.cryptocurrencies.txt02" /><br/>
              <FormattedMessage id="market.cryptocurrencies.txt03" />
              </p>

              <p className="global_invest_text-warning"><FormattedMessage id="market.cryptocurrencies.warn" /></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cryptographic;
