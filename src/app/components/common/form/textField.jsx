import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onFieldChange, error }) => {
  return ( 
    <div className="mb-3">
      <label
        htmlFor="exampleFormControlInput1"
        className="form-label">
          {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        className="form-control"
        id="exampleFormControlInput1"
        placeholder={name}
        onChange={onFieldChange}
        error={error}
      />
      {
        error && <p className="invalid-feedback">{error}</p>
      }
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onFieldChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};
 
export default TextField;