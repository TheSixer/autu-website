import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const FindMasterTrader = (props) => {

  return (
    <section className="global_invest">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="global_invest_header">
              <h4><FormattedMessage id="live.find.experts" /></h4>

              <a href="#" className={`thm-btn main-nav__btn active`}>
                <span>Coming soon</span>
              </a>
            </div>
          </Col>
          <Col sm={6} className="d-flex">
            <div className="w-full">
               <div className="w-full wow fadeInUp">
                <img className="rounded-2xl my-4 mx-auto lg:w-96 md:w-80 sm:w-full w-full" src="/assets/images/promotion/trader_1.png" alt="Awesome Image" />
              </div>
            </div>
          </Col>
          <Col sm={6} className="d-flex">
            <div className="w-full">
               <div className="w-full wow fadeInDown">
                <img className="rounded-2xl my-4 mx-auto lg:w-96 md:w-80 sm:w-full w-full" src="/assets/images/promotion/trader_2.png" alt="Awesome Image" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FindMasterTrader;
