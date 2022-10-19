import React from "react";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

const Desc = styled.p`
  font-family: "Graphik";
  font-size: 5vw;
  font-weight: 400;
  text-align: left;
  @media screen and (max-width: 1029px) {
    font-size: 4vw;
  }
  @media screen and (max-width: 748px) {
    font-size: 4vw;
  }
  @media screen and (max-width: 505px) {
    font-size: 4vw;
  }
`;

const Description = styled.p`
  font-family: "Graphik";
  font-size: 3.5vw;
  font-weight: 400;
  text-align: right;

  @media screen and (max-width: 1029px) {
    font-size: 4vw;
  }
  @media screen and (max-width: 748px) {
    font-size: 4vw;
  }
  @media screen and (max-width: 505px) {
    font-size: 4vw;
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
    padding-block: 3rem;
  }
  @media screen and (max-width: 440px) {
    padding-block: 3rem;
  }
  @media screen and (max-width: 400px) {
    padding-block: 3rem;
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
  right: 150px !important;
  @media screen and (max-width: 677px) {
    right: 50px !important;
  }
  @media screen and (max-width: 550px) {
    right: 10px !important;
  }
`;
const ImgParallax = styled(Parallax)`
  position: absolute;
  top: 150px !important;
  left: 100px !important;
  @media screen and (max-width: 677px) {
    left: 50px !important;
  }
  @media screen and (max-width: 550px) {
    left: 10px !important;
  }
`;
const Imgs = styled.img`
  width: 305px;
  height: 380px;
  @media screen and (max-width: 1029px) {
    width: 205px;
  height: 280px;
  }

  /* @media screen and (max-width: 505px) {
    width: 180px;
    height: 140px;
  } */
`;
const Img = styled.img`
  width: 305px;
  height: 380px;
  @media screen and (max-width: 1029px) {
    width: 205px;
  height: 280px;
  }

  /* @media screen and (max-width: 505px) {
    width: 180px;
    height: 140px;
  } */
`;
const GlobalBrand = () => {
  return (
    <div>
      <Container>
        <ContainerTxt style={{ marginLeft: "5%", marginRight: "20%" }}>
          <Parallax speed={10}>
            <Desc>
              We are a global brand and design agency and together we challenge
              what is now to create what’s next.
            </Desc>
          </Parallax>
        </ContainerTxt>
        <ImgsParallax speed={-10}>
          <Imgs src="/static/global_1.png" width="305px" height="380px" />
        </ImgsParallax>
      </Container>
      <Container>
        <ContainerTxt style={{ marginRight: "0%" }}>
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
          <Img src="/static/global_2.png" />
        </ImgParallax>
      </Container>
    </div>
  );
};

export default GlobalBrand;
