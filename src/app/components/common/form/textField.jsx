import React from 'react';
import PropTypes from 'prop-types';
import SmallStyleWrapper from '../smallStyleWrapper';

const TextField = ({ label, type, name, value, onFieldChange, error }) => {
  return (
    <SmallStyleWrapper>
      <label htmlFor="exampleFormControlInput1" className="form-label">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        className="form-control shadow"
        id="exampleFormControlInput1"
        placeholder={type !== 'number' ? name : '0'}
        onChange={onFieldChange}
        error={error}
      />
      {error && <p className="invalid-feedback">{error}</p>}
    </SmallStyleWrapper>
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
