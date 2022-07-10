import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/ui/loginForm";
// import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";
import LargeStyleWrapper from "../components/common/largeStyleWrapper";

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(type === "register" ? type : "login");

  const toggleFormType = () => {
    setFormType(prevState => prevState === "register" ? "login" : "register");
  };

  return (
    <LargeStyleWrapper>
      { formType === "register"
        ? <>
            <RegisterForm />
              <p className="d-flex justify-content-center p-3 fw-bold">
                Есть личный кабинет?{" "}
                <a
                  role="button"
                  className="text-primary text-decoration-none ps-2" 
                  onClick={toggleFormType}> 
                    Войти
                </a>
              </p>
            </>
        : <>
            <LoginForm />
              <p className="d-flex justify-content-center p-3 fw-bold">
                  Нет аккаунта?
                <a role="button" className="text-primary text-decoration-none ps-2" onClick={toggleFormType}> Создать аккаунт</a>
              </p>
          </>
      }
    </LargeStyleWrapper>
  );
};
export default Login;