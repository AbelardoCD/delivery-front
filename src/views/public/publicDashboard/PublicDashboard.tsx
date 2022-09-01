import HeaderMain from "../../../components/headerMain/HeaderMain";
import PublicRoutes from "../../../routes/PublicRoutes";
import styled from "styled-components";

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

const PublicDashboard = () => {
  return (
    <>
      <PublicDashboardContainer>
        <HeadFixed>
          <HeaderMain />
        </HeadFixed>
        <PublicRoutes />
      </PublicDashboardContainer>
    </>
  );
};

export default PublicDashboard;
