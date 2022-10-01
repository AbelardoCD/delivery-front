import { useEffect, useState } from "react";
import logo from "./../../assets/Logo.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { PublicRoutesEnum } from "../../routes/PublicRoutesEnum";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useAppReducer } from "../../redux/appReducer/useAppReducer";
import { NavContainer, BgDiv, HeaderLi, Separator } from "./HeaderMainStyles";
import BurguerButton from "./burgerButton/BurgerButton";
const HeaderMain = () => {
  const history = useHistory();
  const navigate = useLocation();

  const handleValidateCurrentView = (view: string) => {
    return navigate.pathname === view;
  };

  const { setZindex, zIndex } = useAppReducer();

  const [clicked, setClicked] = useState(false);
  const handleClick = (route?: string) => {
    setClicked(!clicked);

    if (route) {
      history.push(route);
    }
  };

  const [sizeWindow, setSizeWindow] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setSizeWindow(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const validate = () => {
    if (!clicked || sizeWindow >= 768) {
      return false;
    }

    return true;
  };

  return (
    <>
      <NavContainer>
        <Separator>
          <img src={logo} />
          <div className={`links ${validate() ? "active" : ""}`}>
            <HeaderLi
              currentView={handleValidateCurrentView(PublicRoutesEnum.HOME)}
              onClick={() => handleClick(PublicRoutesEnum.HOME)}
            >
              Home
            </HeaderLi>

            <HeaderLi
              onClick={() => handleClick(PublicRoutesEnum.MENU)}
              currentView={handleValidateCurrentView(PublicRoutesEnum.MENU)}
            >
              Menu
            </HeaderLi>

            <HeaderLi
              onClick={() => handleClick(PublicRoutesEnum.LOGIN)}
              currentView={handleValidateCurrentView(PublicRoutesEnum.LOGIN)}
            >
              Login
            </HeaderLi>
          </div>
          <div className="burguer">
            <BurguerButton clicked={validate()} handleClick={handleClick} />
          </div>
          <BgDiv className={`initial ${validate() ? " active" : ""}`}></BgDiv>
        </Separator>
      </NavContainer>
    </>
  );
};

export default HeaderMain;
