import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsLoadingStatus, getParticipants } from "../../../store/participants";
import { FAVORITES_ROUTE } from "../../utils/constants";
import Badge from "./badge";
import Button from "./button";
import Preloader from "./preloader";
import PropTypes from "prop-types";

const Slider = ({ photosList }) => {
  const [currentActive, setCurrentActive] = useState("N2PCAmx1jShWIJolb8dsntBz2yO2");
  console.log(photosList);

  const toggleActive = (id) => {
    setCurrentActive(id);
  };

  // const participants = localStorageService.getFavorites();
  const participants = useSelector(getParticipants());
  const isLoadingStatus = useSelector(getIsLoadingStatus());

  console.log(participants);

  const toggleFavoriteCard = (id) => {
    const bookmarkedUsers = participants.map(item => {
        if (item._id === id) {
          if (!item.bookmark) {
            return { ...item, bookmark: true };
          } else {
            return { ...item, bookmark: false };
          };
        };
        return { ...item };
      });
      // set в локалсторадж
  };

  if(isLoadingStatus) {
    return <Preloader style="success" />;
  } else {
  return (
    <div className="main_wrapper">
      <div className="slider_wrapper">
        {
          !isLoadingStatus && participants && (participants.map((p) => (
            <>
              <div key={p.id} className={"slide" + (currentActive === p.id ? " active" : "")} onClick={() => toggleActive(p.id)}>
                <div className="active-flex">
                  <div className="img">
                    <img src={p.photo} className="img-photo"/>
                    {/* {
                      photosList.map(photo =>  {{photo.photo === p.photo && <img src={photo.url}/>;}}
                      )
                    } */}
                  </div>
                  <div className="description">
                  <div className="name">{p.name}</div>
                  <div className="age"> Возраст : {p.age} </div>
                  <div className="badges">
                    <Badge color={p.id !== "N2PCAmx1jShWIJolb8dsntBz2yO2"? "info" : "success"} name={p.id !== "N2PCAmx1jShWIJolb8dsntBz2yO2" ? "TeamMate" : "Teamlead"} />
                  </div>
                </div>
                </div>
                <div className="slide-text">
                  <hr />
                   <p>{p.about_myself}</p>
                </div>
                <Button
                  style=" favorites"
                  color="warning"
                  name="Добавить в избранное"
                  onClick={() => toggleFavoriteCard(p.id)}
                />
                <NavLink to={FAVORITES_ROUTE}>
                 <Button
                  style=" participant"
                  color="primary"
                  name="Перейти на страницу"
                />
                </NavLink>
              </div>
            </>
          ))
          )
        }
      </div>
    </div>
  );
};
};

Slider.propTypes = {
  photosList: PropTypes.array.isRequired
};

export default Slider;
