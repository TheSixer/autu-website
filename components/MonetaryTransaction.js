import React from "react";

const MonetaryTransaction = () => {
  return (
    <section className="monetary-trans">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="monetary-trans_header wow fadeInDown">
              <h2>货币对交易</h2>
              <h4>全球交易量最大的市场</h4>
            </div>
          </div>
          <div className="d-flex col-lg-6">
            <div className="monetary-trans_left wow fadeInLeft">
              <p className="monetary-trans_text">
                外汇交易是全球流动性最强、交易量最大的市场。通过外汇差价合约交易，您可以高效的买入或卖出一种货币兑另一种货币，并从短期或长期的汇价变动中获利
              </p>
              <p className="monetary-trans_text">
                Autu提供主流货币对交易，您可以通过STP无交易员模式体验外汇交易市场的极大流动性，发掘全球最大金融市场潜力
              </p>
              <div className="monetary-trans_image">
                <img
                  src="/assets/images/home/phone@2x.png"
                  className="phone"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="d-flex col-lg-6 ">
            <div className="monetary-trans_image wow fadeInRight">
              <img
                src="/assets/images/market/countries@2x.png"
                className="countries"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonetaryTransaction;
