import React from "react";
import styled from "styled-components";
const FooterContainer = styled.div`
display: flex;
flex-direction:column;
background-color: black;
justify-content: center;
align-items: center;
padding: 2rem;
`;
const FooterText=styled.div`

width:100%;
font-size: 63pt;
font-weight: bolder;
color: white;
text-align:center;
font-family: "Graphik"
`;

const Footer = () => {
  console.log(":asd")
  return (
    <FooterContainer>
      <FooterText >
      Get to know us better
      </FooterText>
      <FooterText >
      gobeyond@agencytk.com
      </FooterText>
    </FooterContainer>
   
  );
};

export default Footer;
