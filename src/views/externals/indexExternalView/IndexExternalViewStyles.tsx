import styled from "styled-components";

export const InformationContainer = styled.section`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Information = styled.section.attrs({ className: "container" })`
  width: 100%;
  height: 100%;
`;
export const LeftInformation = styled.section`
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;
export const MainParagraph = styled.section`
  width: 28%;
  h1 {
    color: var(--secondary-color);
    font-size: 48px;
  }

  h4 {
    color: #000000;
    font-size: 36px;
  }
`;
export const ButtomRegister = styled.button`
  background: var(--secondary-color);
  padding: 15px 35px;
  outline: none;
  border-radius: 48px;
  border: none;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
`;
export const ContainerView = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  top: -80px;
`;

export const DishesAroundContainer = styled.div`
  position: absolute;
  aspect-ratio: 1/1;
  width: 600px;
  height: 600px;
  bottom: -300px;
  left: 30%;
`;

export const Circle = styled.div`
  position: absolute;
  background: #83bb65;
  height: 1400px;
  width: 1400px;
  border-radius: 50%;
  right: -200px;
  top: -900px;
  overflow: hidden;
`;
export const CircleTwo = styled.div`
  position: absolute;
  background: transparent;
  height: 1400px;
  width: 1400px;
  border-radius: 50%;
  right: -200px;
  top: -900px;
  filter: drop-shadow(2px 2px 4px #c0c0c0);
`;
export const DishAround = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: turn 120s linear infinite;

  @keyframes turn {
    to {
      transform: rotate(1turn);
    }
  }
`;

export const MainDish = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;
