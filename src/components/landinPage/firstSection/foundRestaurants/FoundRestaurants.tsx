import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import woman from "./../../../../assets/mujer.png";
export const FoundRestaurantsContainer = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
export const Phrase = styled.section`
  display: flex;
  align-items: center;

  label {
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.5;
    font-size: 12px;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;
export const FormLanding = styled.div`
  background: #4d966d;
  display: flex;
  max-width: 230px;
  border-radius: 20px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 6px 6px 32px #4d966d9d;
  color: #ffffff;

  input {
    background: transparent;
    outline: none;
    border: none;
    position: relative;
    height: 50px;
    color: #ffffff;
    padding: 0 5px;
  }
  input::placeholder {
    color: #ffffff;
    font-weight: bold;
    font-size: 12px;
    opacity: 0.8;
  }
  .MuiSvgIcon-root {
    color: #ffffff;
  }
`;
const FoundRestaurants = () => {
  return (
    <>
      <FoundRestaurantsContainer>
        <Phrase>
          <img src={woman} />
          <label>
            Cuando tienes flojera para cosinar, nosotros estamos para servirte
          </label>
        </Phrase>
        {/* <FormLanding>
          <SearchIcon />
          <input autoFocus placeholder="Find Restaurants" />
        </FormLanding> */}
      </FoundRestaurantsContainer>
    </>
  );
};

export default FoundRestaurants;
