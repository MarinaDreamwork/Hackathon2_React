import React from "react";
import PropTypes from "prop-types";

const CheckboxField = ({ label, value, name, onFieldChange }) => {
  const socialNetworks = ["facebook", "vk", "telegram"];
  return ( 
    <div className="mt-3">
    <label>{label}</label>
    {
      socialNetworks.map((item) => (
        <div
          key={item}
          className="form-check m-1"
        >
        <input
          className="form-check-input"
          name={name}
          type="checkbox"
          value={value}
          id="flexCheckDisabled" 
          onChange={onFieldChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDisabled">
          {item}
        </label>
      </div> ))
    }
    </div>
  );
};
CheckboxField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired
};
 
export default CheckboxField;