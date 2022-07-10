import React from "react";
import PropTypes from "prop-types";

const Button = ({ style, color, name, ...rest }) => {
  return (
    <button className={"btn btn-" + color + " " + style} {...rest}>
      {name}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Button;
