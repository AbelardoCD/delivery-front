import CardServicesLandingPage from "./cardServicesLandingPage/CardServicesLandingPage";
import {
  Circle,
  Label,
  LandingPageFisrtSection,
  MainText,
  SecondaryPhrase,
  SectionCardServices,
  SectionImage,
  SectionInfo,
} from "./FirstSectionStyles";

import girl from "./../../../assets/girl.png";
import FoundRestaurants from "../../../components/landinPage/firstSection/foundRestaurants/FoundRestaurants";
import MopedIcon from "@mui/icons-material/Moped";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import RestaurantIcon from "@mui/icons-material/Restaurant";
const FirstSection = () => {
  return (
    <>
      <LandingPageFisrtSection>
        <SectionInfo>
          <MainText>
            <Label color="#020202">Fasters</Label>
            <Label color="#F45A32">
              Delivery <Label>{"&"}</Label>
            </Label>

            <Label>
              Easy <Label color="#F45A32">Pickup</Label>
            </Label>
          </MainText>
          <SecondaryPhrase>
            <FoundRestaurants />
          </SecondaryPhrase>
        </SectionInfo>
        <SectionImage>
          <img src={girl} />

          <SectionCardServices>
            <CardServicesLandingPage
              text="Promise to deliver within 30 mins"
              title="Fast delivery"
              icon={<MopedIcon />}
            />
            <CardServicesLandingPage
              text="Pickup delivery at your doorstep"
              title="Pick up"
              icon={<LocalMallIcon />}
            />
            <CardServicesLandingPage
              text="Enjoy your food fresh crispy and hot"
              title="Dine in"
              icon={<RestaurantIcon />}
            />
          </SectionCardServices>
        </SectionImage>
        <Circle />
      </LandingPageFisrtSection>
    </>
  );
};

export default FirstSection;
