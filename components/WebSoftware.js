import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const WebSoftware = (props) => {
  return (
    <section className="global_invest">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="global_invest_header wow flipInX">
              <h4>Web端交易平台</h4>
              <p>Web平台可在任何设备上进行，无需安装任何软件，即可随时随地登录您的帐户</p>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="global_invest_text wow fadeInDown">
              <p>网页版平台是针对浏览器或Mac用户的强大解决方<br/>案，拥有与Windows桌面版完全相同的图表和交<br/>易功能（不包括cTrader自动交易） ，尤其非常适<br/>合Mac用户</p>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="global_invest_right">
               <div className="global_invest_image wow fadeInUp">
                <img src="/assets/images/tools/software@2x.png" className="software" alt="Awesome Image" />
              </div>

              <a href="#" className={`thm-btn main-nav__btn active`}>
                <span>点击进入</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WebSoftware;
