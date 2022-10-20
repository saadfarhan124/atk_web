import React, { useRef, useLayoutEffect ,useState,useEffect} from "react";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
const Title = styled.p`
  font-family: "Graphik";
  font-size: 6vw;
  font-weight: 700;
  color: white;
  text-align: right;
  padding-bottom: 5rem;
  
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
const AppDescription = styled.p`
  font-family: "Graphik";
  font-size: 18pt;
  font-weight: 400;
  text-align: right;
padding-bottom:170%;
  margin-top:5rem;
  margin-left:3rem;
 
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
  // right: 100px !important;

`;
const AppTitle = styled.p`
  font-family: "Graphik";
  font-size: 47pt;
  font-weight: 700;
  color: white;
  text-align: right;


`;
const Agency = () => {
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
        <Show >
    <div ref={ag2} >
  
      <AppContainerTwo className="pSection" style={{border:'0px solid white'}}>
        <ContainerTxt className="pContent" style={{border:'0px solid white',marginRight:'30%'}}>
          <Parallax speed={-10}>
          <AppTitle>WHY<br/> AGENCY<br/> TK?</AppTitle>
          <div style={{height:'0vh'}}></div>
            <AppDescription style={{width:widths-90}}>
            Innovation isn’t just a buzzword for us. We put our money where
              our mouth is, from creating world-first app technology to bringing
              a brand new beverage concept to the market. We push, challenge,
              and change things for the better.
            </AppDescription>
          </Parallax>
        </ContainerTxt>
        <ImgsParallaxAppTwo speed={10} style={{border:'0px solid orange'}}>
          <img
            // className="pImage"
            src="/static/why_agency.png"
            width={widths-36}
            height="400px"
            style={{paddingRight:'30%',paddingLeft:'2%'}}
          />
        </ImgsParallaxAppTwo>
      </AppContainerTwo>
    </div>

    </Show>

      <Hide>
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
      </Hide>
    </>
  );
};

export default Agency;
