import React from "react";
import PropTypes from "prop-types";
import { useTechnologies } from "../../../hooks/technologies";

const RangeArea = ({ type, onFieldChange, value }) => {
  const { technologies } = useTechnologies();

  return (
    <div className="mb-3">
      {
        technologies.map(tech => (
          <>
            <label htmlFor="customRange2"
            className="form-label">
              {tech.label}
            </label>
            <input
              type={type}
              value={value}
              className="form-range"
              min="0"
              max="100"
              onChange={onFieldChange}
            />
          </>
        ))
      }
    </div>
  );
};

RangeArea.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired
};
 
export default RangeArea;