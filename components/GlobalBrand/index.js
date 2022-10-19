import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import ParallaxItem from "../Paralex";
const Title = styled.p`
  font-family: "Graphik";
  font-size: 57pt;
  font-weight: 700;
  color: white;
  text-align: right;
  padding-bottom: 5rem;
`;

const Desc = styled.p`
  font-family: "Graphik";
  font-size: 56pt;
  font-weight: 400;
  text-align: left;
  @media screen and (max-width: 1029px) {
    font-size: 3vw;
  }
  @media screen and (max-width: 748px) {
    font-size: 3vw;
  }
  @media screen and (max-width: 505px) {
    font-size: 3vw;
  }
`;

const Description = styled.p`
  font-family: "Graphik";
  font-size: 42.8pt;
  font-weight: 400;
  text-align: right;
  
  @media screen and (max-width: 1029px) {
    font-size: 3vw;
  }
  @media screen and (max-width: 748px) {
    font-size: 3vw;
  }
  @media screen and (max-width: 505px) {
    font-size: 3vw;
  }
`;
const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  @media screen and (max-width: 542px) {
    padding-block: 8rem;
  }
  @media screen and (max-width: 440px) {
    padding-block: 10rem;
  }
  @media screen and (max-width: 400px) {
    padding-block: 12rem;
  }
`;
const ContainerTxt = styled.div`
  position: relative;

  margin-left: 40%;
  
  /* padding-left: 25%;
  padding-right: 10%; */
`;
const ImgsParallax = styled(Parallax)`
  position: absolute;
  top: 150px !important;
  right: 100px !important;
`;
const ImgParallax = styled(Parallax)`
  position: absolute;
  top: 150px !important;
  left: 100px !important;
`;
const GlobalBrand = () => {
  const ag = useRef();

  return (
    <div ref={ag}>
      <Container className="pSection">
        <ContainerTxt
          className="pContent"
          style={{ marginLeft: "5%", marginRight: "30%" }}
        >
          <Parallax speed={10}>
            <Desc>
              We are a global brand and design agency and together we challenge
              what is now to create what’s next.
            </Desc>
          </Parallax>
        </ContainerTxt>
        <ImgsParallax speed={-10}>
          <img
            className="pImage"
            src="/static/global_1.png"
            width="305px"
            height="380px"
          />
        </ImgsParallax>
      </Container>
      <Container className="pSection">
        <ContainerTxt className="pContent" style={{marginRight:'0%'}}>
          <Parallax speed={-10}>
            <Description>
              We work with clients
              <br /> worldwide and of all
              <br /> shapes and sizes, so
              <br /> we’re never held back
              <br /> by convention or
              <br /> worried about what
              <br /> everyone else is doing.
            </Description>
          </Parallax>
        </ContainerTxt>
        <ImgParallax speed={10}>
          <img
            className="pImage"
            src="/static/global_2.png"
            width="305px"
            height="380px"
          />
        </ImgParallax>
      </Container>
    </div>
  );
};

export default GlobalBrand;
