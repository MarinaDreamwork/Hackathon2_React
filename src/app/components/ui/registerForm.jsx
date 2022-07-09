import React, { useState } from "react";
import FileInput from "../common/form/fileInput";
import CheckboxField from "../common/form/checkboxField";
import TextArea from "../common/form/textArea";
import TextField from "../common/form/textField";
import RangeArea from "../common/form/rangeArea";
import { useTechnologies } from "../../hooks/technologies";
import TechnologiesFields from "./technologiesField";

const RegisterForm = () => {
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

  const handleRegister = (e) => {
    e.preventDefault();
    // здесь регистрация пользователя / отправка данных на сервер / там внутри - получение current user
    console.log("data", data);
  };

  return ( 
    <form onSubmit={handleRegister}>
      <h2>Форма регистрации</h2>
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
        type="file"
        name="photo"
        value={data.photo}
        onFieldChange={handleChange}
      />
      <CheckboxField
        label="Выберете ваши социальные сети:"
        type="checkbox"
        name="social_networks"
        value={data.social_networks}
        onFieldChange={handleCheckbox}
        />
      <TextArea 
        label="Чем занимался при разработке данного проекта:"
        name="role"
        value={data.role}
        onFieldChange={handleChange}
      />
     <TechnologiesFields
        label="Выберете от 0 до 100 ваше знание технологии:"
        value={data.technologies}
        name="technologies"
        type="number"
        onFieldChange={handleRangeChange}
        error={errors.technologies}/>
      {/* <RangeArea
        type="range"
        value={data.technologies}
        onFieldChange={handleRangeChange}
      /> */}
      <button className="btn btn-secondary">Зарегистрироваться</button>
    </form>
  );
};
 
export default RegisterForm;