import React, { useEffect, useState } from "react";
import FileInput from "../common/form/fileInput";
import CheckboxField from "../common/form/checkboxField";
import TextArea from "../common/form/textArea";
import TextField from "../common/form/textField";
import { useHistory } from "react-router-dom";
import Button from "../common/button";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../store/participants";
import { getKeySkills } from "../../../store/keySkills";
import GroupFields from "../common/form/GroupFields";
import { getIsLoadingTechStatus, getTechnologies, loadTechnologiesList } from "../../../store/technologies";
import { useSocialNetwork } from "../../hooks/socialNetwork";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const keySkillsList = useSelector(getKeySkills());
  const isTechLoading = useSelector(getIsLoadingTechStatus());
  //const technologies  = dispatch(getTechnologies());
  const { socialNetworks } = useSocialNetwork();
  console.log("keySkills", keySkillsList);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    age: 0,
    about_myself: "",
    photo: "",
    role: "",
    key_skills: [],
    HTML: {id: "", result: ""},
    CSS: {id: "", result: 0},
    JavaScript: {id: "", result: 0},
    facebook: "",
    vk: "",
    telegram: ""
  });
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = ({ target }) => {
    setData(prevState => ({
      ...prevState,
      [target.name]: target.value
    })); 
  };

   const handleGroupFieldsChange = ({ target }) => {
    setData(prevState => ({
      ...prevState,
      [target.name]: {id: target.id, result: target.value}
    })); 
  };

  const handleCheckbox = (id) => {
    setData(prevState => ({
      ...prevState,
      key_skills: [...prevState.key_skills, id]
    }));
  };

  //  const handleRangeChange = ({ target }, id) => {
  //   setData(prevState => ({
  //     ...prevState,
  //     technologies: [...prevState.technologies, { ...prevState.technologies, id: id, progressInPercent: target.value}]
  //   }));
  // };

  // const handleTechChange = ({ target }) => {
  //   console.log("target", target);
  //   setData(prevState => ({
  //     ...prevState,
  //     technologies: [...prevState.technologies, { id: target.id, percents: target.value}]
  //   }));
  // };

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
    dispatch(signUp({
      ...data 
    }));
    history.push("/");
  };

  useEffect(() => {
    dispatch(loadTechnologiesList());
  }, []);

  if(isTechLoading) {
    return (
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else {

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
      <TextArea 
        label="Чем занимался при разработке данного проекта:"
        name="role"
        value={data.role}
        onFieldChange={handleChange}
      />
      <CheckboxField
        label="Выберете ваши ключевые навыки:"
        type="checkbox"
        name="key_skills"
        value={data.key_skills}
        onFieldChange={handleCheckbox}
      />
      {/* <TextField
        label="Вашt знание технологии HTML (от 0 до 100, %):"
        type="text"
        name="HTML"
        value={data.HTML}
        onFieldChange={handleChange}
        error={errors.HTML}
      /> */}
      {/* <GroupFields
        items={technologies}
        label="Введите знания технологий в %:"
        type="number"
        value={data[name]}
        onFieldChange={handleGroupFieldsChange}
        /> */}
      <GroupFields
        items={socialNetworks}
        label="Введите Ваши социальные сети (при наличии):"
        type="text"
        value={data[name]}
        onFieldChange={handleGroupFieldsChange}
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
  }
};
 
export default RegisterForm;