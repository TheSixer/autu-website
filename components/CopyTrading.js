import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CopyTrading = (props) => {

  return (
    <section className="global_invest">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="global_invest_header wow flipInX">
              <h4>复制跟单系统Copy Trading</h4>
              <p>任何交易者都可以成为策略提供者，向关注者广播他们的交易信号，<br/>投资者可以发现策略，并随时开始和停止复制策略</p>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="global_invest_text wow fadeInDown">
              <p>
                具备多种高级风险管理设置<br/>
                详细的策略配置文件<br/>
                完全透明，显示完整历史和开放头寸<br/>
                详细的图表提供丰富的分析功能，协助交易员找到正确的策略<br/>
                界面友好、直观
              </p>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="global_invest_right">
               <div className="global_invest_image wow fadeInUp">
                <img src="/assets/images/tools/web-soft@2x.png" className="software" alt="Awesome Image" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CopyTrading;
