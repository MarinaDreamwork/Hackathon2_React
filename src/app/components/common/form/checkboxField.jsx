import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getKeySkills } from "../../../../store/keySkills";

const CheckboxField = ({ label, value, onFieldChange, type }) => {
  const keySkills = useSelector(getKeySkills());
  console.log("keySkills", keySkills);

  return ( 
    <div className="mt-3 border rounded p-2 shadow">
    <label className="d-flex justify-content-center">{label}</label>
    {
      keySkills.map((item, index) => (
        <div
          key={index.id}
          className="form-check m-1"
        >
        <input
          className="form-check-input"
          name={item.name}
          type={type}
          value={value}
          id="flexCheckDisabled" 
          onChange={() => onFieldChange(item.id)}
        />
        <label
          className="form-check-label"
          htmlFor="flexCheckDisabled"
        >
          {item.name}
        </label>
      </div> ))
    }
    </div>
  );
};
CheckboxField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired
};
 
export default CheckboxField;