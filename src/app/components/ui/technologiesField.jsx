import React from "react";
import TextField from "../common/form/textField";
import PropTypes from "prop-types";
import Badge from "../common/badge";
import { getTechnologies } from "../../../store/technologies";

const TechnologiesFields = ({
    label,
    value,
    type,
    name,
    onFieldChange,
    error 
}) => {
  const technologies = dispatch(getTechnologies());
  return ( 
    <div>
    {
      technologies.map(tech => 
        <>
          <Badge color={tech.color} name={tech.label} />
          <TextField
            label={label}
            type={type}
            name={name}
            value={value}
            onFieldChange={onFieldChange}
            error={error}
          />
        </>
      )
    };
    </div>
   );
};

TechnologiesFields.propTypes = {
  value: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.array.isRequired,
  name: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired
};
 
export default TechnologiesFields;