import React from "react";
import Badge from "./badge";
import Button from "./button";
import PropTypes from "prop-types";

import { addParticipant, getFavorites } from "../../../store/favorites";
import { useDispatch, useSelector } from "react-redux";

const Slider = ({ participant }) => {
  const slides = document.querySelectorAll(".slide");
  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
  const toggleActive = () => {
    for (const slide of slides) {
      slide.addEventListener("click", () => {
        clearActiveClasses();

        slide.classList.add("active");
      });
    }
  };
  // const bookmark = () => console.log("bookmark");

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addParticipant(participant));
  };

  return (
    <div className="main_wrapper">
      <div className="slider_wrapper">
        <div className="slide" onClick={toggleActive}>
          <div className="active-flex">
            <div className="img"></div>
            <div className="description">
              <div className="name">Зиннатуллин Марат</div>
              <div className="age"> Возраст : </div>
              <div className="badges">
                <Badge color="info" name="TeamMate" />
              </div>
            </div>
          </div>
          <div className="slide-text">
            <hr />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            molestiae iste veniam, nesciunt vero possimus obcaecati sit
          </div>
          <Button
            color="warning favorites"
            name="Добавить в избранное"
            onClick={handleAdd}
          />
        </div>
        <div className="slide" onClick={toggleActive}>
          {" "}
          <div className="active-flex">
            <div className="img"></div>
            <div className="description">
              <div className="name">Зиннатуллин Марат</div>
              <div className="age"> Возраст :</div>
              <div className="badges">
                <Badge color="info" name="TeamMate" />
              </div>
            </div>
          </div>
          <div className="slide-text">
            <hr />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            molestiae iste veniam, nesciunt vero possimus obcaecati sit
          </div>
          <Button
            color="warning favorites"
            name="Добавить в избранное"
            onClick={handleAdd}
          />
          <button className="btn btn-danger">Удалить</button>
        </div>
        <div className="slide active" onClick={toggleActive}>
          <div className="active-flex">
            <div className="img"></div>
            <div className="description">
              <div className="name">Трушина Марина</div>
              <div className="age"> Возраст : </div>
              <div className="badges">
                <Badge color="success" name="TeamLead" />
              </div>
            </div>
          </div>
          <div className="slide-text">
            <hr />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            molestiae iste veniam, nesciunt vero possimus obcaecati sit
          </div>
          <Button
            color="warning favorites"
            name="Добавить в избранное"
            onClick={handleAdd}
          />
        </div>
        <div className="slide" onClick={toggleActive}>
          {" "}
          <div className="active-flex">
            <div className="img"></div>
            <div className="description">
              <div className="name">Зиннатуллин Марат</div>
              <div className="age"> Возраст : </div>
              <div className="badges">
                <Badge color="info" name="TeamMate" />
              </div>
            </div>
          </div>
          <div className="slide-text">
            <hr />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            molestiae iste veniam, nesciunt vero possimus obcaecati sit
          </div>
          <Button
            color="warning favorites"
            name="Добавить в избранное"
            onClick={handleAdd}
          />
        </div>
        <div className="slide" onClick={toggleActive}>
          {" "}
          <div className="active-flex">
            <div className="img"></div>
            <div className="description">
              <div className="name">Зиннатуллин Марат</div>
              <div className="age"> Возраст : </div>
              <div className="badges">
                <Badge color="info" name="TeamMate" />
              </div>
            </div>
          </div>
          <div className="slide-text">
            <hr />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            molestiae iste veniam, nesciunt vero possimus obcaecati sit
          </div>
          <Button
            color="warning favorites"
            name="Добавить в избранное"
            onClick={handleAdd}
          />
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  participant: PropTypes.object
};

export default Slider;
