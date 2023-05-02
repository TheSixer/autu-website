import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const GlobalInvest = (props) => {

  return (
    <section className="global_invest" id="invest">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="global_invest_header wow flipInX">
              <h4><FormattedMessage id="market.stock.title" /></h4>
              <p><FormattedMessage id="market.stock.subtitle" /></p>
            </div>
          </Col>
          <Col md={6} className="d-flex">
            <div className="global_invest_text w-full laptop:w-2/3 wow fadeInDown">
              <p>
              <FormattedMessage id="market.stock.txt01" /><br/>
              <FormattedMessage id="market.stock.txt02" /><br/>
              <FormattedMessage id="market.stock.txt03" /><br/>
              <FormattedMessage id="market.stock.txt04" />
              </p>

              <a href="#" className={`thm-btn main-nav__btn active`}>
                <span><FormattedMessage id="head.menu.newAccount" /></span>
              </a>

              <p className="global_invest_text-tips"><FormattedMessage id="market.stock.tips" /></p>
            </div>
          </Col>
          <Col md={6} className="d-flex">
            <div className="global_invest_image wow fadeInUp">
              <img className="max-w-full mx-auto mt-16 my:mt-0 sm:w-2/3 md:w-80 lg:w-96" src="/assets/images/market/companies@2x.png" alt="Awesome Image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GlobalInvest;
