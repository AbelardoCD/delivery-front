import { PublicRoutesEnum } from "./PublicRoutesEnum";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../views/public/landingPage/LandingPage";
import Menu from "../views/public/menu/Menu";
import Login from "../views/public/login/Login";

const PublicRoutes = () => {
  console.log("here");

  return (
    <>
      <Switch>
        <Route exact path={"/"} component={LandingPage} />

        <Route exact path={PublicRoutesEnum.HOME} component={LandingPage} />
        <Route exact path={PublicRoutesEnum.MENU} component={Menu} />

        <Route exact path={PublicRoutesEnum.LOGIN} component={Login} />
      </Switch>
    </>
  );
};

export default PublicRoutes;
