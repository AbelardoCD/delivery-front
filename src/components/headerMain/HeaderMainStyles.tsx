import styled from "styled-components";

export const HeaderContainer = styled.section.attrs({
  className: "container",
})``;
export const HeaderNav = styled.nav`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  background: #232229;
  padding: 20px 20px;
  border-radius: 0 0 10px 10px;
`;

export const SectionLogo = styled.section`
  display: flex;
  align-items: center;
`;
export const SectionMenu = styled.section`
  color: #ffffff;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
`;

export const HeaderLi = styled.li<{ currentView: boolean }>`
  list-style: none;
  cursor: pointer;
  position: relative;
  padding: 5px;
  :before {
    content: "";
    position: absolute;
    width: 50%;
    height: 3px;
    border-radius: 5px;
    bottom: 0px;
    transition: all 0.3s ease-in;
    background: ${(props) => (props.currentView ? "#F45A32" : "transparent")};
  }

  /* :hover {
    cursor: pointer;
    background-color: red;
    color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease-in;
    padding: 5px;
  }*/
`;

export const SectionUser = styled.section`
  display: flex;
  align-items: center;
  color: #ffffff;
  justify-content: end;
  cursor: pointer;
  img {
    width: 30px;
    margin-right: 10px;
  }
`;
