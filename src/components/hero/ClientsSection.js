import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styled from "styled-components";
import tw from "twin.macro";

import client_one from "images/client_1_hanoit.png"
import client_two from "images/client_2_hanoit.png"
import client_three from "images/client_3_hanoit.png"
import client_four from "images/client_4_hanoit.png"
import client_five from "images/client_5_hanoit.png"
import client_six from "images/client_6_hanoit.png"
import client_seven from "images/client_7_hanoit.png"


const clientLogos = [
  { src: client_one, alt: "Client 1" },
  { src: client_two, alt: "Client 2" },
  { src: client_three, alt: "Client 3" },
  { src: client_four, alt: "Client 4" },
  { src: client_five, alt: "Client 5" },
  { src: client_six, alt: "Client 6" },
  { src: client_seven, alt: "Client 7" },
];

const CustomHeading = styled.h2`
  ${tw`
    text-lg 
    md:text-xl 
    lg:text-2xl 
    font-semibold 
    mb-6 
    lg:mb-0 
    text-center 
    lg:text-left 
    lg:w-1/3 
    xl:w-1/4 
    whitespace-nowrap
  `}
  color: rgb(100, 21, 255, var(--tw-text-opacity));
`;

export default () => {
  return (
    <div className="bg-white py-6 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <CustomHeading>
            Trusted by industry leaders
          </CustomHeading>
          <div className="lg:w-2/3 xl:w-3/4">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              speed={2000}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
              className="w-full"
            >
              {clientLogos.map((logo, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 w-auto object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

