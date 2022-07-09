import React from "react";
import PropTypes from "prop-types";

const FileInput = ({ type, name, onFieldChange }) => {
  return ( 
    <div className="input-group">
      <input
        type={type}
        name={name}
        onChange={onFieldChange}
        className="form-control"
        id="fileUpload"
        aria-describedby="inputGroupFileAddon04"
        aria-label="Upload"
      />
    </div>
  );
};

FileInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired
};
 
export default FileInput;