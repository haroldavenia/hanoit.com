import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Consultancy and Staffing for ArcGIS Platform Solutions",
      description: "We provide top-tier GIS specialist staffing and consulting services with extensive experience to customize your Esri ArcGIS Platform, ensuring it meets your specific business requirements for efficient and effective implementation."
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Cartography Modeling and Data Analysis",
      description: "Our qualified GIS experts offer services in digitizing, spatial analysis, spatial database design, and presentation mapping. These services enhance the accuracy and utility of your geospatial data for better decision-making."
    },
    {
      imageSrc: ReliableIconImage,
      title: "Field Data Collection Solutions",
      description: "We create customized apps to manage and analyze field operations, providing real-time status updates and location tracking for projects and staff, improving operational efficiency and oversight."
    },
    {
      imageSrc: FastIconImage,
      title: "Parcels and Land Records Management",
      description: "We support development, data migration, and subsystem integration to improve land information management, workflows, data integrity, property valuation, analysis, and public communication."
    },
    {
      imageSrc: FastIconImage,
      title: "Network Planning and Management for Utilities",
      description: "Our services enable end-to-end system implementation using the Esri UN suite, maximizing out-of-the-box solutions and facilitating cloud deployment for advanced technology use in utility network management."
    },
    {
      imageSrc: FastIconImage,
      title: "Geospatial Data Transformation and Integration",
      description: "We focus on data transformation, harmonization, and integration to ensure compatibility and interoperability between different geospatial datasets and formats, enhancing data usability."
    },
    {
      imageSrc: SimpleIconImage,
      title: "Address Geocoding and Routing Services",
      description: "We customize location services to find places, geocode addresses, generate routes, and perform mapping operations. This supports complex tasks such as visualization, data enrichment, and spatial analysis."
    },
    {
      imageSrc: SimpleIconImage,
      title: "IoT Fleet Management & Dispatching Solutions",
      description: "Our solutions empower you to manage your fleet with unprecedented efficiency. Seamlessly track and dispatch vehicles, transforming fleet operations into a model of efficiency and intelligence."
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Location Intelligence Analytics (LIA)",
      description: "Our GIS experts enable your organization to identify patterns, trends, and relationships in geographic data. This fosters a deeper understanding of customer behavior, market demographics, and operational efficiency through the integration of LIA with GIS."
    }
  ];

  return (
    <Container id="our-portfolio">
      <ThreeColumnContainer>
        <Heading>Our Professional <span tw="text-primary-500">Services</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
