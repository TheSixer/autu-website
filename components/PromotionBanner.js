import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MarketBanner = (props) => {

  return (
    <section className="tools-banner py-28 lg:py-48 md:py-40 sm:py-28">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="text-center mb-16 lg:mb-24 wow fadeInDown">
              <h4 className="mb-4 text-white font-semibold text-lg lg:text-3xl md:text-3xl">主流短视频平台 • 20+种交易策略直播</h4>
              <p className="text-white font-semibold text-base lg:text-2xl md:text-xl">电脑版 • 网页版 • 移动端交易平台</p>
            </div>
          </Col>
          <Col xl={12} className="d-flex">
            <div className="tools-banner-rows mx-auto mb-16">
              <div className="tools-banner-rows-item wow fadeInUp">
                <img src="/assets/images/promotion/tiktok@2x.png" />
                <span>Windows平台</span>
              </div>
              <div className="tools-banner-rows-item wow fadeInDown">
                <img src="/assets/images/promotion/youtube@2x.png" />
                <span>Web平台</span>
              </div>
              <div className="tools-banner-rows-item wow fadeInUp">
                <img src="/assets/images/tools/android@2x.png" />
                <span>安卓平台</span>
              </div>
              <div className="tools-banner-rows-item wow fadeInDown">
                <img src="/assets/images/promotion/videos@2x.png" />
                <span>IOS平台</span>
              </div>
            </div>
          </Col>
          <Col xl={12} className="d-flex">
            <div className="tools-banner-text wow fadeInUp">
              <p className="text-white text-base md:text-lg leading-8 md:leading-8">
                直播间观看他人的交易操作，学习和获取投资技巧<br/>
                也可短视频发布自己的交易观点和经验或直播操作，与其他投资者交流和分享，建立自己的影响力<br/>
                全新的社交交易方式，你可以更加直观地了解市场动态，更加灵活地做出决策，从而实现更好的投资回报。无论你是新手还是经验丰富的投资者，都可以在这个平台上找到适合自己的投资机会和交流对象
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MarketBanner;
