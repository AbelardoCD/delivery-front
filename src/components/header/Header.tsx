import { NavHeader, SectionLogIn, SectionLogoAndOptions } from "./HeaderStyles";
import logo from "./../../assets/logo.png";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { ExternalRoutesEnum } from "../../routes/ExternalRoutesEnum";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <NavHeader>
        <SectionLogoAndOptions>
          <img src={logo} />
          <ul>
            <li>
              <NavLink to={ExternalRoutesEnum.EXTERNAL}>Home</NavLink>
            </li>
            <li>
              <NavLink to={ExternalRoutesEnum.BREAK}>Breakfast</NavLink>
            </li>
            <li>Lunch</li>
            <li>Dinner</li>
            <LockOpenIcon />
          </ul>
        </SectionLogoAndOptions>

        <SectionLogIn>
          <LockOpenIcon />
        </SectionLogIn>
      </NavHeader>
    </>
  );
};

export default Header;
