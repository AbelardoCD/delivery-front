import { FormularioContainer } from "../../views/admin/adminRestaurants/AdminRestaurantsStyles";
import CustomModal from "../customModal/CustomModal";
import CustomInput from "../miscelaneous/customImput/CustomInput";
import UploadFile from "../uploadFile/UploadFile";
import { useState, useEffect } from "react";
import { Restaurant } from "../../models/RestauranteInterface";
import { ButtonContainer } from "../../views/public/login/LoginStyles";
import AdminService from "../../services/AdminService";

const FormNewRestaurant = () => {
  const [newRestaurant, setNewRestaurant] = useState<Restaurant>({
    idUser: "2",
  } as Restaurant);
  const handleSetNewRestaurant = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };

  const [file, setFile] = useState<File | null>();

  const handleSaveRestaurant = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    AdminService.setRestaurante(newRestaurant);
  };

  useEffect(() => {
    setNewRestaurant({ ...newRestaurant, image: file });
  }, [file]);

  return (
    <FormularioContainer onSubmit={(e) => handleSaveRestaurant(e)}>
      <label>Agregar nuevo Restaurante</label>
      <CustomInput
        placeholder="Nombre"
        name="name"
        onChange={(e) => handleSetNewRestaurant(e)}
      />

      <CustomInput
        placeholder="Ubicación"
        name="location"
        onChange={(e) => handleSetNewRestaurant(e)}
      />
      <CustomInput
        placeholder="Hora de apertura"
        name="openHour"
        onChange={(e) => handleSetNewRestaurant(e)}
      />

      <CustomInput
        placeholder="Hora de Cierre"
        name="closeHour"
        onChange={(e) => handleSetNewRestaurant(e)}
      />

      <CustomInput
        placeholder="Numero de Télefono"
        name="phone"
        onChange={(e) => handleSetNewRestaurant(e)}
      />

      <UploadFile setFile={setFile} />
      <ButtonContainer>Guardar</ButtonContainer>
    </FormularioContainer>
  );
};

export default FormNewRestaurant;
