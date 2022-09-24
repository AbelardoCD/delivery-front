import styled from "styled-components";

export const CardFoodContiner = styled.section`
  width: 250px;
  max-height: 350px;
  background: #fff9f9;
  border-radius: 5px;
  box-shadow: 4px 4px 32px #c0c0c0;
  overflow: hidden;
`;

export const SectionImage = styled.section<{
  imageBase64: string;
}>`
  width: 100%;
  height: 170px;
  background: url(${(props) => `data:image/png;base64,${props.imageBase64}`})
    center center no-repeat;
  background-size: cover;
  border-radius: 5px;
`;

export const SectionInformation = styled.section`
  padding: 10px 10px 20px 10px;
  height: 40%;

  .restaurant-name label {
    color: #479468;
    font-weight: bold;
  }
  .section-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .section-title label {
    font-weight: bold;
  }
  .section-title span {
    background: var(--orange);
    padding: 5px 10px;
    color: #ffffff;
    border-radius: 5px;
  }

  .body-card {
    margin-top: 10px;
  }
  .body-card button {
    background: #f15f373b;
    color: #f15f37;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
    margin-top: 10px;
    border: none;
    cursor: pointer;
  }

  .body-card p {
    font-weight: 100 !important;
    display: block;
    display: -webkit-box;
    max-width: 100%;
    height: 37px;
    margin: 0 auto;

    line-height: 1;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    color: #999898;
    font-size: 12px;
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
