import React, { useState } from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import styled from "styled-components";
import ConsultingImageSrc from "images/gis-hanoit-back.jpg";
import DevelopmentImageSrc from "images/gis-hanoit-back-2.jpg";
import StaffingImageSrc from "images/gis-hanoit-back-3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const images = [ConsultingImageSrc, DevelopmentImageSrc, StaffingImageSrc];
const dynamicTexts = ["Consulting", "Development", "Staffing"];
const textColor = "#6415ff";

const Container = styled.div`
  ${tw`h-[90vh] relative -mx-8 -mt-8`}
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const TextContainer = styled(motion.span)`
  display: inline-block;
`;

const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export default () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container>
      <OpacityOverlay />
      <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
        <div className="text-white ml-20 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Leading GIS{" "}
            <TextContainer
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              key={activeIndex}
            >
              <span style={{ color: textColor }}>{dynamicTexts[activeIndex]}</span>
            </TextContainer>
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
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="swiper-background h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
