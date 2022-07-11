import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ color, name, ...rest }) => {
  return (
    <span className={'badge m-1 bg-' + color} {...rest}>
      {name}
    </span>
  );
};

Badge.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string
};
export default Badge;
