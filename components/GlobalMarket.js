import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const GlobalMarket = (props) => {

  return (
    <section className="global-market" id="global">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="global-market-header wow fadeInDown">
              <h2>环球股票指数</h2>
              <p>交易全球各大交易所股票指数，捕捉全球宏观或经济活动的机会（现货、期货均可交易）</p>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="global-market-left wow fadeInLeft">
              <div className="global-market_image">
                <img src="/assets/images/market/markets@2x.png" alt="Awesome Image" />
              </div>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="global-market-list wow fadeInRight">
              <span>Australia 200 Index</span><span>澳洲200指数</span>
              <span>US 30 Index</span><span>道琼斯30指数</span>
              <span>Euro Stoxx 50 Index</span><span>欧洲Stoxx50指数</span>
              <span>France 40 Index</span><span>法国CAC40指数</span>
              <span>German 30 Index</span><span>德国DAX30估价指数</span>
              <span>Hong Kong index</span><span>香港恒生指数</span>
              <span>Japan 225 Index</span><span>日经225指数</span>
              <span>US 500 Index</span><span>标准普尔500指数</span>
              <span>UK 100 Index</span><span>英国富时100指数</span>
              <span>Nasdaq100 Index</span><span> 纳斯达克100指数</span>
              <span>China 50 Index</span><span>富时中国A50指数</span>
              <span>HK H Shares</span><span>香港H股</span>
              <span>Switzerland 20 index</span><span>瑞士20指数</span>
              <span>India 50 Index</span><span>印度 50 指数</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GlobalMarket;
