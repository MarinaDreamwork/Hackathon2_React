import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SmallStyleWrapper from '../smallStyleWrapper';

const FileInput = ({ label, type, name, onFieldChange }) => {
  return (
    <SmallStyleWrapper>
      <label htmlFor="fileUpload" className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        onChange={(e) => onFieldChange(e)}
        className="form-control"
        id="fileUpload"
        aria-describedby="inputGroupFileAddon04"
        aria-label="Upload"
      />
    </SmallStyleWrapper>
  );
};

FileInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired
};

export default FileInput;
