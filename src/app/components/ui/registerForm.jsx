import React, { useState } from "react";
import FileInput from "../common/form/fileInput";
import CheckboxField from "../common/form/checkboxField";
import TextArea from "../common/form/textArea";
import TextField from "../common/form/textField";
import RangeArea from "../common/form/rangeArea";
import { useTechnologies } from "../../hooks/technologies";
import TechnologiesFields from "./technologiesField";
import SocialNetworkGroup from "./socialNetworkGroupField";
import { useHistory } from "react-router-dom";
import Button from "../common/button";
import { useDispatch } from "react-redux";
import { signUp } from "../../../store/participants";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    age: 0,
    about_myself: "",
    photo: "",
    social_networks: [],
    role: "",
    technologies: []
  });
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = ({ target }) => {
    setData(prevState => ({
      ...prevState,
      [target.name]: target.value
    })); 
  };

  const handleCheckbox = (id) => {
    setData(prevState => ({
      ...prevState,
      social_networks: [...prevState.social_networks, id]
    }));
  };

   const handleRangeChange = ({ target }) => {
    setData(prevState => ({
      ...prevState,
      technologies: [...prevState.technologies, { ...prevState.technologies, id: id, progressInPercent: target.value}]
    }));
  };

  const handleSocialGroupChange = (id, { target }) => {
    setData(prevState => ({
      ...prevState,
      [target.name]: [...prevState[target.name], { id: id, link: target.value }]
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // здесь регистрация пользователя / отправка данных на сервер / там внутри - получение current user / переход на главную страницу 
    console.log("data", data);
    dispatch(signUp(data));
    history.push("/");
  };

  return ( 
    <form onSubmit={handleRegister}>
      <h2 className="d-flex justify-content-center fw-semibold">Форма регистрации</h2>
      <TextField
        label="Ваш email:"
        type="text"
        name="email"
        value={data.email}
        onFieldChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Ваш пароль:"
        type="password"
        name="password"
        value={data.password}
        onFieldChange={handleChange}
        error={errors.password}
      />
      <TextField
        label="Ваши имя и фамилия:"
        type="text"
        name="name"
        value={data.name}
        onFieldChange={handleChange}
        error={errors.name}
      />
      <TextField
        label="Ваш возраст:"
        type="number"
        name="age"
        value={data.age}
        onFieldChange={handleChange}
        error={errors.age}
      />
      <TextArea
        label="Расскажите о себе:"
        name="about_myself"
        value={data.about_myself}
        onFieldChange={handleChange}
      />
      <FileInput
        label="Загрузите Ваше фото:"
        type="file"
        name="photo"
        value={data.photo}
        onFieldChange={handleChange}
      />
      {/* <CheckboxField
        label="Выберете ваши социальные сети:"
        type="checkbox"
        name="social_networks"
        value={data.social_networks}
        onFieldChange={handleCheckbox}
        /> */}
      <TextArea 
        label="Чем занимался при разработке данного проекта:"
        name="role"
        value={data.role}
        onFieldChange={handleChange}
      />
     {/* <TechnologiesFields
        label="Выберете от 0 до 100 ваше знание технологии:"
        value={data.technologies}
        name="technologies"
        type="number"
        onFieldChange={handleRangeChange}
        error={errors.technologies}/>
      <SocialNetworkGroup
        label="Социальные сети:"
        onFieldChange={handleSocialGroupChange}
        name="social_networks"
        value={data.social_networks}
        type="text"
        error={errors.social_networks}
      /> */}
      <div className="d-flex">
        <Button color="secondary m-auto" name="Зарегистрироваться">
        </Button>
      </div>
    </form>
  );
};
 
export default RegisterForm;