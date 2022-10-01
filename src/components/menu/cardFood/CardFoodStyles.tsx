import styled from "styled-components";

export const CardFoodContiner = styled.section`
  width: 200px;
  max-height: 380px;
  background: linear-gradient(to top, #fcd7d7a0, transparent);
  border-radius: 5px;
  position: relative;
`;

export const SectionImage = styled.section<{
  imageBase64: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 195px;
    height: 190px;
    border-radius: 50%;
    border-top: 10px solid #f15f37;
    border-left: 10px solid #fdeaea;
    border-right: 10px solid #fdeaea;
    border-bottom: 10px solid transparent;

    margin-top: 5px;
    position: relative;
  }
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
  .body-card input {
    background: #f54d4d;
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 12px;
    margin-top: 15px;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: -20px;
    left: 51px;
  }

  .body-card p {
    font-weight: 200 !important;
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

    color: #838282;
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

const returnImage = (img: string) => {
  return `data:image/png;base64,${img}`;
};
