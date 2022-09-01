import {
  SectionDownloadApp,
  SectionIconsApps,
  SectionRectangle,
  SectionRectangleTwo,
  SectionTwoContainer,
} from "./SecondSectionStyles";
import pizza from "./../../../assets/pizza_two.png";
import playStore from "./../../../assets/play_store.png";
import appStore from "./../../../assets/app_store.png";

import delivery_man from "./../../../assets/delivery_man.png";

const SecondSection = () => {
  return (
    <SectionTwoContainer>
      <SectionRectangle>
        <img
          className="delivery-man animated fadeInLeft faster"
          src={delivery_man}
        />
        <SectionDownloadApp>
          <label>Download </label>
          <label>our mobile App</label>
        </SectionDownloadApp>
        <img className="pizza" src={pizza} />
        <SectionRectangleTwo>
          <img className="pizza" src={pizza} />
          <SectionIconsApps rigth="15%">
            <img src={playStore} />
            <label>Play Store</label>
          </SectionIconsApps>

          <SectionIconsApps rigth="5%">
            <img src={appStore} />
            <label>App Store</label>
          </SectionIconsApps>
        </SectionRectangleTwo>
      </SectionRectangle>
    </SectionTwoContainer>
  );
};

export default SecondSection;
