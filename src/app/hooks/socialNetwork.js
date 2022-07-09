import React, { useContext } from "react";
import PropTypes from "prop-types";

const SocialNetworkContext = React.createContext();

export const useSocialNetwork = () => {
  return useContext(SocialNetworkContext);
};

export const SocialNetworkProvider = ({ children }) => {
  const initialState = [
    { id: "123456", label: "facebook", iconClass: "bi bi-facebook" },
    { id: "234567", label: "vk"},
    { id: "345678", label: "telegram", iconClass: "bi bi-telegram" }
  ];
  const socialNetworks = initialState; 

  const getItemById = (id) => {
    return socialNetworks.find(item => item.id === id);
  };

  return (
    <SocialNetworkContext.Provider value={{
        socialNetworks,
        getItemById 
    }}>
      {children}
    </SocialNetworkContext.Provider>
  );
};

SocialNetworkProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node, PropTypes.arrayOf(PropTypes.node)
  ])
};