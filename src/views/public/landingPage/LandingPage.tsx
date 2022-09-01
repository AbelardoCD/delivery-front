import { LandingPageContainer } from "./landingPageStyles";

import FirstSection from "../../../components/landinPage/firstSection/FirstSection";
import SecondSection from "../../../components/landinPage/secondSection/SecondSection";
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
