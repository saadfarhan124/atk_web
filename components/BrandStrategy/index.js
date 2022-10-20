import React from "react";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
const Title = styled.p`
  font-family: "Graphik";
  font-size: 87pt;
  font-weight: 700;
  color: white;
  text-align: left;
  padding-bottom: 5rem;
  @media screen and (max-width: 400px) {
    padding-bottom: 3rem;
  }
  @media screen and (max-width: 1029px) {
    font-size: 67pt;
  }
  @media screen and (max-width: 748px) {
    font-size: 47pt;
  }
  @media screen and (max-width: 505px) {
    font-size: 27pt;
  }
`;
const Description = styled.p`
  font-family: "Graphik";
  font-size: 2vw;
  font-weight: 400;
  color: white;
  text-align: right;
  position: absolute;
  right: 10px;
  width: 50%;
  bottom: -70px;
  @media screen and (max-width: 1029px) {
    font-size: 2vw;
  }
  @media screen and (max-width: 748px) {
    font-size: 2vw;
    bottom: -50px;
  }
  @media screen and (max-width: 505px) {
    font-size: 2vw;
    right: 10px;
  bottom: -40px;
  }
`;
const Container = styled.div`
  position: relative;
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
const ImgContainer = styled.div`
  position: absolute;
  top: -100px !important;
  right: 100px !important;
  @media screen and (max-width: 748px) {
    top: -50px !important;
  right: 50px !important;
  }
  @media screen and (max-width: 505px) {
    top: -10px !important;
  right: 10px !important;
  }
`;
const ContainerTxt = styled.div`
  position: relative;
  margin-left: 5%;
  /* padding-left: 25%;
  padding-right: 10%; */
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
              BRAND
              <br /> STRATEGY
              <br /> PROCESS
            </Title>
          </Parallax>
        </ContainerTxt>
        <ImgContainer>
          <Parallax speed={10}>
            <Imgs src="/static/brand.png" />

            <Description>
              Choose an agency where you can work better, smarter, and stronger
              with a 7-step tailored journey that works for you.
            </Description>
          </Parallax>
        </ImgContainer>
      </Container>
    </div>
    </Hide>
    </>
  );
};

export default BrandStrategy;
