import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../common/button";
import TextField from "../common/form/textField";
import LargeStyleWrapper from "../common/largeStyleWrapper";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = ({ target }) => {
    setData(prevState => ({
      ...prevState,
      [target.name]: target.value
    })); 
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    // отправка данных на сервер / там внутри - получение current user / переход на главную страницу 
    console.log("data", data);
    history.push("/");
  };

  return ( 
    <form onSubmit={handleLogIn}>
      <h2 className="d-flex justify-content-center fw-semibold">Войти в систему</h2>
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
      <div className="d-flex">
        <Button color="secondary" style="m-auto" name="Войти в аккаунт"/>
      </div>
    </form>
  );
};
 
export default LoginForm;