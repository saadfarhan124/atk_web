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
  font-size: 30pt;
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
const Agency = () => {
  const ag = useRef();

  return (
    <div ref={ag}>
      <Container className="pSection">
        <ContainerTxt className="pContent">
          <Title>WHY AGENCY TK?</Title>
          <Description>
            Innovation isn’t just a buzzword for us. We put our money where our
            mouth is, from creating world-first app technology to bringing a
            brand new beverage concept to the market. We push, challenge, and
            change things for the better.
          </Description>
        </ContainerTxt>
        <Img
          className="pImage"
          src="/static/why_agency.png"
          width="305px"
          height="380px"
        />
      </Container>
    </div>
  );
};

export default Agency;
