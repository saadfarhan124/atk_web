import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import ParallaxItem from "../Paralex";
const Title = styled.p`
  font-family: "Graphik";
  font-size: 87pt;
  font-weight: 700;
  color: white;
  text-align: left;
  padding-bottom: 5rem;
`;
const Description = styled.p`
  font-family: "Graphik";
  font-size: 19pt;
  font-weight: 400;
  color: white;
  text-align: right;
  position: absolute;
  right: 0px;
  top: 150px;
`;
const Container = styled.div`
  position: relative;
`;
const ImgContainer = styled.div`
  position: absolute;
  top: 50px !important;
  right: 100px !important;
`;
const ContainerTxt = styled.div`
  position: relative;
`;
const Imgs = styled.img``;
const BrandStrategy = () => {
  const ag = useRef();

  return (
    <div ref={ag}>
      <Container className="pSection">
        <ContainerTxt className="pContent">
          <Parallax speed={-10}>
            <Title>
              Brand
              <br /> Strategy
              <br /> Process
            </Title>
          </Parallax>
        </ContainerTxt>
        <ImgContainer>
          <Parallax speed={10}>
            <Imgs
              className="pImage"
              src="/static/brand.png"
              width="457px"
              height="290px"
            />

            <Description>
              Choose an agency where you can work better, smarter, and stronger
              with a 7-step tailored journey that works for you.
            </Description>
          </Parallax>
        </ImgContainer>
      </Container>
    </div>
  );
};

export default BrandStrategy;
