import React from "react";
import { sectionOne, sectionTwo, sectionThree, sectionFour } from "./Data";
import { InfoSection } from "../../components";
const Home = () => {
  return (
    <>
      <InfoSection {...sectionOne} />
    </>
  );
};

export default Home;
