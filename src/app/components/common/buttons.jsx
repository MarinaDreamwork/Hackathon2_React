import React from "react";
import PropTypes from "prop-types";

const Button = ({ style, name, ...rest }) => {
  return (
    <button className={style} {...rest}>
      {name}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.string,
  name: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Button;
