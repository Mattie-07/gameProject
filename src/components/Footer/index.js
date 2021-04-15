import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLinksWrapper, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterStyle'
import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                    <FooterLink to="/signin">How it works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Careers</FooterLink>
                                    <FooterLink to="/signin">Investors</FooterLink>
                                    <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                    <FooterLink to="/signin">Contact</FooterLink>
                                    <FooterLink to="/signin">Support</FooterLink>
                                    <FooterLink to="/signin">Destination</FooterLink>
                                    <FooterLink to="/signin">Sponsorships</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Videos</FooterLinkTitle>
                                    <FooterLink to="/signin">Submit your own</FooterLink>
                                    <FooterLink to="/signin">Influencers</FooterLink>
                                    <FooterLink to="/signin">Careers</FooterLink>
                                    <FooterLink to="/signin">Investors</FooterLink>
                                    <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                    <FooterLink to="/signin">Facebook</FooterLink>
                                    <FooterLink to="/signin">Instagram</FooterLink>
                                    <FooterLink to="/signin">YouTube</FooterLink>
                                    <FooterLink to="/signin">Twitter</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'>
                                Matthew
                            </SocialLogo>
                            <WebsiteRights>Matthew &copy;{new Date().getFullYear()} All ights reserved </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='/' target='_blank' aria-label="Facebook"><FaFacebook/></SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label="Twitter"><FaTwitter /></SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label="Youtube"><FaYoutube/></SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label="LinkedIn"><FaLinkedin/></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        
        </>
    )
}

export default Footer
