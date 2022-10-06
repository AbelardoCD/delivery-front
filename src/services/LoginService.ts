import axios from "axios";
import { LoginInterface } from "../models/LoginInterface";
import { AuthenticationService } from "./AuthenticationService";
export class LoginService {
  public static login(login: LoginInterface, push: (state: string) => void) {
    this.loginRequest(login)
      .then((resp) => {
        console.log(resp);

        AuthenticationService.loginValidation(resp.data.jwtToken, push);
        AuthenticationService.verifyUserRole(push);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public static async loginRequest(login: LoginInterface) {
    return axios.post(`${process.env.REACT_APP_API_ENDPOINT}auth/login`, {
      email: login.email.toLowerCase().trim(),
      password: login.password,
    });
  }
}
