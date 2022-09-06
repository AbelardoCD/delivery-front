import { AdminRestaurantsContainer } from "./AdminRestaurantsStyles";

import { useState, useEffect } from "react";
import FormNewRestaurant from "../../../components/formNewRestaurant/FormNewRestaurant";
import { ButtonContainer } from "../../public/login/LoginStyles";
import CustomModal from "../../../components/customModal/CustomModal";
import { Restaurant } from "../../../models/RestauranteInterface";
import AdminService from "../../../services/AdminService";
import { useAppReducer } from "../../../redux/appReducer/useAppReducer";
const AdminRestaurants = () => {
  const { openModal, setOpenModal } = useAppReducer();
  const [restaurantsList, setRestaurantsList] = useState<Restaurant[]>([]);
  console.log(openModal);

  useEffect(() => {
    AdminService.getRestaurants(setRestaurantsList);
  }, []);
  return (
    <AdminRestaurantsContainer>
      <CustomModal openModal={openModal} setOpenModal={setOpenModal}>
        <FormNewRestaurant />
      </CustomModal>
      <ButtonContainer onClick={() => setOpenModal(true)}>
        Agregar Restaurante
      </ButtonContainer>
      <div>
        {restaurantsList.map((res) => (
          <div>{res.location}</div>
        ))}
      </div>
    </AdminRestaurantsContainer>
  );
};

export default AdminRestaurants;
