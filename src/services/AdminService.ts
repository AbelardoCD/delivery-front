import { MenuInterface } from "../models/menuInterface";
import AdminRequests from "./requests/AdminRequests";

class AdminService {
  public getMenu(setMenuList: (e: MenuInterface[]) => void) {
    AdminRequests.getFood()
      .then((resp) => {
        console.log(resp.data.foodAll);
        const data = resp.data.foodAll as MenuInterface[];
        setMenuList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new AdminService();
