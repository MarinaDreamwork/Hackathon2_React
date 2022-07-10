import React from "react";

const Preloader = (style) => {
  return (
    <div className={"spinner-border " + style} role="status">
      <span className="visually-hidden"></span>
    </div>
  );
};
 
export default Preloader;