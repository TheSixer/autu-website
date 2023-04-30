import React from "react";

const MonetaryTransaction = () => {
  return (
    <section className="monetary-trans">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="monetary-trans_header wow fadeInDown">
              <h2>电脑端交易平台</h2>
              <h4>Autu的cTrader桌面端程序具备强大的交易及复盘功能</h4>
            </div>
          </div>
          <div className="d-flex col-lg-6">
            <div className="monetary-trans_left wow fadeInLeft">
              <p className="monetary-trans_text">提供手动交易、算法交易、复制交易、图表功能、技术分析、市场重演等功能，供交易者复盘、分析、回测与优化</p>
              <p className="monetary-trans_text">界面可定制，允许折叠和展开块、缩放、更改颜色图表设置和移动图表等等，全部可由用户自行操作</p>
            </div>
          </div>
          <div className="d-flex col-lg-6 ">
            <div className="monetary-trans_image wow fadeInRight">
              <img
                src="/assets/images/tools/computer@2x.png"
                className="computer"
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
