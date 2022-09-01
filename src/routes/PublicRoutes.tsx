import { PublicRoutesEnum } from "./PublicRoutesEnum";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../views/public/landingPage/LandingPage";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={PublicRoutesEnum.PUBLIC} element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
