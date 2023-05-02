import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import { FormattedMessage, useIntl } from "react-intl";

const Testimonials = (props) => {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "home.action.title" });

  return (
    <section className="testimonials-one">
      <Container>
        <Row className="justify-content-md-center">
          <Col xl={10}>
            <BlockTitle
              textAlign="center"
              titleText={title}
            />
          </Col>
          <Col md={6} className="d-flex">
            <div className="my-auto testimonials-one__thumb-carousel-wrap wow fadeInDown">
              <div className="testimonials-one__image">
                <img src="/assets/images/home/phone@2x.png" className="move" alt="Awesome Image" />
              </div>
            </div>
          </Col>
          <Col md={6} lg={5} className="d-flex">
            <div className="my-auto wow fadeInUp">
              <h4 className="my-auto-title">
                <FormattedMessage id="home.action.subtitle" />
              </h4>
              <div className="testimonials-one__carousel text-left">
                <p className="testimonials-one__text">
                  <FormattedMessage id="home.action.txt01" />
                  <br />
                  <FormattedMessage id="home.action.txt02" /><br />
                  <FormattedMessage id="home.action.txt03" /><br />
                  <FormattedMessage id="home.action.txt04" /></p>
                <p className="testimonials-one__text primary-txt">
                  <FormattedMessage id="home.action.txt05" />
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

export default Testimonials;
