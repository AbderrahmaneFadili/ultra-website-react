import React from "react";
import { Pricing, InfoSection } from "../../components";
import { sectionOne, sectionThree } from "./Data";

const Services = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...sectionOne} />
      <InfoSection {...sectionThree} />
    </>
  );
};

export default Services;
