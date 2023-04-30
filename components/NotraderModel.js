import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NotraderModel = (props) => {

  return (
    <section className="testimonials-one no-trader">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="testimonials-one__thumb-carousel-wrap wow slideInLeft">
              <div className="testimonials-one__image">
                <img src="/assets/images/home/relationship@2x.png" className="no-trader-img" alt="Awesome Image" />
              </div>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="my-auto wow slideInRight">
              <h4 className="my-auto-title">STP模式（直连交易所）</h4>
              <div className="testimonials-one__carousel">
                <p className="testimonials-one__text no-trader-text">采用STP模式，所有订单都直通交易所，保证交易过程的透明和公正</p>
                <p className="testimonials-one__text no-trader-text">STP模式是我们一直秉承的原则，我们致力于为客户提供最优质的交易体验，让您在股票、期货、加密货币等金融市场上获得更好的交易结果</p>
              </div>
              <a href="#" className={`thm-btn main-nav__btn active`}>
                <span>开立账户</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotraderModel;
