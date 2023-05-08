import React from "react";
import { FormattedMessage } from "react-intl";

const FuturesAndSpot = () => {
  return (
    <section className="futures-spot">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="futures-spot_header wow flipInX">
              <h2>
                <FormattedMessage id="market.commodities.title" />
              </h2>
              <h4><FormattedMessage id="market.commodities.subtitle" /></h4>
              <p><FormattedMessage id="market.commodities.txt01" /><br/><FormattedMessage id="market.commodities.txt02" /></p>
            </div>
          </div>
          <div className="d-flex col-md-6">
            <div className="futures-spot_image wow fadeInUp">
              <img
                className="max-w-full mb-16 md:mt-0 md:w-80 lg:w-96"
                src="/assets/images/market/futures@2x.png"
                alt=""
              />
            </div>
          </div>
          <div className="d-flex col-md-6 ">
            <div className="futures-spot_list wow fadeInDown">
              <div className="futures-spot_list-item">
                <div className="futures-spot_list-img">
                  <img
                    src="/assets/images/market/oil@2x.png"
                    alt=""
                  />
                </div>
                <ul>
                  <li>
                    <p>美国西得克萨斯原油</p>
                  </li>
                  <li>
                    <p>英国布伦特原油</p>
                  </li>
                  <li>
                    <p>天然气</p>
                  </li>
                </ul>
              </div>
              <div className="futures-spot_list-item">
                <div className="futures-spot_list-img">
                  <img
                    src="/assets/images/market/gold@2x.png"
                    alt=""
                  />
                </div>
                <ul>
                  <li>
                    <p>黄金</p>
                  </li>
                  <li>
                    <p>白银</p>
                  </li>
                  <li>
                    <p>铜</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturesAndSpot;
