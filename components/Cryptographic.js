import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Cryptographic = (props) => {

  return (
    <section className="global_invest">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="global_invest_header wow fadeInDown">
              <h4>加密资产</h4>
              <p>Autu为您提供了一种全新的投资机会，通过交易全球最热门的加密数字货币衍生品合约，参与总体市值超2万亿美金的加密资产市场</p>
            </div>
          </Col>
          <Col xl={12} className="d-flex">
            <div className="global_invest_currency wow bounceIn">
              <img src="/assets/images/market/currency@2x.png" alt="Awesome Image" />
            </div>
          </Col>
          <Col xl={12} className="d-flex">
            <div className="global_invest_text wow fadeInUp">
              <p className="global_invest_text-center">
                交易全球最热加密数字货币对：比特币、以太坊、币安币、莱特币、狗狗币、波卡比等<br/>
                每周 7 天，每天 24 小时连轴交易<br/>
                相比纯粹加密货币交易平台，在Autu交易成本更低，且无清算保证金损失
              </p>

              <p className="global_invest_text-warning">加密资产的价格波动较为剧烈，为寻求高回报的投资者提供了更多机会和选择</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cryptographic;
