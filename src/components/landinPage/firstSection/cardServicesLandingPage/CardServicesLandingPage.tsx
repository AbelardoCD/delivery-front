import { ReactNode } from "react";
import styled from "styled-components";
export const CardServicesLandingPageContainer = styled.section.attrs({
  className: "animated fadeInRight fast",
})`
  display: flex;
  align-items: center;
  max-width: 230px;
  margin-top: 60px;
  .MuiSvgIcon-root {
    border-radius: 50%;
    margin-right: 25px;
    background: #f8f3f3;
    padding: 12px;
    width: 50px;
    height: 50px;
    box-shadow: 6px 6px 32px #c0c0c0;
  }
`;

export const Info = styled.section`
  label {
    color: #585757;
    font-weight: bold;
    font-size: 18px;
  }

  p {
    font-size: 12px;
    margin-top: 10px;
    font-weight: bold;
    opacity: 0.5;
  }
`;

const CardServicesLandingPage = ({
  text,
  title,
  icon,
}: {
  title: string;
  text: string;
  icon: ReactNode | ReactNode[];
}) => {
  return (
    <>
      <CardServicesLandingPageContainer>
        {icon}
        <Info>
          <label>{title}</label>
          <p>{text}</p>
        </Info>
      </CardServicesLandingPageContainer>
    </>
  );
};

export default CardServicesLandingPage;
