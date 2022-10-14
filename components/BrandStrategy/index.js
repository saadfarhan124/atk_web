import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
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
  width: 30%;
  position: absolute;
  right: 100px;
  top:250px
`;
const Container = styled.div`
  position: relative;
`;
const ContainerTxt = styled.div`
  position: relative;
`;
const Imgs = styled.img`
  position: absolute;
  top: 50px !important;
  right: 100px !important;
`;
const BrandStrategy = () => {
  const ag = useRef();

  return (
    <div ref={ag}>
      <Container className="pSection">
        <ContainerTxt
          className="pContent"
        >
          <Title>
            Brand
            <br /> Strategy
            <br /> Process
          </Title>
        </ContainerTxt>

        <Imgs
          className="pImage"
          src="/static/brand.png"
          width="457px"
          height="290px"
        />

        <Description>
          Choose an agency where you can work better, smarter, and stronger with
          a 7-step tailored journey that works for you.
        </Description>
       
      </Container>
    </div>
  );
};

export default BrandStrategy;
