import React, { useState } from "react";
import { useTechnologies } from "../../hooks/technologies";
import TextField from "../common/form/textField";
import PropTypes from "prop-types";
import Badge from "../common/badge";
import { useSocialNetwork } from "../../hooks/socialNetwork";

const SocialNetworkGroup = ({
     label,
    // value,
    type,
    // name,
    // onFieldChange,
     error 
}) => {
  const { socialNetworks } = useSocialNetwork();
  const [socialLinks, setSocialLinks] = useState({
    id: "",
    link: ""
  });
  const handleSocialLinks = ({ target }, id) => {
    console.log("id", id);
    setSocialLinks(prevState => ({
      ...prevState,
      [target.name]: target.value,
      id: id
    }));
  };
  console.log("sociallinks", socialLinks);
  return ( 
    <div>
      <label className="justify-content-center">{label}</label>
     {
      socialNetworks.map(item => (
        <>
          <TextField
            label={item.label}
            value={socialLinks.link}
            type={type}
            name={item.label}
            onFieldChange={() => handleSocialLinks(item.id)}
            error={error}
          />
        </>
      ))
     }
    </div>
   );
};

SocialNetworkGroup.propTypes = {
  value: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.array.isRequired,
  name: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired
};
 
export default SocialNetworkGroup;