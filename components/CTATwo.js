import React from "react";
import { FormattedMessage } from "react-intl";

const CTATwo = () => {

  return (
    <section className="cta-two">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="d-flex col-md-6 col-lg-5">
            <div className="cta-two__content m-auto">
              <h3 className="cta-two__content-title wow fadeInDown" data-wow-delay=".4s">
                <FormattedMessage id="home.section.title" />
              </h3>
              <div className="cta-two__text wow fadeInUp">
                <p>
                <FormattedMessage id="home.section.txt01" /><br/>
                <FormattedMessage id="home.section.txt02" /><br/>
                <FormattedMessage id="home.section.txt03" /><br/>
                <FormattedMessage id="home.section.txt04" />
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex col-md-6 col-lg-5">
            <div className="sm:mr-auto cta-two__images">
              <div className="cta-two__images-item">
                <img
                  src="/assets/images/home/vmware@2x.png"
                  className="wow rotateInDownLeft"
                  data-wow-duration="1500ms"
                  alt=""
                />
              </div>
              <div className="cta-two__images-item">
                <img
                  src="/assets/images/home/equinix@2x.png"
                  className="wow rotateInDownRight"
                  data-wow-duration="1500ms"
                  alt=""
                />
              </div>
              <div className="cta-two__images-item">
                <img
                  src="/assets/images/home/national@2x.png"
                  className="wow fadeInUp"
                  data-wow-duration="1500ms"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
