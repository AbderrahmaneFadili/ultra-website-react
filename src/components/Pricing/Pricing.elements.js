import styled from "styled-components";
import { Link } from "react-router-dom";

//Pricing Secction
export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #eb4934;
`;

//Pricing Wrapper
export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    flex-direction: column;
  }
`;

//Pricing Heading
export const PricingHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

//Pricing Container
export const PricingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

//Pricing Card
export const PricingCard = styled.div`
  background: #242424;
  width: 280px;
  height: 500px;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;

  //the second element
  &:nth-child(2) {
    margin: 24px;
  }

  //on hover
  &:hover {
    transform: scale(1.06);
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

//Pricing Card Info
export const PricingCardInfo = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  height: 100%;
`;

//Pricing Card Icon
export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

//Pricing Card Plan
export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

//Pricing Card Cost
export const PricingCardCost = styled.h4`
  font-size: 40px;
`;

//Pricing Card Length
export const PricingCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

//Pricing Card Features
export const PricingCardFeatures = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
  margin: 16px 0 32px;
`;

//Pricing Card Feature
export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;
