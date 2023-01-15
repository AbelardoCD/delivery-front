import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useAppReducer } from "../../../redux/appReducer/useAppReducer";
import { useEffect } from "react";
const Backdrop = () => {
  const {
    showBackdrop,
    setShowBackdrop,
    backdropComponent,
    setBackdropComponent,
  } = useAppReducer();

  useEffect(() => {
    return () => {
      setBackdropComponent(null);
    };
  }, []);
  return (
    <>
      {showBackdrop && (
        <BackdropContainer>
          <CloseIcon onClick={() => setShowBackdrop(false)} />
          <section>{backdropComponent}</section>
        </BackdropContainer>
      )}
    </>
  );
};

export default Backdrop;

const BackdropContainer = styled.div.attrs({
  className: "container animated fadeInDown fast",
})`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--layer-one);
  z-index: 11;
  section {
    margin-top: 50px;
  }
  .MuiSvgIcon-root {
    color: #000;
    position: absolute;
    right: 0;
    top: 20px;
    :hover {
      transform: scale(0.9);
      cursor: pointer;
    }
  }
`;
