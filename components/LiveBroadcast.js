import React from "react";
import { FormattedMessage } from "react-intl";

const LiveBroadcast = () => {
  return (
    <section className="live_broadcast">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="live_broadcast_contain my-16 md:my-48 wow fadeInDown">
              <h4><FormattedMessage id="live.apply.video" /></h4>
            </div>
            <div className="live_broadcast_contain my-16 md:my-48 wow fadeInDown">
              <h4><FormattedMessage id="live.apply.partnner" /><br/><FormattedMessage id="live.apply.contact" /></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveBroadcast;
