import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminDashboard from "../views/admin/adminDashboard/AdminDashboard";
import PublicDashboard from "../views/public/publicDashboard/PublicDashboard";
import styled from "styled-components";
import HeaderMain from "../components/headerMain/HeaderMain";

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
const RoutesDashboard = () => {
  return (
    <>
      <PublicDashboardContainer>
        <HeadFixed>
          <HeaderMain />
        </HeadFixed>
        <BodyPage>
          <AdminDashboard />
          <PublicDashboard />
        </BodyPage>
      </PublicDashboardContainer>
    </>
  );
};

export default RoutesDashboard;
