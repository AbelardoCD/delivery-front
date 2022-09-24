import {
  CardFoodContiner,
  SectionImage,
  SectionInformation,
  TitleCard,
} from "./CardFoodStyles";
import pizza from "../../../assets/pizza_two.png";
import { MenuInterface } from "../../../models/menuInterface";
const CardFood = ({ food }: { food: MenuInterface }) => {
  return (
    <>
      <CardFoodContiner>
        <SectionImage imageBase64={food.imageBase64} />
        <SectionInformation>
          <div className="restaurant-name">
            <label>La cocina</label>
          </div>
          <div className="section-title">
            <label>{food.name}</label>
            <span>${food.price}</span>
          </div>
          <div className="body-card">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <button>Order Now</button>
          </div>
        </SectionInformation>
      </CardFoodContiner>
    </>
  );
};

export default CardFood;
