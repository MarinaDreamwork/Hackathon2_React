import React from 'react';
import PropTypes from 'prop-types';

const BarProgress = ({ label, completed, bgColor }) => {
  return (
    <div className="progressContainer">
      <label htmlFor="">{label}</label>
      <div className="containerStyles">
        <div
          className="fillerStyles"
          style={{ backgroundColor: bgColor, width: `${completed}%` }}
        >
          <span className="labelStyles">{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
};
BarProgress.propTypes = {
  label: PropTypes.string,
  completed: PropTypes.number,
  bgColor: PropTypes.string
};
export default BarProgress;
