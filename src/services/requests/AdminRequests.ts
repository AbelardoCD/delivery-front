import axios from "axios";
class AdminRequest {
  async getAllDishes() {
    return axios.get(`${process.env.REACT_APP_API_ENDPOINT}admin/restaurants`);
  }

  async getFood() {
    return axios.get(`${process.env.REACT_APP_API_ENDPOINT}admin/list/food`);
  }
  async getRestaurants() {
    return axios.get(`${process.env.REACT_APP_API_ENDPOINT}admin/restaurants`);
  }

  async setRestaurante(data: FormData) {
    console.log(data);

    return axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}admin/restaurants`,
      data
    );
  }
}

export default new AdminRequest();
