import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import Button from "../common/button";
import {
  addParticipant,
  getFavorites,
  removeParticipant,
  getFavoritesById
} from "../../../store/favorites";

const ParticipantCard = ({ participant }) => {
  const { id, photo, name, age, about_myself, isFavorite } = participant;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeParticipant(id));
  };

  return (
    isFavorite && (
      <div className="col">
        <div className="card h-100 position-relative">
          {/* <Button
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
          /> */}
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
              <Button
                name="Удалить"
                color="danger"
                style="w-100 mx-auto mb-1"
                onClick={handleDelete}
              />
              <Button
                name="Посмотреть"
                color="dark"
                style="w-100 mx-auto mb-1"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

ParticipantCard.propTypes = {
  participant: PropTypes.object
};

export default ParticipantCard;
