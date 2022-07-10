import React from "react";
import PropTypes from "prop-types";

const SmallStyleWrapper = ({ children }) => {
  return ( 
    <div className="row">
      <div className="mb-3">
      { children }
      </div>
    </div>
  );
};

SmallStyleWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
 
export default SmallStyleWrapper;