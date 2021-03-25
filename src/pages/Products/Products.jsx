import React from "react";
import { sectionOne, sectionTwo } from "./Data";
import { InfoSection } from "../../components";
const Products = () => {
  return (
    <>
      <InfoSection {...sectionOne} />
      <InfoSection {...sectionTwo} />
    </>
  );
};

export default Products;
