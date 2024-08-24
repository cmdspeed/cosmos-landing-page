import {
  HeroContainer,
  HeroContent,
  HeroGirl,
  HeroTitle,
  GirlShadow,
  GirlContainer,
  DiagramContainer,
  TimerInSpace,
  HeroDescriptionContainer,
  HeroDescription,
} from "./Hero.styled";
import { Diagram } from "./Diagram/Diagram";

import spacegirlx1 from "../../assets/images/Hero/space-girl@x1.png";
import spacegirlx2 from "../../assets/images/Hero/space-girl@x2.png";

export const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroTitle>Unveiling the Wonders of the Universe</HeroTitle>
        </HeroContent>
        <GirlContainer>
          <GirlShadow></GirlShadow>
          <HeroGirl
            src={`${spacegirlx1}`}
            srcSet={`${spacegirlx2} 2x`}
            alt="Space Girl"
          />
        </GirlContainer>
        <DiagramContainer>
          <Diagram
            svgTitle="#graph1"
            title="Spacewalks"
            graph={[
              { width: "5.9375rem", height: "3.0625rem", iconName: "graph2" },
              { width: "2.9375rem", height: "2.9375rem", iconName: "graph3" },
            ]}
          />
          <Diagram
            svgTitle="#graph4"
            title="Exercising"
            graph={[
              { width: "7.7156rem", height: "1.8125rem", iconName: "graph5" },
            ]}
          />
        </DiagramContainer>
        <TimerInSpace>
          <Diagram
            svgTitle="#timeIcon"
            title="Total time in space "
            bgColor="--bg-color-diagram"
          >
            <span> 352D 5H 49M 20S</span>
          </Diagram>
        </TimerInSpace>
      </HeroContainer>
      <HeroDescriptionContainer>
        <HeroDescription>
          At odissey, our mission is to inspire, educate, and ignite your
          passion for the cosmos. We are your premier destination for all things
          related to space exploration, astronomy, and the mysteries of the
          universe. Whether you're a seasoned astronomer or a curious novice,
          join us on a journey to the furthest reaches of the cosmos.
        </HeroDescription>
      </HeroDescriptionContainer>
    </>
  );
};