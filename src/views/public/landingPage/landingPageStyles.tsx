import styled from "styled-components";
import background from "./../../../assets/Background.svg";
import blob from "./../../../assets/blob.svg";

export const LandingPageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 59px;
  min-height: calc(100vh - 59px);
  font-family: 16px;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 100px;
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const TextSection = styled.section`
  max-width: 500px;
  h1 {
    font-size: 3em;
    font-weight: bold;
  }
  p {
    margin-top: 10px;
    color: #363636;
  }

  input {
    padding: 18px 80px;
    border: none;
    font-size: 16px;
    border-radius: 50px;
    margin-top: 40px;
    background: linear-gradient(to right, #fab2b2, #f54d4d);
    color: #fff;
    cursor: pointer;
    box-shadow: 1px 1px 30px -12px #f54d4d;
    transition: all 300ms;
  }
`;

export const ImageSection = styled.section`
  position: relative;
  min-width: 400px;
  &::after {
    position: absolute;
    content: "";
    top: -0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url(${blob}) center center no-repeat;
    background-position: right;
    background-size: cover;
    z-index: -1;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;
