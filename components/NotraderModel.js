import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const NotraderModel = (props) => {

  return (
    <section className="testimonials-one no-trader">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6} xl={5} className="d-flex">
            <div className="my-auto testimonials-one__thumb-carousel-wrap wow slideInLeft">
              <div className="testimonials-one__image">
                <img src="/assets/images/home/relationship@2x.png" className="no-trader-img" alt="Awesome Image" />
              </div>
            </div>
          </Col>
          <Col md={6} xl={5} className="d-flex">
            <div className="my-auto wow slideInRight">
              <h4 className="my-auto-title">
                <FormattedMessage id="home.stpModal.title" />
              </h4>
              <div className="testimonials-one__carousel">
                <p className="testimonials-one__text no-trader-text">
                  <FormattedMessage id="home.stpModal.txt01" />
                </p>
                <p className="testimonials-one__text no-trader-text">
                  <FormattedMessage id="home.stpModal.txt02" />
                  <FormattedMessage id="home.stpModal.txt03" />
                </p>
              </div>
              <a href="#" className={`thm-btn main-nav__btn active`}>
                <span>
                  <FormattedMessage id="head.menu.newAccount" />
                </span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotraderModel;
