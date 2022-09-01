import styled from "styled-components";

export const NavHeader = styled.nav`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 65% 35%;
  position: fixed;
  z-index: 3;
  width: 100%;
  top: 0;
  img {
    margin-right: 200px;
  }
  ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  ul li {
    list-style: none;
    cursor: pointer;
  }
`;

export const SectionLogoAndOptions = styled.section`
  display: flex;
  align-items: center;
`;

export const SectionLogIn = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 150px;
`;
