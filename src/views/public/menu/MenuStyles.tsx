import styled from "styled-components";

export const MenuContainer = styled.div.attrs({ className: "container" })`
  /*display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;*/
  margin-top: 100px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  place-items: center;
`;
