import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";

//Footer Container
export const FooterContainer = styled.footer`
  padding: 4rem 0 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #101522;
`;

//Footer Subscription
export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

//Footer SubHeading
export const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
`;

//Footer FooterSubText
export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

//Form
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

//Form Input
export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  border: 1px solid #fff;
  font-family: Poppins, sans-serif;
  display: inline-block;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;

//Form Button

//Footer Links Container
export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

//Footer Links Wrapper
export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

//Footer Link Items
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    width: 100%;
    padding: 10px;
  }
`;

//Footer Link Title
export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

//Footer Link
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #0467fb;
  }
`;

//Social Media
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

//Socia lMedia Wrap
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

//Social Logo
export const SocialLogo = styled(Link)`
  color: #fff;
  align-self: flex-start;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  @media screen and (max-width: 960px) {
    align-self: center;
  }
`;

//Social Icon
export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

//Website Rights
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

//Social Icons
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

//Social Icon Link
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;
