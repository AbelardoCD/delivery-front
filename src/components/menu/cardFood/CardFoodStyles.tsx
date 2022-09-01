import styled from "styled-components";

export const CardFoodContiner = styled.section`
  width: 300px;
  height: 300px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 4px 4px 16px #f8e5e5;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  position: relative;
  :before {
    content: "$100";
    position: absolute;
    width: 100px;
    height: 40px;
    background: #4d966d;
    bottom: 5px;
    left: 0px;
    border-radius: 0 10px 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
  }
`;

export const TitleCard = styled.label`
  display: flex;
  color: #505050;
  font-weight: bold;
`;
