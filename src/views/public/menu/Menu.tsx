import { Skeleton } from "@mui/material";
import CardFood from "../../../components/menu/cardFood/CardFood";
import { useMenu } from "../../../hooks/useMenu";
import { MenuContainer } from "./MenuStyles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
const Menu = () => {
  const { menuList } = useMenu();
  return (
    <MenuContainer>
      {menuList.length > 0 ? (
        menuList.map((food) => <CardFood key={food.id} food={food} />)
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Skeleton style={{ width: "300px", height: "300px" }} />
          <Skeleton style={{ width: "300px", height: "300px" }} />
          <Skeleton style={{ width: "300px", height: "300px" }} />
          <Skeleton style={{ width: "300px", height: "300px" }} />
        </div>
      )}
    </MenuContainer>
  );
};

export default Menu;
