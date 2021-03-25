import React from "react";
import { sectionOne, sectionThree } from "./Data";
import { InfoSection } from "../../components";
const SignUp = () => {
  return (
    <>
      <InfoSection {...sectionOne} />
      <InfoSection {...sectionThree} />
    </>
  );
};

export default SignUp;
