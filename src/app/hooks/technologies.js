import React, { useContext } from "react";
import PropTypes from "prop-types";

const TechnologiesContext = React.createContext();

export const useTechnologies = () => {
  return useContext(TechnologiesContext);
};

export const TechnologiesProvider = ({ children }) => {
  const initialState = [
    { id: "987654321", label: "HTML", progressInPercent: 0, color: "danger" },
    { id: "876543219", label: "CSS", progressInPercent: 0, color: "primary" },
    { id: "765432198", label: "JavaScript", progressInPercent: 0, color: "warning" },
  ];
  const technologies = initialState; 

  const getItemById = (id) => {
    return technologies.find(item => item.id === id);
  };

  return (
    <TechnologiesContext.Provider value={{
        technologies,
        getItemById 
    }}>
      {children}
    </TechnologiesContext.Provider>
  );
};

TechnologiesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node, PropTypes.arrayOf(PropTypes.node)
  ])
};