import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, name, ...rest }) => {
  return (
    <button className={"btn btn-sm m-1 btn-" + color} {...rest}>
      {name}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
};

export default Button;
