import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Calendar from "./Calender";

const MarketBanner = (props) => {

  return (
    <section className="news-banner">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="news-banner-content">
              <h4>经济日历</h4>
              <p>使用经济日历，追踪重磅新闻、市场大事件和数据发布<br/>定期查看经济日历，掌握金融市场最新动态</p>
              <Calendar />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MarketBanner;
