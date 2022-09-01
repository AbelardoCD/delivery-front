import { PublicRoutesEnum } from "./PublicRoutesEnum";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../views/public/landingPage/LandingPage";
import Menu from "../views/public/menu/Menu";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={PublicRoutesEnum.PUBLIC} element={<LandingPage />} />

        <Route path={PublicRoutesEnum.MENU} element={<Menu />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
