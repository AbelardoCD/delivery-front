import { LandingPageContainer } from "./landingPageStyles";

import FirstSection from "../../../components/landinPage/firstSection/FirstSection";
import SecondSection from "../../../components/landinPage/secondSection/SecondSection";
import Login from "../login/Login";
import HeaderMain from "../../../components/headerMain/HeaderMain";
const LandingPage = () => {
  return (
    <>
      <LandingPageContainer>
        <FirstSection />
        <SecondSection />
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;
