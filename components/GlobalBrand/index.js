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
  margin-right: 40%;
  margin-bottom:45%;
  margin-left:40%;
  @media screen and (max-width: 440px) {
    margin-left:60%;
  }
`;
const DescApp = styled.p`
  font-family: "Graphik";
  font-size: 30pt;
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


const AppDescription = styled.p`
  font-family: "Graphik";
  font-size: 30pt;
  font-weight: 400;
  text-align: right;
  margin-bottom:80%;
  margin-top:5rem;

`;

const ImgsParallaxAppTwo = styled(Parallax)`
  position: absolute;
  border:0px solid red;
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
  padding:2rem;


`;

const GlobalBrand = () => {
<<<<<<< HEAD
  const ag = useRef();
  const ag2 = useRef();
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
            <DescApp style={{border:'0px solid red',width:'400px '}}>
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
      
      <AppContainerTwo className="pSection" style={{border:'0px solid white'}}>
        <ContainerTxt className="pContent" style={{border:'0px solid white',marginRight:'30%'}}>
          <Parallax speed={-10}>
            <AppDescription style={{width:'400px'}}>
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
        <ImgsParallaxAppTwo speed={10} style={{border:'0px solid orange'}}>
          <img
            // className="pImage"
            src="/static/global_2.png"
            width="500px"
            height="400px"
            style={{paddingRight:'10%',paddingLeft:'2%'}}
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
=======
  return (
    <div>
      <Container>
        <ContainerTxt style={{ marginLeft: "5%", marginRight: "20%" }}>
>>>>>>> 3db4b019487f59a6e479c4e56f377e7ddcea19af
          <Parallax speed={10}>
            <Desc>
            sad  We are a global brand and design agency and together we challenge
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
          <Img src="/static/global_2.png" />
        </ImgParallax>
      </Container>
    </div>
    </Hide>


    </>
  );
};

export default GlobalBrand;
