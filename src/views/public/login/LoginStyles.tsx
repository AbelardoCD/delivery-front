import styled from "styled-components";

export const LoginContainer = styled.section.attrs({
  className: "animated fadeIn fast",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  .container-box {
    padding: 40px;
    width: 500px;
    background: #fcfcfc;
    border-radius: 5px;
  }
  .title {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .container-box .login {
    margin-top: 10px;
    display: grid;
    gap: 30px;
    grid-template-rows: repeat(3, auto);
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
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const ImgAbsolute = styled.img<{
  top: string;
  left: string;
}>`
  position: absolute;
  top: ${(props) => props.top};

  left: ${(props) => props.left};
`;
