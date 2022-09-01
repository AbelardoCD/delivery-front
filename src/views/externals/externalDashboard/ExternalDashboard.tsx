import Header from "../../../components/header/Header";
import ExternalRoutes from "../../../routes/ExternalRoutes";
import styled from "styled-components";

export const Main = styled.section`
  margin-top: 80px;
  width: 100%;
  height: calc(100vh - 80px);
`;

export const ContentHeader = styled.section``;
export const ContentH = styled.section.attrs({ className: "container" })``;
const ExternalDashboard = () => {
  return (
    <>
      <Main>
        <ContentHeader className="container">
          <Header />
        </ContentHeader>
        <ExternalRoutes />
      </Main>
    </>
  );
};

export default ExternalDashboard;
