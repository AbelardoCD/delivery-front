import {
  HeaderContainer,
  HeaderLi,
  HeaderNav,
  SectionLogo,
  SectionMenu,
  SectionUser,
} from "./HeaderMainStyles";
import logo from "./../../assets/logo_white.png";
import { useLocation } from "react-router-dom";
import { PublicRoutesEnum } from "../../routes/PublicRoutesEnum";
import FaceIcon from "@mui/icons-material/Face";
import { NavLink } from "react-router-dom";
import man from "./../../assets/hombre.png";
const HeaderMain = () => {
  const navigate = useLocation();

  const handleValidateCurrentView = (view: string) => {
    return navigate.pathname === view;
  };

  const handleActionRedirect = (view: string) => {
    return navigate.pathname === view;
  };

  return (
    <>
      <HeaderContainer>
        <HeaderNav>
          <SectionLogo>
            <img src={logo} />
          </SectionLogo>
          <SectionMenu>
            <ul>
              <HeaderLi
                currentView={handleValidateCurrentView(PublicRoutesEnum.PUBLIC)}
              >
                <NavLink to={PublicRoutesEnum.PUBLIC}>Home</NavLink>
              </HeaderLi>
              <HeaderLi
                currentView={handleValidateCurrentView(PublicRoutesEnum.MENU)}
              >
                <NavLink to={PublicRoutesEnum.MENU}>Menu</NavLink>
              </HeaderLi>
              <HeaderLi
                currentView={handleValidateCurrentView(PublicRoutesEnum.OFFERS)}
              >
                Offers
              </HeaderLi>
              <HeaderLi
                currentView={handleValidateCurrentView(PublicRoutesEnum.FOODS)}
              >
                Foods
              </HeaderLi>
              <HeaderLi
                currentView={handleValidateCurrentView(
                  PublicRoutesEnum.SERVICES
                )}
              >
                Services
              </HeaderLi>
            </ul>
          </SectionMenu>
          <SectionUser>
            <img src={man} />
            Farzan
          </SectionUser>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default HeaderMain;
