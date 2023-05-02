import React from "react";
import { FormattedMessage } from "react-intl";

const MonetaryTransaction = () => {
  return (
    <section className="monetary-trans">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="monetary-trans_header wow fadeInDown">
              <h2><FormattedMessage id="tools.action.title" /></h2>
              <h4><FormattedMessage id="tools.action.subtitle" /></h4>
            </div>
          </div>
          <div className="d-flex col-md-6">
            <div className="monetary-trans_left wow fadeInLeft">
              <p className="monetary-trans_text"><FormattedMessage id="tools.action.txt01" /></p>
              <p className="monetary-trans_text"><FormattedMessage id="tools.action.txt02" /></p>
            </div>
          </div>
          <div className="d-flex col-md-6 mt-12 md:mt-0">
            <div className="monetary-trans_image wow fadeInRight">
              <img
                className="max-w-full sm:w-96 md:w-full lg:w-4/5"
                src="/assets/images/tools/computer@2x.png"
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
