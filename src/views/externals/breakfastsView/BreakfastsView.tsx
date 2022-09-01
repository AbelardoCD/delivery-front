import { useEffect } from "react";
import AdminRequests from "../../../services/requests/AdminRequests";
import { BreackfastContainer } from "./BreakfastsViewStyles";

const BreakfastsView = () => {
  const getDishes = () => {
    AdminRequests.getAllDishes()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDishes();
  }, []);
  return (
    <>
      <BreackfastContainer>hola</BreackfastContainer>
    </>
  );
};

export default BreakfastsView;
