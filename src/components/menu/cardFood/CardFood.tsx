import { CardFoodContiner, TitleCard } from "./CardFoodStyles";
import pizza from "../../../assets/pizza_two.png";
import { MenuInterface } from "../../../models/menuInterface";
const CardFood = ({ food }: { food: MenuInterface }) => {
  return (
    <>
      <CardFoodContiner
        imageBase64={food.imageBase64.base}
        price={String(food.food.price)}
      >
        <TitleCard>{food.food.name}</TitleCard>
      </CardFoodContiner>
    </>
  );
};

export default CardFood;
