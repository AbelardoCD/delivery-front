import HeaderMain from "../../../components/headerMain/HeaderMain";
import CardFood from "../../../components/menu/cardFood/CardFood";
import { TitleCard } from "../../../components/menu/cardFood/CardFoodStyles";
import { useMenu } from "../../../hooks/useMenu";
import { MenuContainer } from "./MenuStyles";

const Menu = () => {
  const { menuList } = useMenu();
  return (
    <MenuContainer>
      {menuList.map((food) => (
        <CardFood key={food.id} food={food} />
      ))}
    </MenuContainer>
  );
};

export default Menu;
