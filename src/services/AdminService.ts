import { MenuInterface } from "../models/menuInterface";
import { Restaurant } from "../models/RestauranteInterface";
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

  public getRestaurants(setRestaurantsList: (e: Restaurant[]) => void) {
    AdminRequests.getRestaurants()
      .then((resp) => {
        console.log(resp);
        const data = resp.data as Restaurant[];
        setRestaurantsList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public setRestaurante(restaurant: Restaurant) {
    console.log(restaurant);

    const request = new FormData();

    request.append("image", restaurant.image!);
    request.append("name", restaurant.name);
    request.append("location", restaurant.location);
    request.append("openHour", restaurant.openHour);
    request.append("closeHour", restaurant.closeHour);
    request.append("phone", restaurant.phone);
    request.append("idUser", restaurant.idUser);

    AdminRequests.setRestaurante(request)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new AdminService();
