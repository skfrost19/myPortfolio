import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection
          skill={"Data Structures & Algorithms"}
          progress={"100%"}
          width={"100%"}
        />
        <SkillsSection skill={"Python"} progress={"100%"} width={"100%"} />
        <SkillsSection skill={"C++"} progress={"100%"} width={"100%"} />
        <SkillsSection
          skill={"Machine Learning"}
          progress={"40%"}
          width={"40%"}
        />
        <SkillsSection
          skill={"Cloud Computing"}
          progress={"20%"}
          width={"20%"}
        />
        <SkillsSection skill={"React JS"} progress={"10%"} width={"10%"} />
      </div>

      {/* <Tittle title={"Services"} span={"Services"} />
      <div className="servives-container">
        <ServicesSection
          image={design}
          title={"Web design"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={intelligence}
          title={"Artificial Intelligence"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={gamedev}
          title={"Game Development"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </div> */}
    </div>
  );
}

export default AboutPage;
