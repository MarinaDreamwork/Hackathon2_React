import React, { useState } from "react";
import PropTypes from "prop-types";
import SmallStyleWrapper from "../smallStyleWrapper";
import { storage } from "../../../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import {v4} from "uuid";

const FileInput = ({ label, type, name, onFieldChange }) => {
  const [photoUpload, setPhotoUpload] = useState(null);
  const handlePhotoUpload = (e) => {
    setPhotoUpload(e.target.files[0]);
    if(photoUpload === null) return;
    const imageRef = ref(storage, `images/${photoUpload.name + v4()}`);
    uploadBytes(imageRef, photoUpload).then(() => {
      alert("Image uploaded successfully!");
    });
    onFieldChange(e);
  };
  return ( 
      <SmallStyleWrapper>
      <label htmlFor="fileUpload" className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        onChange={(e) => handlePhotoUpload(e)}
        className="form-control"
        id="fileUpload"
        aria-describedby="inputGroupFileAddon04"
        aria-label="Upload"
      />
    </SmallStyleWrapper>
  );
};

FileInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired
};
 
export default FileInput;