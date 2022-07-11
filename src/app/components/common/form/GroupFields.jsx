import React from 'react';
import PropTypes from 'prop-types';

const GroupFields = ({ label, type, value, onFieldChange, items }) => {
  return (
    <div className="mt-3 border rounded p-2 shadow">
      <label className="d-flex justify-content-center">{label}</label>
      {items.map((item, index) => (
        <div key={index.id} className="form-label m-1">
          <label className="form-label" htmlFor={item.id}>
            {item.label}
          </label>
          <input
            className="form-control"
            name={item.label}
            type={type}
            value={value}
            id={item.id}
            onChange={(e) => onFieldChange(e)}
          />
        </div>
      ))}
    </div>
  );
};

GroupFields.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onFieldChange: PropTypes.func.isRequired
};

export default GroupFields;
