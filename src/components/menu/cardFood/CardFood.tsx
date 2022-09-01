import { CardFoodContiner, TitleCard } from "./CardFoodStyles";
import pizza from "../../../assets/pizza_two.png";
const CardFood = () => {
  return (
    <>
      <CardFoodContiner>
        <TitleCard>Pizza</TitleCard>
        <img src={pizza} />
      </CardFoodContiner>
    </>
  );
};

export default CardFood;
