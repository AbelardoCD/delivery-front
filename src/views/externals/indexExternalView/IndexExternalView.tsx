import {
  DishesAroundContainer,
  DishAround,
  MainDish,
  ContainerView,
  Circle,
  CircleTwo,
  InformationContainer,
  Information,
  LeftInformation,
  MainParagraph,
  ButtomRegister,
} from "./IndexExternalViewStyles";
import dishesCircle from "./../../../assets/circle_dishes.png";
import mainDish from "./../../../assets/main_dish.png";
import Header from "../../../components/header/Header";
import AdminRequests from "../../../services/requests/AdminRequests";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminRoutesEnum } from "../../../routes/AdminRoutesEnum";

const IndexExternalView = () => {
  let navigate = useNavigate();
  return (
    <>
      <ContainerView>
        <Circle>
          <DishesAroundContainer>
            <DishAround src={dishesCircle} />
            <MainDish src={mainDish} />
          </DishesAroundContainer>
        </Circle>
        <CircleTwo>
          <DishesAroundContainer>
            <MainDish src={mainDish} />
          </DishesAroundContainer>
        </CircleTwo>

        <InformationContainer>
          <Information>
            <LeftInformation>
              <MainParagraph>
                <h1>Delicious</h1>
                <h4>The Hunger Games</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Porttitor justo, enim eu aliquam. Eget et pharetra pharetra,
                  amet tortor sagittis senectus. Dictum ultrices
                </p>
                <ButtomRegister
                  onClick={() => navigate(AdminRoutesEnum.RAIZ_ADMIN)}
                >
                  Register Now
                </ButtomRegister>
              </MainParagraph>
            </LeftInformation>
          </Information>
        </InformationContainer>
      </ContainerView>
    </>
  );
};

export default IndexExternalView;
