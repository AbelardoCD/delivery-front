import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import { PublicRoutesEnum } from "../../../routes/PublicRoutesEnum";
import LandingPage from "../landingPage/LandingPage";
import Login from "../login/Login";
import Menu from "../menu/Menu";
import Backdrop from "../../../components/miscelaneous/backdrop/Backdrop";
export const PublicDashboardContainer = styled.section.attrs({
  className: "animated fadeIn fast",
})`
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const HeadFixed = styled.section`
  position: fixed;
  z-index: 10;
  width: 100%;
  left: 0;
`;

export const BodyPage = styled.section.attrs({ className: "container" })`
  margin-top: 100px;
  margin-bottom: 50px;
`;

const PublicDashboard = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path={PublicRoutesEnum.HOME} component={LandingPage} />
        <Route exact path={PublicRoutesEnum.MENU} component={Menu} />

        <Route exact path={PublicRoutesEnum.LOGIN} component={Login} />
      </Switch>
      <Backdrop />
    </>
  );
};

export default PublicDashboard;
