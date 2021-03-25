import React from "react";
import { Button } from "../../GlobalStyles";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcon,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Join our exclusive membership to receive the latest news and trends
          </FooterSubHeading>

          <FooterSubText>You can unsubscribe at any time.</FooterSubText>

          <Form>
            <FormInput id="email" name="email" placeholder="Your Email" />
            <Button fontBig>Subscribe</Button>
          </Form>
        </FooterSubscription>

        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signup">How it works</FooterLink>
              <FooterLink to="/#">Testimonials</FooterLink>
              <FooterLink to="/#">Careers</FooterLink>
              <FooterLink to="/#">Investors</FooterLink>
              <FooterLink to="/#">Terms of Service</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/#">Contact</FooterLink>
              <FooterLink to="/#">Support</FooterLink>
              <FooterLink to="/#">Destinations</FooterLink>
              <FooterLink to="/#">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/#">Submit Video</FooterLink>
              <FooterLink to="/#">Ambassadors</FooterLink>
              <FooterLink to="/#">Agency</FooterLink>
              <FooterLink to="/#">Influencer</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/#">Instagram</FooterLink>
              <FooterLink to="/#">Facebook</FooterLink>
              <FooterLink to="/#">Youtube</FooterLink>
              <FooterLink to="/#">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo>
              <SocialIcon />
              ULTRA
            </SocialLogo>

            <WebsiteRights>ULTRA © 2021</WebsiteRights>
            <SocialIcons>
              <SocialIconLink to="/#">
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink to="/#">
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink to="/#">
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink to="/#">
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink to="/#">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;
