import React from "react";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
const Title = styled.p`
  font-family: "Graphik";
  font-size: 6vw;
  font-weight: 700;
  color: white;
  text-align: right;
  padding-bottom: 5rem;
  @media screen and (max-width: 400px) {
    padding-bottom: 3rem;
  }
`;
const Description = styled.p`
  font-family: "Graphik";
  font-size: 2.5vw;
  font-weight: 400;
  color: white;
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 10rem;
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
  padding-left: 25%;
  padding-right: 10%;
`;
const ImgParallax = styled(Parallax)`
  position: absolute;
  top: 150px !important;
  left: 8% !important;
`;
const Img = styled.img`
  width: 425px;
  height: 520px;
  @media screen and (max-width: 1029px) {
    width: 325px;
    height: 420px;
  }
  @media screen and (max-width: 748px) {
    width: 225px;
    height: 320px;
  }
  @media screen and (max-width: 505px) {
    width: 145px;
    height: 220px;
  }
`;
const Agency = () => {
  return (
    <div>
      <Container>
        <ContainerTxt>
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
          <Img loading="lazy" src="/static/why_agency.png" />
        </ImgParallax>
      </Container>
    </div>
  );
};

export default Agency;
