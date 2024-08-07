import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

import { GoogleReCaptcha } from "react-google-recaptcha-v3";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


// Email JS
const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID; // "service_av5s3xr";
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID; // "template_es5hc2d";
const USER_ID = process.env.REACT_APP_EMAIL_USER_ID; // "2PwYtApUErMB0qF-0";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const Row = tw.div`flex-row border-2 w-full max-w-md mx-auto md:max-w-none md:mx-0 `;
const ImageColumn = tw(Column)`md:w-4/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-8/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`w-full lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`w-full mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`

const Input = tw.input`border-2 px-5 py-3 mt-4 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = tw.textarea`border-2 px-5 py-3 mt-4 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500 h-24 sm:h-full resize-none`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default ({
  subheading = "Contact Us",
  heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr/> with us.</>,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  submitButtonText = "Contact us",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const [ token, setToken ] = useState();

  const handleVerify = token => {
    setToken(token);
  }

  const onSubmit = e => {
    e.preventDefault()

    if(!token) return;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Sent Successfully"
        })
      }, (error) => {
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });

    e.target.reset()
  }

  return (
    <Container id="contact-us">
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form action={formAction} onSubmit={onSubmit}>
              <Input type="email" name="email" placeholder="Your Email Address" required />
              <Input type="text" name="subject" placeholder="Subject" required />
              <Textarea name="message" placeholder="Your Message Here" required />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
              <GoogleReCaptcha onVerify={handleVerify} />
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
