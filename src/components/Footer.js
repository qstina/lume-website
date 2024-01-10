import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import "./Footer.css";

const Footer = () => {
  // Function to open a link in a new tab
  const openLinkNewTab = (url) => {
    window.open(url, '_blank');
  };
    return (
        <Box>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>Explore</Heading>
                        <FooterLink href="#">
                            About Us
                        </FooterLink>
                        <FooterLink href="#">
                            Services
                        </FooterLink>
                        <FooterLink href="#">
                            Shop
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            Malaysia
                        </FooterLink>
                        <FooterLink href="#">
                            Indonesia
                        </FooterLink>
                        <FooterLink href="#">
                            Vietnam
                        </FooterLink>
                        <FooterLink href="#">
                            Mumbai
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        
                        <div className="social-icons">
                            <FaInstagram onClick={() => openLinkNewTab('https://www.instagram.com/your_profile')} className="icon" />
                            <FaWhatsapp onClick={() => openLinkNewTab('https://api.whatsapp.com/send?phone=1234567890')} className="icon" />
                            <FaEnvelope onClick={() => openLinkNewTab('mailto:info@example.com')} className="icon" />
                        </div>
                    </Column>
                </Row>
                <Row>
                        <div className="copyright">
                            <p>&copy; 2024 Lume Site. All Rights Reserved.</p>
                        </div>
                </Row>
            </FooterContainer>
        </Box>
    );
};

export default Footer;
