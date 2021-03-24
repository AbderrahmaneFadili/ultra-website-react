import React from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";
import { Container, Button } from "../../GlobalStyles";
import { Link } from "react-router-dom";

const InfoSection = ({
  primary,
  lightBg,
  lightTopLine,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
  start,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>

                <Heading lightText={lightText}>{headline}</Heading>

                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>

                <Link to="/signup">
                  <Button primary={primary} fontBig big>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
