import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clientLogos = [
  { src: "https://via.placeholder.com/150?text=Client+1", alt: "Client 1" },
  { src: "https://via.placeholder.com/150?text=Client+2", alt: "Client 2" },
  { src: "https://via.placeholder.com/150?text=Client+3", alt: "Client 3" },
  { src: "https://via.placeholder.com/150?text=Client+4", alt: "Client 4" },
  { src: "https://via.placeholder.com/150?text=Client+5", alt: "Client 5" },
  { src: "https://via.placeholder.com/150?text=Client+6", alt: "Client 6" },
  { src: "https://via.placeholder.com/150?text=Client+7", alt: "Client 7" },
];

export default () => {
  return (
    <div className="bg-white py-6 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-6 lg:mb-0 text-center lg:text-left lg:w-1/3 xl:w-1/4 whitespace-nowrap">
            Trusted by industry leaders
          </h2>
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

