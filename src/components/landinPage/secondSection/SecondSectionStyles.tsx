import styled from "styled-components";
export const SectionTwoContainer = styled.section`
  margin-bottom: 50px;
  position: relative;

  display: flex;
  justify-content: center;
`;
export const SectionRectangle = styled.section`
  width: 90%;
  height: 300px;
  background: var(--orange);
  border-radius: 20px 80px 20px 20px;
  transform: rotate(-2deg);
  position: relative;
  margin-top: 100px;
  display: flex;
  justify-content: start;
  align-items: center;
  box-shadow: 0 4px 16px #f15f3768;

  .pizza {
    z-index: 100;
    position: absolute;

    top: calc(300px - 390px);
    right: calc(90% - 90.5%);
    width: 20%;
  }
`;

export const SectionDownloadApp = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  label {
    color: #ffffff;
    transform: rotate(2deg);
    font-size: 56px;
  }
`;
export const SectionRectangleTwo = styled.section`
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 20px 80px 20px 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .pizza {
    background: #08040421;
    border-radius: 50%;
  }
`;

export const SectionIconsApps = styled.section<{ rigth: string }>`
  img {
    width: 30px;
    height: 30px;
  }
  position: absolute;
  background: #ffffff;
  width: 100px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding: 20px 0;
  right: ${(props) => props.rigth};
  bottom: -50px;
  border-radius: 30px 30px 0 0;

  label {
    margin-top: 10px;
  }
`;
