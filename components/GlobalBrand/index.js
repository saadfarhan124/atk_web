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
  font-size: 42.8pt;
  font-weight: 400;
  text-align: right;
`;
const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
const ContainerTxt = styled.div`
  position: relative;

  margin-left: 30%;
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
          style={{ marginLeft: 0, marginRight: "30%" }}
        >
          <Parallax speed={10}>
          <Description style={{ fontSize: "56pt", textAlign: "left" }}>
            We are a global brand and design agency and together we challenge
            what is now to create what’s next.
          </Description>
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
        <ContainerTxt className="pContent">
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
