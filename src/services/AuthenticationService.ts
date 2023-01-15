import { JWTModel, UserRoles } from "../models/JWTModel";
import { AdminRoutesEnum } from "../routes/AdminRoutesEnum";
import { PublicRoutesEnum } from "../routes/PublicRoutesEnum";

export class AuthenticationService {
  private static AUTHENTICATION = "current_access";
  private static BASE_URL = "/";

  public static loginValidation(token: string, push: (e: string) => void) {
    this.setJWT(token);
  }

  private static destructuringJWT(): JWTModel | null {
    const token = this.getJWT();
    if (token === null) {
      return null;
    }

    let jwtDestructured: JWTModel | null = null;

    jwtDestructured = JSON.parse(atob(token.split(".")[1])) as JWTModel;

    return jwtDestructured;
  }
  private static getJWT(): string | null {
    return localStorage.getItem(this.AUTHENTICATION);
  }

  private static setJWT(token: string): void {
    localStorage.setItem(this.AUTHENTICATION, token);
  }

  private static removeJWT() {
    localStorage.removeItem(this.AUTHENTICATION);
  }

  public static getAuthHeaders(): { Authorization: string } {
    return { Authorization: `Bearer ${this.getJWT()}` };
  }

  public static logout(push: (e: string) => void) {
    this.removeJWT();
  }

  public static verifyUserRole(
    push: (state: string) => void,
    setShowBackdrop: (e: boolean) => void
  ): void {
    const token = this.getJWT();
    console.log("token", token);

    if (token !== null) {
      try {
        const userInfo = this.destructuringJWT() as JWTModel;
        console.log("userInfo", userInfo.authorities.authority);
        const { authorities } = userInfo;

        switch (authorities.authority) {
          case String(UserRoles.ADMIN):
            push(AdminRoutesEnum.ADMIN);
            setShowBackdrop(false);
            break;
        }
      } catch (e) {
        this.logout(push);
      }
    } else {
      push(PublicRoutesEnum.HOME);
    }
  }

  public static verifyPageByRole(
    roles: string[],
    push: (state: string) => void
  ) {
    const token = this.getJWT();

    if (token !== null) {
      try {
        const base64Url = token.split(".")[1];
        const userInfo = JSON.parse(window.atob(base64Url)) as JWTModel;
        if (
          roles.length > 0 &&
          roles.includes(userInfo.authorities.authority)
        ) {
          return true;
        } else if (
          roles.length < 1 ||
          userInfo.authorities.authority.length < 1
        ) {
          push(PublicRoutesEnum.LOGIN);
          return false;
        } else if (
          userInfo.authorities.authority.length > 0 &&
          !roles.includes(userInfo.authorities.authority)
        ) {
          push(PublicRoutesEnum.LOGIN);
          return false;
        }
      } catch (e) {
        push(PublicRoutesEnum.LOGIN);
        return false;
      }
    } else {
      push(PublicRoutesEnum.LOGIN);
      return false;
    }

    return false;
  }
}
