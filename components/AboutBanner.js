import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MarketBanner = (props) => {

  return (
    <section className="about-banner">
      <Container>
        <Row className="justify-content-md-center">
          <Col xl={8}>
            <div className="about-banner-content wow flipInX">
              <h4>Autu Securities是一家面向个人投资者和机构客户的全球资产在线交易平台</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MarketBanner;
