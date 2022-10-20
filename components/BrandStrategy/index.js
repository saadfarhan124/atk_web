import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useLayoutEffect ,useState,useEffect} from "react";
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
  font-size: 19pt;
  font-weight: 400;
  color: white;
  text-align: right;
  position: absolute;
  right: 0px;
  top: 150px;
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
const ImgContainer = styled.div`
  position: absolute;
  top: 50px !important;
  right: 100px !important;
`;
const ContainerTxt = styled.div`
  position: relative;
  margin-left: 3%;
  
`;



const Imgs = styled.img``;
const Hide =styled.div`
@media screen and (max-width: 480px) {
  display:none;
}
`
const Show =styled.div`
@media screen and (min-width: 480px) {
  display:none;
}
`
const ContainerTxtApp = styled.div`
  position: relative;
 
margin-top:5%;
  margin-right: 40%;
  margin-bottom:45%;
  margin-left:40%;
  @media screen and (max-width: 440px) {
    margin-left:60%;
  }
`;
const AppContainer = styled.div`
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding:2rem;

`;
const AppContainerTwo = styled.div`
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  padding:2rem;


`;
const ImgsParallaxApp = styled(Parallax)`
  position: absolute;
  border:0px solid red;
  
  // top: 0px !important;
  // right: 100px !important;
`;
const AppDescription = styled.div`
  font-family: "Graphik";
  font-size: 20pt;
  font-weight: 400;
  text-align: right;
  margin-bottom:130%;
  margin-top:5rem;
  padding-right:1rem;
 

`;
const DescApp = styled.p`
  font-family: "Graphik";
  font-size: 30pt;
  font-weight: 400;
  text-align: left;
 
`;
const ImgsParallaxAppTwo = styled(Parallax)`
  position: absolute;
  border:0px solid red;
  margin-bottom:35%;
  // top: 0px !important;
  // left: 0px !important;


`;
const AppTitle = styled.p`
  font-family: "Graphik";
  font-size: 47pt;
  font-weight: 700;
  color: white;
  text-align: left;


`;

const BrandStrategy = () => {
  const ag = useRef();
  const ag2 = useRef();
  const [widths,setWidth]=useState()

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  if (typeof window !== "undefined") {
    console.log("ss")
    console.log(window?.innerWidth)
  
  }else{
    console.log("sds")
  }
  
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
 
  console.log(widths)
  return (
<>

{/* app */}
<Show>
    <div ref={ag2} >
  
      <AppContainerTwo className="pSection" style={{border:'0px solid white'}}>
        <ContainerTxt className="pContent" style={{border:'0px solid white',marginLeft:'25%'}}>
          <Parallax speed={-10}>
          <AppTitle>  BRAND
              <br /> STRATEGY
              <br /> PROCESS</AppTitle>
          <div style={{height:'0vh'}}></div>
            <AppDescription >
            Choose an agency where you can work better, smarter, and stronger
              with a 7-step tailored journey that works for you.
            </AppDescription>
          </Parallax>
        </ContainerTxt>
        <ImgsParallaxAppTwo speed={10} style={{border:'0px solid orange'}}>
          <img
            // className="pImage"
            src="/static/brand.png"
            width={widths-20}
            height="500px"
            style={{paddingLedt:'0%'}}
          />
        </ImgsParallaxAppTwo>
      </AppContainerTwo>
    </div>

    </Show>

    {/* Web */}
    <Hide>
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
    </Hide>
    </>
  );
};

export default BrandStrategy;
