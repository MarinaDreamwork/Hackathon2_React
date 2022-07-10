import React from "react";
import PropTypes from "prop-types";

const LargeStyleWrapper = ({ children }) => {
  return ( 
    <div className="container">
      <div className="border rounded m-auto pt-5 ps-5 pe-5 pb-3 mb-5 w-50 bg-light shadow-sm">
        { children }
      </div>
    </div>
  );
};

LargeStyleWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
 
export default LargeStyleWrapper;