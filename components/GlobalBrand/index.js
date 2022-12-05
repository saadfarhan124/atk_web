import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
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
  font-size: 50pt;
  font-weight: 400;
  text-align: left;
  @media screen and (max-width: 1160px) {
    font-size: 45pt;

  }
  @media screen and (max-width: 1029px) {
    font-size: 40pt;
  }
  @media screen and (max-width: 768px) {
    font-size:33pt;
  }
  @media screen and (max-width: 505px) {
    font-size: 25pt;
    
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

const Hide = styled.div`
@media screen and (max-width: 480px) {
  display:none;
}
`
const Show = styled.div`
margin-top:10rem;
@media screen and (min-width: 480px) {
  display:none;
}
`
const ImgsParallaxApp = styled(Parallax)`
  position: absolute;
  
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
  font-size: 22pt;
  font-weight: 400;
  text-align: left;
  padding:2rem;
  margin-left: 10%;
  margin-right:15%;
 
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
  padding-right:5rem;
  @media screen and (max-width: 483px) {
    margin-top:100%;
    font-size: 20pt;
    width:400px;
    width:width -190
  }
  

`;
const WebDes = styled.div`
  font-family: "Graphik";
  font-size: 36pt;
  letter-spacing: 0px;
  
    text-align: right;
  // margin-bottom:150%;
  margin-top:15rem;
  padding-right:8%;  
  @media screen and (max-width: 768px) {
    padding-right:15%
    font-size:27pt
   }

   @media screen and (max-width: 572px) {
    // padding-right:%
    font-size:23pt
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
  margin-top: 15rem;
  // padding:2rem;


`;
const ContainerTxt = styled.div`
  position: relative;

  margin-left: 5%;
  margin-right:15%;
  /* padding-left: 25%;
  padding-right: 10%; */
`;
const ContainerTxtTT = styled.div`
  position: relative;

  margin-left: 5%;
  margin-right:0%;
width:100%;
padding-right:5%
@media screen and (max-width: 768px) {
}
`;
const GlobalBrand = () => {
  const ag = useRef();
  const ag2 = useRef();
  const [widths, setWidth] = useState()

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  if (typeof window !== "undefined") {
    console.log("ss")
    console.log(window?.innerWidth)

  } else {
    console.log("sds")
  }

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  console.log(widths)

  return (
    <>

    

      {/* Web */}

      <Hide>
        <div ref={ag}>
          <Container className="pSection" >
            <ContainerTxt
              className="pContent"
             
            >
              <Parallax speed={13}>
                <Desc style={{marginBottom:'5rem'}}>
                  We are a global brand and design agency and together we challenge
                  what is now to create what’s next.
                </Desc>
              </Parallax>
            </ContainerTxt>
            <ImgsParallax speed={-22} >
              <img
                className="pImage"
                src="/static/global_1.png"
                width="305px"
                height="380px"
                style={{marginTop:140}}
              />
            </ImgsParallax>
          </Container>
          <Container className="pSection" style={{marginTop:"20rem"}}>
            <ContainerTxt className="pContent" style={{ marginRight: '0%' }}>
              <Parallax speed={-25} >
                <WebDes style={{border:'0px solid red'}}>
                  We work with clients
                  <br /> worldwide and of all
                  <br /> shapes and sizes, so
                  <br /> we’re never held back
                  <br /> by convention or
                  <br /> worried about what
                  <br /> everyone else is doing.
                </WebDes>
              </Parallax>
            </ContainerTxt>
            <ImgParallax speed={18}>
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


      {/* App */}
      <Show>
        <div ref={ag2} >
          <AppContainer className="pSection" >
            <ContainerTxtApp
              className="pContent"
              style={{ border: '0px solid white' }}
            >
              <Parallax speed={10} >
                <DescApp style={{ border: '0px solid red', width: widths *0.9}}>
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

          <AppContainerTwo className="pSection" style={{ border: '0px solid red' }}>
            {/* <ContainerTxt className="pContent" style={{ border: '1px solid white', width: widths - 68  }}> */}
              <Parallax speed={-10} className="pContent">
                <AppDescription style={{border:'0px solid red' }}>
                  We work with clients
                  <br /> worldwide and of all
                  <br /> shapes and sizes, so
                  <br /> we’re never held back
                  <br /> by convention or
                  <br /> worried about what
                  <br /> everyone else is doing.
                </AppDescription>
              </Parallax>
            {/* </ContainerTxt> */}
            <ImgsParallaxAppTwo speed={10} >
              <img
                // className="pImage"
                src="/static/global_2.png"
                width={widths - 40}
                height="400px"
                style={{ paddingRight: '0%', paddingLeft: '0%' }}
              />
            </ImgsParallaxAppTwo>
          </AppContainerTwo>
        </div>

      </Show>












    </>
  );
};

export default GlobalBrand;
