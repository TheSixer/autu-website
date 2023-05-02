import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const CopyTrading = (props) => {

  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-40 global_invest">
      <Container>
        <Row className="justify-content-md-center">
          <Col xl={10}>
            <div className="global_invest_header wow flipInX">
              <h4><FormattedMessage id="tools.copy.title" /></h4>
              <p><FormattedMessage id="tools.copy.subtitle" /></p>
            </div>
          </Col>
          <Col md={5} className="d-flex">
            <div className="global_invest_text wow fadeInDown">
              <p>
              <FormattedMessage id="tools.copy.txt01" /><br/>
              <FormattedMessage id="tools.copy.txt02" /><br/>
              <FormattedMessage id="tools.copy.txt03" /><br/>
              <FormattedMessage id="tools.copy.txt04" /><br/>
              <FormattedMessage id="tools.copy.txt05" />
              </p>
            </div>
          </Col>
          <Col md={5} className="d-flex mt-16 md:mt-0 col-md-6">
            <div className="global_invest_right">
               <div className="global_invest_image wow fadeInUp">
                <img src="/assets/images/tools/web-soft@2x.png" className="mx-auto max-w-full sm:w-96 md:w-full lg:w-2/3" alt="Awesome Image" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CopyTrading;
