import CustomInput from "../../../components/miscelaneous/customImput/CustomInput";
import {
  ButtonContainer,
  ImgAbsolute,
  InformationSection,
  LoginContainer,
} from "./LoginStyles";
import pizza from "./../../../assets/pizza.png";
import burger from "./../../../assets/burger.png";
import { LoginService } from "../../../services/LoginService";
import { LoginInterface } from "../../../models/LoginInterface";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const [login, setLogin] = useState<LoginInterface>({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    LoginService.login(login, history.push);
  };
  return (
    <LoginContainer>
      <InformationSection>
        <ImgAbsolute src={pizza} left={"-130px"} top={"-20px"} />
        <ImgAbsolute src={burger} left={"380px"} top={"350px"} />
        <form onSubmit={(e) => handleLogin(e)}>
          <label>Bienvenido De Nuevo!</label>
          <CustomInput
            placeholder="Ingrese su Email"
            type="text"
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <CustomInput
            placeholder="Ingrese su Contraseña"
            type="password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <ButtonContainer type="submit">Login</ButtonContainer>
        </form>
      </InformationSection>
    </LoginContainer>
  );
};

export default Login;
