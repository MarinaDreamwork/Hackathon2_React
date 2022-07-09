import React from "react";
import PropTypes from "prop-types";

const CircleProgress = ({label, completed, bgColor}) => {
    const cleanPercentage = (completed) => {
        const tooLow = !Number.isFinite(+completed) || completed < 0;
        const tooHigh = completed > 100;
        return tooLow ? 0 : tooHigh ? 100 : +completed;
      };
  
      const pct = cleanPercentage(completed);
      const r = 70;
      const circ = 2 * Math.PI * r;
      const strokePct = ((100 - pct) * circ) / 100;
    return (
        <div>
            <label>{label}</label>
      <svg width={200} height={200}>
        <g transform={`rotate(-90 ${"100 100"})`}>
        <circle
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            stroke={"lightgrey" } 
            strokeWidth={"10px"}
            strokeDasharray={circ}
            strokeDashoffset={ 0}
            strokeLinecap="round"
          ></circle>
        <circle
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            stroke={strokePct !== circ ? bgColor : ""} 
            strokeWidth={"10px"}
            strokeDasharray={circ}
            strokeDashoffset={pct ? strokePct : 0}
            strokeLinecap="round"
          ></circle>
        </g>
        <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize={"1.5em"}
            stroke={bgColor}
          >
            {pct.toFixed(0)}%
          </text>
      </svg>
      </div>
    );
    
};
CircleProgress.propTypes = {
    label: PropTypes.string,
    completed: PropTypes.number,
    bgColor: PropTypes.string,
};
export default CircleProgress;