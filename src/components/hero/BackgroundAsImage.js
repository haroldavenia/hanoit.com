import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import ContactUsForm from "../forms/TwoColContactUsWithIllustration.js";
import AgencyLandingPage from "demos/AgencyLandingPage.js";
import useAnimatedStickyHeader from "helpers/useAnimatedStickyHeader.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ConsultingImageSrc from "images/gis-hanoit-back.jpg";
import DevelopmentImageSrc from "images/gis-hanoit-back-2.jpg";
import StaffingImageSrc from "images/gis-hanoit-back-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [ConsultingImageSrc, DevelopmentImageSrc, StaffingImageSrc];

const dynamicTexts = ["Consulting", "Development", "Staffing"];

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const Container = styled.div`
  ${tw`h-[90vh] relative -mx-8 -mt-8`}
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;

export default () => {
  const { animationHeader, toggleAnimation } = useAnimatedStickyHeader();
  const [navBar, setNavbar] = useState();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    toggleAnimation();
  }, [navBar]);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  });

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#our-portfolio">Our Portafolio</NavLink>
      <NavLink href="#our-expertise">Our Expertise</NavLink>
      <NavLink href="#contact-us">Contact Us</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      {/* <PrimaryLink href="TwoColContactUsWithIllustration__Container-sc-ihjnfb-0 gXmSun">
        Hire Us
      </PrimaryLink> */}
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />

      {!navBar ? (
        <HeroContainer>
          <StyledHeader links={navLinks} />
        </HeroContainer>
      ) : (
        <></>
      )}

      <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
        <div className="text-white ml-20 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Leading GIS {dynamicTexts[activeIndex]}
          </h1>
          <p className="text-xl">
            "Innovative Geospatial Solutions for Business Success"
          </p>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
