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

import man from "./../../assets/hombre.png";
const HeaderMain = () => {
  const navigate = useLocation();

  const handleValidateCurrentView = (view: string) => {
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
                currentView={handleValidateCurrentView(PublicRoutesEnum.HOME)}
              >
                <Link to={PublicRoutesEnum.HOME}>Home</Link>
              </HeaderLi>
              <HeaderLi
                currentView={handleValidateCurrentView(PublicRoutesEnum.MENU)}
              >
                <Link to={PublicRoutesEnum.MENU}>Menu</Link>
              </HeaderLi>
            </ul>
          </SectionMenu>
          <SectionUser>
            <Link to={PublicRoutesEnum.LOGIN}>
              <img src={man} />
              Login
            </Link>
          </SectionUser>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default HeaderMain;
