import React from 'react';
import PropTypes from 'prop-types';
import SmallStyleWrapper from '../smallStyleWrapper';

const TextArea = ({ label, onFieldChange, name, value }) => {
  return (
    <SmallStyleWrapper>
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        {label}
      </label>
      <textarea
        value={value}
        name={name}
        className="form-control shadow"
        id="exampleFormControlTextarea1"
        rows="3"
        onChange={onFieldChange}
      />
    </SmallStyleWrapper>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default TextArea;
