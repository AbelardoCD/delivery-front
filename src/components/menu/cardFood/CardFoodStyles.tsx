import styled from "styled-components";

export const CardFoodContiner = styled.section<{
  imageBase64: string;
  price: string;
}>`
  width: 250px;
  height: 250px;
  background: url(${(props) => `data:image/png;base64,${props.imageBase64}`})
    center center no-repeat;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 4px 4px 16px #f8e5e5;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  position: relative;

  :before {
    content: "$${(props) => props.price}";
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

  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export const TitleCard = styled.label`
  display: flex;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  background: #23222969;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 5px 0 0;
`;
