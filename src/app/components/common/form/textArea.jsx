import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ label, onFieldChange, name }) => {
  return (
    <div className="mb-3">
      <label
        htmlFor="exampleFormControlTextarea1"
        className="form-label">
          {label}
      </label>
      <textarea
        name={name}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        onChange={onFieldChange}
      />
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
 
export default TextArea;