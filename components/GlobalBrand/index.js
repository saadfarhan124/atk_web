import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useLayoutEffect ,useState,useEffect} from "react";
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

const Desc = styled.p`
  font-family: "Graphik";
  font-size: 56pt;
  font-weight: 400;
  text-align: left;
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

const Description = styled.p`
  font-family: "Graphik";
  font-size: 42.8pt;
  font-weight: 400;
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
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
  position: relative;

  margin-left: 40%;
  
  /* padding-left: 25%;
  padding-right: 10%; */
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
const ImgsParallaxApp = styled(Parallax)`
  position: absolute;
  border:0px solid red;
  
  // top: 0px !important;
  // right: 100px !important;
`;



const ContainerTxtApp = styled.div`
  position: relative;
 
margin-top:5%;
  margin-right: 60%;
  margin-bottom:60%;
  margin-left:50%;
  @media screen and (max-width: 440px) {
    margin-left:50%;
  }
`;
const DescApp = styled.p`
  font-family: "Graphik";
  font-size: 18pt;
  font-weight: 400;
  text-align: left;
  
 
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


const AppDescription = styled.div`
  font-family: "Graphik";
  font-size: 36pt;
    font-weight: 400;
  text-align: right;
  margin-bottom:150%;
  margin-top:5rem;
  padding-right:1rem;
  @media screen and (max-width: 423px) {
    font-size: 16pt;
  }

`;

const ImgsParallaxAppTwo = styled(Parallax)`
  position: absolute;
  margin-bottom:35%;
 
  // top: 0px !important;
  // right: 100px !important;

`;


const AppContainerTwo = styled.div`
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  // padding:2rem;


`;

const GlobalBrand = () => {
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
    {/* App */}
    <Show>
    <div ref={ag2} >
      <AppContainer className="pSection" >
        <ContainerTxtApp
          className="pContent"
          style={{ border:'0px solid white'}}
        >
          <Parallax speed={10} >
            <DescApp style={{border:'0px solid red',width:widths-68}}>
              We are a global brand and design agency and together we challenge
              what is now to create what’s next.
            </DescApp>
          </Parallax>
        </ContainerTxtApp>
       
        <ImgsParallaxApp speed={-10}>
          <img
            // className="pImage"
            src="/static/global_1.png"
            width="305px"
            height="380px"
          />
        </ImgsParallaxApp>
        
      </AppContainer>
      
     <AppContainerTwo className="pSection" style={{border:'0px solid red'}}>
        <ContainerTxt className="pContent" style={{border:'0px solid white',width:widths}}>
          <Parallax speed={-10} >
            <AppDescription style={{border:'0px solid white',width:widths-190}}>
              We work with clients
              <br /> worldwide and of all
              <br /> shapes and sizes, so
              <br /> we’re never held back
              <br /> by convention or
              <br /> worried about what
              <br /> everyone else is doing.
            </AppDescription>
          </Parallax>
        </ContainerTxt>
        <ImgsParallaxAppTwo speed={10} >
          <img
            // className="pImage"
            src="/static/global_2.png"
            width={widths-10}
            height="400px"
            style={{paddingRight:'10%',paddingLeft:'0%'}}
          />
        </ImgsParallaxAppTwo>
      </AppContainerTwo>
    </div>

    </Show>













        {/* Web */}

    <Hide>    
      <div ref={ag}>
      <Container className="pSection">
        <ContainerTxt
          className="pContent"
          style={{ marginLeft: "5%", marginRight: "30%" }}
        >
          <Parallax speed={10}>
            <Desc>
            We are a global brand and design agency and together we challenge
              what is now to create what’s next.
            </Desc>
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
        <ContainerTxt className="pContent" style={{marginRight:'0%'}}>
          <Parallax speed={-10}>
            <AppDescription>
              We work with clients
              <br /> worldwide and of all
              <br /> shapes and sizes, so
              <br /> we’re never held back
              <br /> by convention or
              <br /> worried about what
              <br /> everyone else is doing.
            </AppDescription>
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
    </Hide>


    </>
  );
};

export default GlobalBrand;
