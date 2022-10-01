import {
  ImageSection,
  LandingPageContainer,
  TextSection,
} from "./landingPageStyles";

import delivery from "./../../../assets/lottieFiles/delivery.json";
import { useLottie } from "lottie-react";
const LandingPage = () => {
  const lotttieView = {
    animationData: delivery,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(lotttieView);
  return (
    <>
      <LandingPageContainer className="container animated fadeIn faster">
        <TextSection>
          <h1>Buena Comida, Envio Rapido</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <input type="button" value="Leer Mas" />
        </TextSection>
        <ImageSection>
          <div className="animated fadeInLeft faster">{View}</div>
        </ImageSection>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;
