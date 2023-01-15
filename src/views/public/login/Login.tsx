import CustomInput from "../../../components/miscelaneous/customImput/CustomInput";
import { ButtonContainer, LoginContainer } from "./LoginStyles";

import { LoginService } from "../../../services/LoginService";
import { LoginInterface } from "../../../models/LoginInterface";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppReducer } from "../../../redux/appReducer/useAppReducer";
import { AuthenticationService } from "../../../services/AuthenticationService";

const Login = () => {
  const history = useHistory();

  const { setShowBackdrop } = useAppReducer();

  const [login, setLogin] = useState<LoginInterface>({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    LoginService.login(login, history.push, setShowBackdrop);
  };
  const handleVerifyIfIsLogin = () => {
    AuthenticationService.verifyUserRole(history.push, setShowBackdrop);
  };
  handleVerifyIfIsLogin();
  return (
    <LoginContainer>
      <div className="container-box">
        <span className="title">Login</span>
        <form className="login" onSubmit={(e) => handleLogin(e)}>
          <CustomInput
            placeholder="Ingrese su email"
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <CustomInput
            placeholder="Ingrese su Contraseña"
            type="password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <ButtonContainer type="submit">Login</ButtonContainer>
        </form>
      </div>
    </LoginContainer>
  );
};

export default Login;
