import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-line
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingColumn = styled.div`
  ${tw`w-full mb-16`}
`;

const CardColumn = tw.div`w-full`;

const HeadingInfoContainer = tw.div`max-w-screen-xl text-center mx-auto`;
const HeadingTitle = styled(SectionHeading)`
  ${tw`mt-4 leading-tight`}
  align-items: center;
  justify-content: center;
`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-2`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;

export default ({
  subheading = "Our Portfolio",
  headingHtmlComponent = (
    <>
      We've done some<span tw="ml-2 text-primary-500">amazing projects.</span>
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
  linkText = "View all Projects",
  cardLinkText = "Read Case Study",
  textOnLeft = false
}) => {
  const cards = [
    {
      imageSrc:
        "https://i.postimg.cc/c1zYHD6L/Screen-Shot-2022-09-27-at-1.jpg",
      company: "Betacanon",
      type: "GIS Web APP",
      title: "Personalized Web App to manage wasted water",
      durationText: "30 Days Dev",
      locationText: "California"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      company: "Nestle",
      type: "SEO Marketing",
      title: "Ranking #1 for keywords like Chocolate, Snack",
      durationText: "180 Day Campaign",
      locationText: "Palo Alto"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      company: "Nestle",
      type: "SEO Marketing",
      title: "Ranking #1 for keywords like Chocolate, Snack",
      durationText: "180 Day Campaign",
      locationText: "Palo Alto"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      company: "Nestle",
      type: "SEO Marketing",
      title: "Ranking #1 for keywords like Chocolate, Snack",
      durationText: "180 Day Campaign",
      locationText: "Palo Alto"
    }
  ];

  return (
    <Container id="our-portfolio">
      <Content>
        <HeadingColumn>
          <HeadingInfoContainer>
            <Subheading>{subheading}</Subheading>
            <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
            <HeadingDescription>{description}</HeadingDescription>
          </HeadingInfoContainer>
        </HeadingColumn>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper-portfolio"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <CardColumn>
                <Card>
                  <CardImage imageSrc={card.imageSrc} />
                  <CardText>
                    <CardHeader>
                      <CardCompany>{card.company}</CardCompany>
                      <CardType>{card.type}</CardType>
                    </CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardMeta>
                      <CardMetaFeature>
                        <TimeIcon /> {card.durationText}
                      </CardMetaFeature>
                      <CardMetaFeature>
                        <LocationIcon /> {card.locationText}
                      </CardMetaFeature>
                    </CardMeta>
                    <CardAction>{cardLinkText}</CardAction>
                  </CardText>
                </Card>
              </CardColumn>
            </SwiperSlide>
          ))}
        </Swiper>
        <PrimaryLink>
          {linkText} <ArrowRightIcon />
        </PrimaryLink>
      </Content>
    </Container>
  );
};
