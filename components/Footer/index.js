import React from "react";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
const FooterContainer = styled(Parallax)`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  @media (max-width: 479px) {
    padding:0px;
  
       
        
      }
`;
const FooterText = styled.div`
  font-size: 5vw;
  font-weight: bolder;
  color: white;
  font-family: "Graphik";
  text-align: center;

  @media (max-width: 479px) {
padding:0px;
font-size:4rem; 
   
    
  }
`;
const FooterEmail = styled.a`
  font-size: 5vw;
  font-weight: bolder;
  color: white;
  font-family: "Graphik";
  text-align: center;
  @media (max-width: 479px) {
    padding:0px;
  
       
        
      }
`;

const Footer = () => {
  return (
    <FooterContainer speed={-5} >
      <FooterText>Get to know us better</FooterText>
      <FooterEmail href="mailto:gobeyond@agencytk.com">
        gobeyond@agencytk.com
      </FooterEmail>
    </FooterContainer>
  );
};

export default Footer;
