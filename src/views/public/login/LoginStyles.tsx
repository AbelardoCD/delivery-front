import styled from "styled-components";

export const LoginContainer = styled.section.attrs({
  className: "animated fadeIn fast",
})`
  display: flex;
  justify-content: center;
  margin-top: 59px;
  min-height: calc(100vh - 59px);
`;

export const InformationSection = styled.section.attrs({
  className: "animated fadeIn fast",
})`
  background: #f15f37;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  flex-direction: column;
  box-shadow: 2px 2px 16px #fde4e0;
  label {
    font-weight: bold;
    font-size: 20px;
    color: #585757;
    text-align: center;
  }

  form {
    gap: 20px;
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.button`
  background: var(--green);
  border-radius: 5px;
  color: #ffffff;
  width: 100%;
  padding: 15px;
  outline: none;
  border: none;
  box-shadow: 2px 2px 16px #4d966d9d;
  cursor: pointer;
`;

export const ImgAbsolute = styled.img<{
  top: string;
  left: string;
}>`
  position: absolute;
  top: ${(props) => props.top};

  left: ${(props) => props.left};
`;
