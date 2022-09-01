import axios from "axios";
class AdminRequest {
  async getAllDishes() {
    return axios.get(`${process.env.REACT_APP_API_ENDPOINT}admin/restaurants`);
  }
}

export default new AdminRequest();
