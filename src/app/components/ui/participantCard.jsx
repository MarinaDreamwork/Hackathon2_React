import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../common/button";

const ParticipantCard = ({ participant }) => {
  const { photo, name, age, about_myself } = participant;

  const [isShow, setShow] = useState(false);

  const handleClick = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <div className="col">
      <div className="card h-100 position-relative">
        <Button
          name={
            isShow ? (
              <i className="bi bi-heart-fill text-danger" />
            ) : (
              <i className="bi bi-heart text-danger" />
            )
          }
          color="light"
          style="position-absolute top-0 end-0 shadow-none"
          onClick={handleClick}
        />
        <img
          src={photo}
          width={200}
          className="img-fluid"
          alt="participant image"
        />
        <div className="card-body d-flex flex-column h-100">
          <h5 className="card-title">{name}</h5>
          <p className="card-text fw-semibold mb-1">
            Возраст: <span className="badge text-bg-success">{age}</span>
          </p>
          <p className="card-text">{about_myself}</p>
          <div className="mt-auto">
            <Button name="Посмотреть" color="dark" style="w-100 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

ParticipantCard.propTypes = {
  participant: PropTypes.object
};

export default ParticipantCard;
