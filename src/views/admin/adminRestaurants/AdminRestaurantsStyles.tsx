import styled from "styled-components";

export const AdminRestaurantsContainer = styled.section.attrs({
  className: "container",
})`
  margin-top: 59px;
  min-height: calc(100vh - 59px);
`;

export const FormularioContainer = styled.form`
  background: #fef2f2;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 500px;
  max-height: 700px;
  overflow: auto;
  label {
    font-size: 16px;
    color: #727171;
    margin-bottom: 10px;
  }
`;
