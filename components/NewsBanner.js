import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Calendar from "./Calender";
import { FormattedMessage } from "react-intl";

const MarketBanner = (props) => {

  return (
    <section className="news-banner">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="news-banner-content">
              <h4><FormattedMessage id="news.banner.title" /></h4>
              <p><FormattedMessage id="news.banner.subtitle" /></p>
              <Calendar />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MarketBanner;
