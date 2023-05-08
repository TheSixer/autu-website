import React from "react";
import { FormattedMessage } from "react-intl";

const MonetaryTransaction = () => {
  return (
    <section className="monetary-trans">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="monetary-trans_header wow fadeInDown">
              <h2><FormattedMessage id="market.currency.title" /></h2>
              <h4><FormattedMessage id="market.currency.subtitle" /></h4>
            </div>
          </div>
          <div className="d-flex col-md-6">
            <div className="monetary-trans_left wow fadeInLeft">
              <p className="monetary-trans_text">
              <FormattedMessage id="market.currency.txt01" />
              </p>
              <p className="monetary-trans_text">
              <FormattedMessage id="market.currency.txt02" />
              </p>
              <div className="monetary-trans_image my-16 md:mt-12">
                <img
                  src="/assets/images/home/phone@2x.png"
                  className="phone"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="d-flex col-md-6 mt-8 md:mt-0">
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
