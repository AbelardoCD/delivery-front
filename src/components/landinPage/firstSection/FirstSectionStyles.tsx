import styled from "styled-components";
export const LandingPageFisrtSection = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;

  /* min-height: calc(100vh - 70px);
  place-content: center;*/
  margin-top: 30px;
`;

export const SectionInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  :before {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #f5e3e2;
    top: 2px;
    left: -50px;
    z-index: -1;
  }
`;

export const Label = styled.label`
  font-size: 46px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

export const MainText = styled.label`
  display: flex;
  flex-direction: column;
`;

export const SecondaryPhrase = styled.label`
  display: flex;
  flex-direction: column;
`;

export const SectionImage = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  :before {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: #ffcf54;
    left: 106px;
    bottom: 44px;
    z-index: -1;
  }
`;

export const SectionCardServices = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Circle = styled.section`
  width: 50px;
  height: 50px;
  background: #ffcf54;
  border-radius: 50px;
  position: absolute;

  right: -20px;
  top: 80%;

  :before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: #4e966d;
    border-radius: 50px;
    position: absolute;
    top: 5px;
    left: -5px;
  }
`;
