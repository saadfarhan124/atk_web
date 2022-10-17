import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
const Description = styled.p`
  font-family: "Graphik";
  font-size: 30pt;
  font-weight: 400;
  color: white;
  text-align: right;
`;
const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerTxt = styled.div`
  margin-left: 30%;
`;
const ImgParallax = styled(Parallax)`
  position: absolute;
  top: 150px !important;
  left: 100px !important;
`;
const Img = styled.img``;
const Agency = () => {
  return (
    <div>
      <Container className="pSection">
        <ContainerTxt className="pContent">
          <Parallax speed={10}>
            <Title>WHY AGENCY TK?</Title>
            <Description>
              Innovation isn’t just a buzzword for us. We put our money where
              our mouth is, from creating world-first app technology to bringing
              a brand new beverage concept to the market. We push, challenge,
              and change things for the better.
            </Description>
          </Parallax>
        </ContainerTxt>
        <ImgParallax speed={-10}>
          <Img
            className="pImage"
            src="/static/why_agency.png"
            width="305px"
            height="380px"
          />
        </ImgParallax>
      </Container>
    </div>
  );
};

export default Agency;
