import React from "react";

const BlockTitle = (props) => {
  return (
    <div className={`block-title text-${props.textAlign} wow fadeIn`}>
      <p>{props.paraText}</p>
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">{props.titleText}</h3>
    </div>
  );
};

export default BlockTitle;
