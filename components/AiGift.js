import React from "react";
import { FormattedMessage } from "react-intl";

const CTATwo = () => {
  return (
    <section className="cta-two">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="d-flex col-md-6 col-lg-5">
            <div className="cta-two__content m-auto wow fadeInUp">

              <h3 className="cta-two__content-title ai">
                <FormattedMessage id="home.ai.title" />
              </h3>
              <div className="cta-two__text">
                <p>
                <FormattedMessage id="home.ai.txt01" /><br/>
                <FormattedMessage id="home.ai.txt02" /><br/>
                <FormattedMessage id="home.ai.txt03" /><br/>
                <FormattedMessage id="home.ai.txt04" />
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex col-md-6 col-lg-5 ">
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
