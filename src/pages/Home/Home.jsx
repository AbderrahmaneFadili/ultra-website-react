import React from "react";
import { sectionOne, sectionTwo, sectionThree, sectionFour } from "./Data";
import { InfoSection, Pricing } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...sectionOne} />
      <InfoSection {...sectionThree} />
      <InfoSection {...sectionTwo} />
      <Pricing />
      <InfoSection {...sectionFour} />
    </>
  );
};

export default Home;
