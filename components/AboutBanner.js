import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const MarketBanner = (props) => {

  return (
    <section className="about-banner">
      <Container>
        <Row className="justify-content-md-center">
          <Col xl={8}>
            <div className="about-banner-content wow flipInX">
              <h4 className="text-lg sm:text-xl md:text-2xl md:text-3xl"><FormattedMessage id="about.banner.title" /></h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MarketBanner;
