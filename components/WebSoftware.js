import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const WebSoftware = (props) => {
  return (
    <section className="global_invest">
      <Container>
        <Row className="justify-content-md-center">
          <Col xl={10}>
            <div className="global_invest_header wow flipInX">
              <h4><FormattedMessage id="tools.section.title" /></h4>
              <p><FormattedMessage id="tools.section.subtitle" /></p>
            </div>
          </Col>
          <Col md={6} className="d-flex">
            <div className="global_invest_text w-4/5 lg:w-3/5 wow fadeInDown">
              <p><FormattedMessage id="tools.section.txt" /></p>
            </div>
          </Col>
          <Col md={6} className="d-flex mt-16 md:mt-0">
            <div className="global_invest_right">
               <div className="global_invest_image wow fadeInUp">
                <img src="/assets/images/tools/software@2x.png" className="mx-auto max-w-full sm:w-96 md:w-full lg:w-2/3" alt="Awesome Image" />
              </div>

              <a href="http://app.autu.finance" className={`thm-btn main-nav__btn active`}>
                <span><FormattedMessage id="tools.section.enter" /></span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WebSoftware;
