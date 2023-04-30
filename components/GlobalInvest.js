import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const GlobalInvest = (props) => {

  return (
    <section className="global_invest" id="invest">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="global_invest_header wow flipInX">
              <h4>股票：投资全球各国权益类资产</h4>
              <p>可以交易美国（纽交所、纳斯达克）、香港、英国、欧洲（巴黎交易所、法兰克福交易所、马德里交易所）等数千家全球上市公司的股票资产</p>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="global_invest_text wow fadeInDown">
              <p>
                双向交易，可以做多做空，在上涨或下跌行情中均<br/>可捕捉机会<br/>
                高杠杆放大交易头寸：股票交易杠杆可高达 1:20<br/>
                提供极具竞争力的交易佣金，低于行业平均成本<br/>
                产品选择丰富，助您更容易地实现资本增值
              </p>

              <a href="#" className={`thm-btn main-nav__btn active`}>
                <span>开立账户</span>
              </a>

              <p className="global_invest_text-tips">*在企业财报发布的当天，会出现保证金上调的情况。这是一项<br/>客户保护措施，可帮助避免财报发布后常出现的价格跳空</p>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="global_invest_image wow fadeInUp">
              <img src="/assets/images/market/companies@2x.png" alt="Awesome Image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GlobalInvest;
