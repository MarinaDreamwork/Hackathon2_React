import React, { useState } from "react";
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
import { getIsLoadingTechStatus } from "../../../store/technologies";
import { useSocialNetwork } from "../../hooks/socialNetwork";
import { getTechnologies } from "../../../store/technologies";
import Preloader from "../common/preloader";
import { storage } from "../../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import PropTypes from "prop-types";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const technologies = useSelector(getTechnologies());
  const isTechLoading = useSelector(getIsLoadingTechStatus());
  const { socialNetworks } = useSocialNetwork();

  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    age: 0,
    about_myself: "",
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
  const [photoUpload, setPhotoUpload] = useState(null);
  
  const history = useHistory();

  const handleChange = ({ target }) => {
    setData(prevState => ({
      ...prevState,
      [target.name]: target.value
    })); 
  };

  const handleUpload = ({target}) => {
    setPhotoUpload(target.files[0]);
    setData(prevState => ({
      ...prevState,
      [target.name]: target.files[0].name
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
    // получение current user 
    if(photoUpload === null) return;
    const imageRef = ref(storage, `photos/${photoUpload.name}`);
    uploadBytes(imageRef, photoUpload).then(() => {
      alert("Your image uploaded successfully!");
    });
    dispatch(signUp(data));
    history.push("/");
  };

  if(isTechLoading) {
    return (
      <Preloader
        style="text-secondary"
        text="Данные загружаются для вас..." 
      />
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
        photoUpload={photoUpload}
        onFieldChange={handleUpload}
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
      <GroupFields
        items={technologies}
        label="Введите знания технологий в %:"
        type="number"
        value={data[name]}
        onFieldChange={handleGroupFieldsChange}
        />
      <GroupFields
        items={socialNetworks}
        label="Введите Ваши социальные сети (при наличии):"
        type="text"
        value={data[name]}
        onFieldChange={handleGroupFieldsChange}
        />
      <div className="d-flex justify-content-center">
        <Button color="secondary" style="m-3" name="Зарегистрироваться">
        </Button>
      </div>
    </form>
  );
  }
};

RegisterForm.propTypes = {
  name: PropTypes.string
};
 
export default RegisterForm;