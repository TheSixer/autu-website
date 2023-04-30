import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutIntro = (props) => {
  return (
    <>
      <section className="about-intro_01">
        <Container>
          <Row className="justify-content-md-center">
            <Col xl={10}>
              <div className="about-intro-content wow fadeIn">
                <p>澳图证券是一家注册于瓦努阿图的国际化证券公司，受瓦努阿图金融服务委员会监管，核心团队来自于核心团队来自于国际顶尖投资银行交易团队与顶级对冲基金，汇聚了全球各国顶尖学府的金融人才，团队拥有丰富的实战经验，深谙金融市场交易员的痛点，立志于打造一个真正为交易员服务的平台。</p>
                <p>我们具备多年积累的丰富行业经验和优质的全球资源，<span>在全球范围内寻求最佳的交易解决方案，专注于提供专业、高效、全面的服务给我们的客户。</span></p>
                <p>我们致力于为客户发掘和培育成功的交易伙伴，同时实时的策略展示与相互学习、启发，帮助客户在竞争激烈的市场中脱颖而出，成为交易界的佼佼者。</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-intro_02">
        <Container>
          <Row className="justify-content-md-center">
            <Col xl={10}>
              <div className="about-intro-content wow fadeIn">
                <p>平台最具创新性的地方在于提供多种经市场验证的收益稳定的策略跟单服务，并且致力于发掘和寻找全球各地的交易高手，供大家学习与交流。利用短视频与直播平台的便利，提供一个学习交流的平台，随时随地博采众长，互通有无。</p>

                <p>内嵌量化交易机器人的全球资产衍生品交易平台。提供网格交易、定投策略、追踪止盈、无限网格、期现套利等量化策略。</p>

                <p>同时平台推出自动化交易系统帮助交易员构建自己的交易策略。提供了大量的金融数据、回测工具和算法库。并且利用最新的Chat-GPT等工具，利用AI赋能，辅助无编程基础的交易员将自己的策略制作成程序。</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-intro_03">
        <Container>
          <Row className="justify-content-md-center">
            <Col xl={7}>
              <div className="about-intro-content wow fadeIn">
                <h4>Autu Vision & Mission</h4>
                <p>Vision: 全球领先的智能化衍生品交易平台，和交易者实现价值共赢</p>
                <p>Mission: 通过让交易更便捷、高效、智能，帮助客户提升交易效率和盈利能力，全球金融产品投资成为一件简单的事情</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-intro_04">
        <Container>
          <div className="row justify-content-md-center">
            <div className="col-lg-12">
              <h4 className="about-intro_04_title">公司理念</h4>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="thumbnail">
                <img className="m-auto" src="/assets/images/about/creative@2x.png" alt="..." />
                <div className="caption">
                  <h3>拥抱创新</h3>
                  <p>我们深信人工智能技术会对金融行业带来革命性的改变。我们会继续拥抱创新，不断向前</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="thumbnail">
                <img className="m-auto" src="/assets/images/about/corporation@2x.png" alt="..." />
                <div className="caption">
                  <h3>合作共赢</h3>
                  <p>我们始终致力于帮助交易者实现交易成功和收益增长，共享资源，共同发展</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="thumbnail">
                <img className="m-auto" src="/assets/images/about/trust@2x.png" alt="..." />
                <div className="caption">
                  <h3>值得信赖</h3>
                  <p>作为一家金融公司，客户资产安全是我们的核心责任，这也是我们不变的核心价值追求</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="thumbnail">
                <img className="m-auto" src="/assets/images/about/wacthing@2x.png" alt="..." />
                <div className="caption">
                  <h3>合乎监管</h3>
                  <p>我们将避免利益冲突，遵守反洗钱法规，处理记录和通信以及遵守所有适用的法规和法律</p>
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
