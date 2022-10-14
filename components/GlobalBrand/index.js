import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
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
  color: white;
  text-align: right;
`;
const Container = styled.div`
  position: relative;
`;
const ContainerTxt = styled.div`
  position: relative;

  margin-left: 30%;
`;
const Img = styled.img`
  position: absolute;
  top: 0px !important;
  left: 100px !important;
`;
const Imgs = styled.img`
  position: absolute;
  top: 0px !important;
  right: 100px !important;
`;
const GlobalBrand = () => {
  const ag = useRef();

  return (
    <div ref={ag}>
      <Container className="pSection">
        <ContainerTxt className="pContent" style={{marginLeft:0, marginRight:"30%"}}>
          <Description style={{ fontSize: "56pt", textAlign: "left" }}>
            We are a global brand and design agency and together we challenge
            what is now to create what’s next.
          </Description>
        </ContainerTxt>
        <Imgs
          className="pImage"
          src="/static/global_1.png"
          width="305px"
          height="380px"
        />
      </Container>
      <Container className="pSection">
        <ContainerTxt className="pContent">
          <Description>
            We work with clients
            <br /> worldwide and of all
            <br /> shapes and sizes, so
            <br /> we’re never held back
            <br /> by convention or
            <br /> worried about what
            <br /> everyone else is doing.
          </Description>
        </ContainerTxt>
        <Img
          className="pImage"
          src="/static/global_2.png"
          width="305px"
          height="380px"
        />
      </Container>
    </div>
  );
};

export default GlobalBrand;
