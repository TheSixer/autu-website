import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const AboutIntro = (props) => {
  return (
    <>
      <section className="py-20 sm:py-24 md:py-32 lg:py-40 about-intro_01">
        <Container>
          <Row className="justify-content-md-center">
            <Col xl={10}>
              <div className="about-intro-content wow fadeIn">
                <p><FormattedMessage id="about.section.txt01" /></p>
                <p><FormattedMessage id="about.section.txt02" /><span><FormattedMessage id="about.section.txt022" /></span></p>
                <p><FormattedMessage id="about.section.txt03" /></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-20 sm:py-24 md:py-32 lg:py-40 about-intro_02">
        <Container>
          <Row className="justify-content-md-center">
            <Col xl={10}>
              <div className="about-intro-content wow fadeIn">
                <p><FormattedMessage id="about.info.txt01" /></p>
                <p><FormattedMessage id="about.info.txt02" /></p>
                <p><FormattedMessage id="about.info.txt03" /></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-20 sm:py-24 md:py-32 lg:py-40 about-intro_03">
        <Container>
          <Row className="justify-content-md-center">
            <Col xl={7}>
              <div className="about-intro-content wow fadeIn">
                <h4><FormattedMessage id="about.v&m.title" /></h4>
                <p><FormattedMessage id="about.v&m.subtitle" /></p>
                <p><FormattedMessage id="about.v&m.content" /></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-20 sm:py-24 md:py-32 lg:py-40 about-intro_04">
        <Container>
          <div className="row justify-content-md-center">
            <div className="col-lg-12">
              <h4 className="about-intro_04_title"><FormattedMessage id="about.philosophy.title" /></h4>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="thumbnail">
                <img className="m-auto" src="/assets/images/about/creative@2x.png" alt="..." />
                <div className="caption">
                  <h3><FormattedMessage id="about.philosophy.list01.title" /></h3>
                  <p><FormattedMessage id="about.philosophy.list01.content" /></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="thumbnail">
                <img className="m-auto" src="/assets/images/about/corporation@2x.png" alt="..." />
                <div className="caption">
                  <h3><FormattedMessage id="about.philosophy.list02.title" /></h3>
                  <p><FormattedMessage id="about.philosophy.list02.content" /></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="thumbnail">
                <img className="m-auto" src="/assets/images/about/trust@2x.png" alt="..." />
                <div className="caption">
                  <h3><FormattedMessage id="about.philosophy.list03.title" /></h3>
                  <p><FormattedMessage id="about.philosophy.list03.content" /></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="thumbnail">
                <img className="m-auto" src="/assets/images/about/wacthing@2x.png" alt="..." />
                <div className="caption">
                  <h3><FormattedMessage id="about.philosophy.list04.title" /></h3>
                  <p><FormattedMessage id="about.philosophy.list04.content" /></p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutIntro;
