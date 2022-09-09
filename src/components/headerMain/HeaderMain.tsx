import {
  HeaderContainer,
  HeaderLi,
  HeaderNav,
  SectionLogo,
  SectionMenu,
  SectionUser,
} from "./HeaderMainStyles";
import logo from "./../../assets/logo_white.png";
import { Link, useLocation } from "react-router-dom";
import { PublicRoutesEnum } from "../../routes/PublicRoutesEnum";
import MenuIcon from "@mui/icons-material/Menu";
import man from "./../../assets/hombre.png";
import CloseIcon from "@mui/icons-material/Close";
const HeaderMain = () => {
  const navigate = useLocation();

  const handleValidateCurrentView = (view: string) => {
    return navigate.pathname === view;
  };

  return (
    <>
      <HeaderContainer>
        <HeaderNav id="nav">
          <SectionLogo>
            <img src={logo} />
          </SectionLogo>
          <ul>
            <HeaderLi
              currentView={handleValidateCurrentView(PublicRoutesEnum.HOME)}
            >
              <Link to={PublicRoutesEnum.HOME}>Home</Link>
            </HeaderLi>
            <HeaderLi
              currentView={handleValidateCurrentView(PublicRoutesEnum.MENU)}
            >
              <Link to={PublicRoutesEnum.MENU}>Menu</Link>
            </HeaderLi>

            <HeaderLi
              currentView={handleValidateCurrentView(PublicRoutesEnum.LOGIN)}
            >
              <Link to={PublicRoutesEnum.LOGIN}>
                {/* { <img src={man} />} */}
                Login
              </Link>
            </HeaderLi>
          </ul>

          <a href="#nav" className="hamburger">
            <MenuIcon />
          </a>
          <a href="#" className="close">
            <CloseIcon />
          </a>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default HeaderMain;
