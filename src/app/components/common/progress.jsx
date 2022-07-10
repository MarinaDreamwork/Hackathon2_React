import React from "react";
import PropTypes from "prop-types";
import BarProgress from "../ui/barProgress";
import CircleProgress from "../ui/circleProgress";
const Progress = ({ changeSelect, label, completed, bgColor, type }) => {
  
   return (
    <div>
        <div className="containerSelect">
        <select value={type} className="form-select form-select-sm" aria-label=".form-select-lg example" onChange={(e) => changeSelect(e) } > 
            <option  value="bar">Bar</option>
            <option value="circle">Circle</option>
        </select>
        </div>
    {
        type === "circle" && <CircleProgress label={label} completed={completed} bgColor={bgColor} />
    }
    {
        type === "bar" && <BarProgress label={label} completed={completed} bgColor={bgColor} />

    }
    </div>
    );
 
};
Progress.propTypes = {
    label: PropTypes.string,
    completed: PropTypes.number,
    bgColor: PropTypes.string,
    type: PropTypes.string,
    changeSelect: PropTypes.func,
   
};

export default Progress;