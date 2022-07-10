import React from "react";
import Badge from "./badge";
import Button from "./button";

const Slider = () => {
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
  const bookmark = () => console.log("bookmark");
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
            onClick={bookmark}
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
            onClick={bookmark}
          />
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
            onClick={bookmark}
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
            onClick={bookmark}
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
            onClick={bookmark}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
