import styled from "styled-components";

export const HeaderContainer = styled.section.attrs({
  className: "container",
})`
  min-height: 500px;
  height: 100vh;
`;
export const HeaderNav = styled.nav`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, max-content);
  background: #232229;
  border-radius: 0 0 10px 10px;
  padding: 10px;

  --state-close: scale(0);
  --state-hamburger: scale(1);
  --state-menu: translate(-100%);

  :target {
    --state-menu: translate(0);
    --state-close: scale(1);
    --state-hamburger: scale(0);
  }

  ul {
    position: absolute;
    background: #232229;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    align-content: center;
    color: #ffffff;
    gap: 2em;
    padding-left: 15%;
    transform: var(--state-menu);
    transition: 0.3s transform;
  }

  a {
    cursor: pointer;
    grid-column: -2/-1;
    grid-row: 1/2;
    transition: 0.4s transform;
    .MuiSvgIcon-root {
      font-size: 40px;
      color: #fff;
    }
  }

  .hamburger {
    transform: var(--state-hamburger);
  }

  .close {
    transform: var(--state-close);
  }

  @media (min-width: 768px) {
    --state-hamburger: scale(0);
    --state-menu: translate(0);

    :target {
      --state-close: scale(0);
    }

    ul {
      padding: 0;
      position: unset;
      background: unset;
      grid-auto-flow: column;
      color: #ffffff;
      gap: 1.5em;
      transform: unset;
      grid-column: -2/-1;
      grid-row: 1/2;
    }
  }
`;

export const SectionLogo = styled.section`
  font-size: 2.5rem;
  z-index: 1;
`;

export const HeaderLi = styled.li<{ currentView: boolean }>`
  list-style: none;
  cursor: pointer;
  position: relative;
  padding: 5px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    letter-spacing: 2px;
    padding: 0 20px 0 0;
  }

  :before {
    content: "";
    position: absolute;
    width: 40%;
    height: 3px;
    border-radius: 5px;
    bottom: 0px;
    transition: all 0.3s ease-in;
    background: ${(props) => (props.currentView ? "#F45A32" : "transparent")};
  }

  @media (min-width: 768px) {
    a {
      font-size: 1rem;
      letter-spacing: none;
    }
  }
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

  a {
    display: flex;
    align-items: center;
    justify-content: end;
  }
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
