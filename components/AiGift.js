import React from "react";

const CTATwo = () => {
  return (
    <section className="cta-two">
      <div className="container">
        <div className="row">
          <div className="d-flex col-lg-6">
            <div className="cta-two__content wow fadeInUp">

              <h3 className="cta-two__content-title ai">AI赋能，降低普通交易员进入专业领域的门槛</h3>
              <div className="cta-two__text">
                <p>
                  简单便捷的内嵌自动化交易工具<br/>
                  针对高端客户提供CHATGPT接口辅助策略研发，协助无经验客户将交易策略转化为自动交易系统<br/>
                  内嵌跟单系统，引入专业交易人士展示交易策略, 供相互学习与启发<br/>
                  多种交易工具和行情分析，如财经日历、制图工具、技术指标与开放API等，帮助用户做出更明智的交易决策
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex col-lg-6 ">
            <div className="cta-two__image wow fadeInDown">
              <img
                src="/assets/images/home/aitrader@2x.png"
                className="ai-img fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
