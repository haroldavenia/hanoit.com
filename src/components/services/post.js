import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SectionHeading } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js"

import ConsultancyImg from "../../images/consultancy_hanoit.jpg";
import AnalystImg from "../../images/analyst_hanoit.jpg";
import CollectionImg from "../../images/collection_hanoit.jpg";
import ParcelImg from "../../images/parcel_hanoit.jpg";
import UtilityImg from "../../images/utility_hanoit.jpg";
import DataImg from "../../images/data_hanoit.jpg";
import FleetImg from "../../images/fleet_hanoit.jpg";
import GeocodingImg from "../../images/geocoding_hanoit.jpg";
import LocationaiImg from "../../images/locationai_hanoit.jpg";

const Row = tw.div`flex flex-col`;
const Heading = tw(SectionHeading)`mb-10 text-left lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`mb-0 lg:w-screen`;
const PostsContainer = tw.div`ml-10 mb-20 flex flex-row sm:flex-row justify-start`;
const Post = tw(motion.a)`flex flex-col sm:max-w-sm cursor-pointer mb-0 last:mb-0 sm:mb-0 sm:odd:mr-5 lg:mr-0 xl:mr-5`;
const Image = styled(motion.div)(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-56 bg-cover bg-center rounded`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`h-[5rem] mt-2 font-medium text-secondary-100 leading-loose text-sm`;

export default () => {
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%"
    },
    hover: {
      backgroundSize: "110%"
    }
  };

  const popularPostsRowOne = [
    {
      postImageSrc: ConsultancyImg,
      title: "Consultancy and Staffing for ArcGIS Platform Solutions",
      description: "We provide top-tier GIS specialist staffing and consulting services with extensive experience to customize your Esri ArcGIS Platform, ensuring it meets your specific business requirements for efficient and effective implementation."
    },
    {
      postImageSrc: AnalystImg,
      title: "Cartography Modeling and Data Analysis",
      description: "Our qualified GIS experts offer services in digitizing, spatial analysis, spatial database design, and presentation mapping. These services enhance the accuracy and utility of your geospatial data for better decision-making."
    },
    {
      postImageSrc: CollectionImg,
      title: "Field Data Real-time Collection Solutions",
      description: "We create customized apps to manage and analyze field operations, providing real-time status updates and location tracking for projects and staff, improving operational efficiency and oversight."
    }
  ];

  const popularPostsRowTwo = [
    {
      postImageSrc: ParcelImg,
      title: "Parcels and Land Records Management",
      description: "We support development, data migration, and subsystem integration to improve land information management, workflows, data integrity, property valuation, analysis, and public communication."
    },
    {
      postImageSrc: UtilityImg,
      title: "Network Planning and Management for Utilities",
      description: "Our services enable end-to-end system implementation using the Esri UN suite, maximizing out-of-the-box solutions and facilitating cloud deployment for advanced technology use in utility network management."
    },
    {
      postImageSrc: DataImg,
      title: "Geospatial Data Transformation and Integration",
      description: "We focus on data transformation, harmonization, and integration to ensure compatibility and interoperability between different geospatial datasets and formats, enhancing data usability."
    },
  ];

  const popularPostsRowThree = [
    {
      postImageSrc: GeocodingImg,
      title: "Address Geocoding and Routing Services",
      description: "We customize location services to find places, geocode addresses, generate routes, and perform mapping operations. This supports complex tasks such as visualization, data enrichment, and spatial analysis."
    },
    {
      postImageSrc: FleetImg,
      title: "IoT Fleet Management & Dispatching Solutions",
      description: "Our solutions empower you to manage your fleet with unprecedented efficiency. Seamlessly track and dispatch vehicles, transforming fleet operations into a model of efficiency and intelligence."
    },
    {
      postImageSrc: LocationaiImg,
      title: "Location Intelligence Analytics (LIA)",
      description: "Our GIS experts enable your organization to identify patterns, trends, and relationships in geographic data. This fosters a deeper understanding of customer behavior, market demographics, and operational efficiency through the integration of LIA with GIS."
    }
  ];

  return (
    <Container id="our-services">
      <ContentWithPaddingXl>
        <Row>
          <PopularPostsContainer>
            <Heading>Our Professional Services</Heading>
            <PostsContainer>
              {popularPostsRowOne.map((post, index) => (
                <Post key={index} href={post.url} className="group" initial="rest" whileHover="hover" animate="rest">
                  <Image
                    transition={{ duration: 0.3 }}
                    variants={postBackgroundSizeAnimation}
                    imageSrc={post.postImageSrc}
                  />
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                </Post>
              ))}
            </PostsContainer>
          </PopularPostsContainer>
        </Row>
        <Row>
          <PopularPostsContainer>
            <PostsContainer>
              {popularPostsRowTwo.map((post, index) => (
                <Post key={index} href={post.url} className="group" initial="rest" whileHover="hover" animate="rest">
                  <Image
                    transition={{ duration: 0.3 }}
                    variants={postBackgroundSizeAnimation}
                    imageSrc={post.postImageSrc}
                  />
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                </Post>
              ))}
            </PostsContainer>
          </PopularPostsContainer>
        </Row>
        <Row>
          <PopularPostsContainer>
            <PostsContainer>
              {popularPostsRowThree.map((post, index) => (
                <Post key={index} href={post.url} className="group" initial="rest" whileHover="hover" animate="rest">
                  <Image
                    transition={{ duration: 0.3 }}
                    variants={postBackgroundSizeAnimation}
                    imageSrc={post.postImageSrc}
                  />
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                </Post>
              ))}
            </PostsContainer>
          </PopularPostsContainer>
        </Row>
      </ContentWithPaddingXl >
    </Container >
  );
};
