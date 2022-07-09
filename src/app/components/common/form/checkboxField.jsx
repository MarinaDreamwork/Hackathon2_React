import React from "react";
import PropTypes from "prop-types";
import { useSocialNetwork } from "../../../hooks/socialNetwork";

const CheckboxField = ({ label, value, onFieldChange, type }) => {
  const { socialNetworks } = useSocialNetwork();
  console.log("sic", socialNetworks);

  return ( 
    <div className="mt-3">
    <label>{label}</label>
    {
      socialNetworks.map((item, index) => (
        <div
          key={index.id}
          className="form-check m-1"
        >
        <input
          className="form-check-input"
          name={item.label}
          type={type}
          value={value}
          id="flexCheckDisabled" 
          onChange={() => onFieldChange(item.id)}
        />
        <label
          className="form-check-label"
          htmlFor="flexCheckDisabled"
        >
          {item.label}
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