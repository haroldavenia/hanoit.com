import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import Header, {
    NavLink,
    NavLinks,
    LogoLink,
    NavToggle,
    DesktopNavLinks,
} from "../headers/light.js";

const StyledHeader = styled(motion(Header))`
  ${tw`fixed top-0 left-0 right-0 py-2 w-full flex z-50 transition-transform duration-300 ease-in-out`}
  background-color: ${({ isSticky }) => (isSticky ? "rgba(100, 21, 255, 0.8)" : "transparent")};
  box-shadow: ${({ isSticky }) => (isSticky ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none")};
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`px-4 text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const HeaderContainer = tw.div`w-full max-w-screen-lg mx-auto flex items-center justify-between`;

export default function StickyHeader() {
    const controls = useAnimation();
    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 66) {
            setSticky(true);
            controls.start({ y: 0 });
        } else {
            setSticky(false);
            controls.start({ y: "-100%" });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [controls]);

    const navLinks = [
        <NavLinks key={1}>
            <NavLink href="#our-portfolio">Our Portfolio</NavLink>
            <NavLink href="#our-expertise">Our Expertise</NavLink>
            <NavLink href="#contact-us">Contact Us</NavLink>
        </NavLinks>,
    ];

    return (
        <StyledHeader initial={{ y: "-100%" }} animate={controls} links={navLinks} isSticky={isSticky}>
            <HeaderContainer>
                <Header links={navLinks} />
            </HeaderContainer>
        </StyledHeader>
    );
}
