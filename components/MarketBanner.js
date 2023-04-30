import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MarketBanner = (props) => {

  return (
    <section className="market-banner">
      <Container>
        <Row>
          <Col xl={12}>
            <h4 className="market-banner-title wow fadeInDown">Autu使客户能够通过期货、期权、CFD等衍生品工具投资于全球范围内的各种金融市场产品
            <span>如全球股票、股票指数、商品期货、加密资产和货币对</span>等</h4>

            <div className="market-banner_list">
              <div className="market-banner_list_item wow fadeInDown">
                <img src="/assets/images/market/gpzs.png" alt="" />
                <span>股票市场</span>
              </div>
              <div className="market-banner_list_item wow fadeInUp">
                <img src="/assets/images/market/spqh.png" alt="" />
                <span>商品期货</span>
              </div>
              <div className="market-banner_list_item wow fadeInDown">
                <img src="/assets/images/market/nycp.png" alt="" />
                <span>能源产品</span>
              </div>
              <div className="market-banner_list_item wow fadeInUp">
                <img src="/assets/images/market/gjs.png" alt="" />
                <span>贵金属</span>
              </div>
              <div className="market-banner_list_item wow fadeInDown">
                <img src="/assets/images/market/gggp.png" alt="" />
                <span>各国股票</span>
              </div>
              <div className="market-banner_list_item wow fadeInUp">
                <img src="/assets/images/market/jmhb.png" alt="" />
                <span>加密资产</span>
              </div>
              <div className="market-banner_list_item wow fadeInDown">
                <img src="/assets/images/market/hbd.png" alt="" />
                <span>货币对</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MarketBanner;
