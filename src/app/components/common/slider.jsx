import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getIsLoadingStatus, getParticipants } from "../../../store/participants";
import Badge from "./badge";
import Button from "./button";
import Preloader from "./preloader";

const Slider = () => {
  const [currentActive, setCurrentActive] = useState("N2PCAmx1jShWIJolb8dsntBz2yO2");

  const toggleActive = (id) => {
    setCurrentActive(id);
  };

  const participants = useSelector(getParticipants());
  const isLoadingStatus = useSelector(getIsLoadingStatus());

  const bookmark = () => console.log("bookmark");
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
                  <div className="img"></div>
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
                  onClick={bookmark}
                />
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

export default Slider;
