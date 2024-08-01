import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { motion } from "framer-motion";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import gis_img from "images/dev_gis.png"
import frontend_img from "images/frontend_gis.png"
import backend_img from "images/backend_gis.png"
import db_img from "images/database_gis.png"
import ai_img from "images/ai_ml_dp_gis.png"
import mobile_img from "images/mobile_gis.png"

const images = [gis_img, frontend_img, backend_img, mobile_img, ai_img, db_img];

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-10 md:py-10`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const HeadingImgTitle = styled(SectionHeading)`
  ${tw`mt-20 leading-tight text-[1.5rem]`}
  align-items: center;
  justify-content: center;
`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-center rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-5 h-5 text-primary-500`}
  }
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
const FeatureHeading = tw.div`font-bold text-lg text-primary-500`;
const FeatureDescription = tw.div`mt-1 text-sm`;


const TextContainer = styled(motion.span)`
  display: inline-block;
`;


export default ({
  subheading = "Our Expertise",
  heading = (
    <>
      We have the most <span tw="text-primary-500">qualified</span> GIS team.
    </>
  ),
  description = "We provide staffing with a large experience and knowledge in the implementation of customized IT solutions that are easy to maintain and scalable, benefits necessary to face the diverse needs and challenges imposed by technological changes to achieve your objectives in the organization and adapt to new market conditions. We accompany our clients from the identification and debugging of their needs, strategy evaluation, project management, monitoring and improvements of the implemented solution.",
  primaryButtonText = "See Our Portfolio",
  features = null,
  textOnLeft = true
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */
  const defaultFeatures = [
    {
      Icon: BriefcaseIcon,
      title: "Professionalism",
      description: "We have the best professional GIS people across the globe just to work with you."
    },
    {
      Icon: MoneyIcon,
      title: "Affordable",
      description: "We promise to offer you the best rate we can - at par with the industry standard."
    }
  ];

  const dynamicTexts = ["GIS", "Frontend", "Backend", "Mobile", "AI", "Database"];
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };


  if (!features) features = defaultFeatures;

  return (
    <Container id="our-expertise">
      <TwoColumn>
        <ImageColumn>
          <HeadingImgTitle>
            <span tw="mr-2">Technologies</span>
            <span tw="text-primary-500">
              <TextContainer
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={activeIndex}
              >
                {dynamicTexts[activeIndex]}
              </TextContainer>
            </span>
            <span tw="ml-2">We Use</span>
          </HeadingImgTitle>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="swiper-background h-full w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} tw="h-3/4">
                <Image
                  className="h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                ></Image>
              </SwiperSlide>
            ))}
          </Swiper>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureIconContainer>{<feature.Icon />}</FeatureIconContainer>
                  <FeatureText>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureText>
                </Feature>
              ))}
            </Features>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
