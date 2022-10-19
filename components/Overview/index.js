import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useRef, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// https://www.geeksforgeeks.org/how-to-create-scroll-indicator-using-reactjs/
const Title = styled.p`
  font-family: "Graphik";
  font-size: 47pt;
  font-weight: 500;
  color: white;
  text-align: right;
  padding-top: 20px;
`;
const Description = styled.p`
  width: 40vw;
  font-family: "Graphik";
  font-size: 2vw;
  font-weight: 400;
  color: white;
  padding-top: 3rem;
  text-align: right;
  padding-right: 8rem;
  border: 0px solid red;
  @media (max-width: 1236px) {
    margin-right: 2px;
    font-size: 1.5rem;
    padding-right: 7rem;
  }
  @media (max-width: 1026px) {
    margin-right: 2px;
    font-size: 1.5rem;
    padding-right: 4rem;
  }
  @media (max-width: 912px) {
    width: 100%;
    font-size: 1.5rem;
    padding-left: 1rem;
    border: 0px solid red;
  }
  @media (max-width: 862px) {
  
  }
  @media (max-width: 635px)  {
    
    padding:0;
   
  }
  
 
  @media (max-width: 650px) {
  border:0px solid red;
  padding:0;
  padding-top:4rem;
  font-size:1rem;
  padding-right:5rem;
  }
  @media only screen and (max-width: 600px )  {
    padding-right:0;
   }
   @media only screen and (max-width: 530px )  {
    padding-right:0;
   }
   @media only screen and (max-width: 480px )  {
  font-size:0.75rem;
    padding-right:0;
   }
  @media (max-width: 375px) {
    border:0px solid white;
    padding:0;
    padding-top:5rem;
  }
`;
const Container = styled.div`
  position: relative;
  border: 0px solid white;
`;
const ContainerTxt = styled.div`
  position: relative;

  margin-left: 10%;
  border: 0px solid red;
`;
const Img = styled.img`
  position: absolute;
  top: 0px !important;
  left: 2vw !important;
  width:305px;
  height:380px;

  @media (max-width:674px){
    width:250px;
    height:250px
  }
  @media only screen and (max-width: 480px )  {
  
    width:200px;
    height:200px
   }
   @media (max-width: 460px) {
    width:160px;
    height:200px
  }
`;

const FlexCont = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding-left: "5rem";
`;
const RightText = styled.div`
  padding-top: 2rem;
  @media (max-width: 708px) {
    margin-left: 2rem;
  }
`;

const FlexRightDiv = styled.div`
  flex: 2;
  border: 0px solid blue;
  text-align: right;
  padding-right: 2rem;
  @media (max-width: 860px) {
    padding-left: 2rem;
    flex: 1;
  }
  @media (max-width: 1190px) {
    flex: 1;
  }
  
  @media (max-width: 902px) {
    flex: 1;
  }
  @media (max-width: 768px) {
    flex: 1;
  }
  @media (max-width: 375px) {
    flex: 1;
   padding:0
  }
  @media (max-width: 460px) {
    
    border:0px solid white;
   }
`;

const FlexLeftDiv = styled.div`
  flex: 2;
  border: 0px solid green;
  position: relative;
  @media (max-width: 876px) {

    flex: 1;
  }
  @media (max-width: 768px) {
    flex: 1;
    
  }
  @media (max-width: 798px) {
   display:none
  }
`;
const FlexCenter = styled.div`
  flex: 3;
  border: 0px solid yellow;

  @media (max-width: 902px) {
    flex: 4;
    font-size: 2rem;
  }
  @media (max-width: 916px) {
    flex: 4;
 border: 0px solid red;
  }
  @media (max-width: 860px) {
    flex: 4;
  }
  @media (max-width: 460px) {
    flex: 2;
   border:0px solid white;
  }
  @media (max-width: 375px) {
    flex: 2;
    padding:0;
    border:0px solid white;
  }
  
`;




const LeftTextPara = styled.p`
padding-top: 6vw;
transform: rotate(-90deg);
                          font-size: 4vw;
                          text-transform: uppercase;

                          @media (max-width: 1162px) {
                            padding-top: 15vw;
                            font-size: 5vw;
  }
  @media (max-width: 912px) {
                            padding-top: 10vw;
                            font-size: 5vw;
                            padding-right: 10vw;
  }
  @media (max-width: 974px) {
                            padding-top: 10vw;
                            font-size: 5vw;
  }
  @media (max-width: 768px) {
                           padding-top:0vw;
                           font-size: 5vw;
  }

  
`;



const Overview = () => {
  const [scroll, setScroll] = useState(0);
  console.log(scroll);
  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };
  if (typeof window !== "undefined") {
    console.log("You are on the browser");
    console.log(window.addEventListener("scroll", onScroll));
    // ✅ Can use window here
  }

  const ag = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    console.log("gsap", ScrollTrigger);
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".overview__section",
          start: "+=500 center",
          end: "+3500 center",
          markers: false,
          pin: true,
          scrub: true,
        },
      });
      tl.from(".vertical__text", {
        opacity: 0,
        duration: 0.1,
        stagger: true,
        y: 300,
      })
        .from(".pContent", {
          opacity: 0,
          duration: 0.2,
          x: 300,
        })
        .from(".pImage", {
          opacity: 0,
          duration: 0.5,
          y: -200,
        });
    }, ag);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div ref={ag}>
        <div className="section overview__section" style={{ height: "100vh" }}>
          <Title>
            Overview <br /> of our <br /> Services
          </Title>
          <FlexCont>
            <FlexLeftDiv className="vertical__text">
              {scroll > 56 && scroll < 71 ? (
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  style={{ transform: "rotate(-90deg)" }}
                >
                  <LeftTextPara
                  >
                    Strategy
                  </LeftTextPara>
                </motion.p>
              ) : (
                <>
                  {scroll > 72 && scroll < 79 ? (
                    <motion.p
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      style={{ transform: "rotate(-90deg)" }}
                    >
                      <LeftTextPara
                      >
                        Creative
                      </LeftTextPara>
                    </motion.p>
                  ) : (
                    <>
                      {scroll > 80 && scroll < 87 ? (
                        <motion.p
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                          }}
                          style={{ transform: "rotate(-90deg)" }}
                        >
                          <LeftTextPara
                          >
                            campaign
                          </LeftTextPara>
                        </motion.p>
                      ) : null}
                    </>
                  )}
                </>
              )}
            </FlexLeftDiv>
            <FlexCenter>
              <Container className="pSection">
                <ContainerTxt className="pContent">
                  {scroll > 56 && scroll < 71 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      duration={2}
                    >
                      <Description>
                        Verbal brand identity - Brand <br />
                        audit - Naming - Positioning - <br />
                        Differentiation - Brand
                        <br />
                        architecture - Tone of voice - <br />
                        Consumer, market, and <br />
                        competitor research - Insights - <br />
                        Fieldwork - Focus groups <br />
                        Testing - Launch plans
                      </Description>
                    </motion.div>
                  ) : (
                    <>
                      {scroll > 72 && scroll < 79 ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          duration={2}
                        >
                          <Description>
                            Visual brand identity Design <br />
                            Art direction  - 3D work  <br /> Motion graphics -Film<br /> Copywriting -  Differentiation <br />

                            Photography   <br />

                          </Description>
                        </motion.div>
                      ) : (
                        <>
                          {scroll > 80 && scroll < 87 ? (
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              duration={2}
                            >
                              <Description>
                                The big idea -Launch campaigns
                                <br />
                                Amplification campaigns <br />
                                Channel strategy
                                <br />
                                Implementation ideas  <br />

                              </Description>
                            </motion.div>
                          ) : null}
                        </>
                      )}
                    </>
                  )}
                </ContainerTxt>
                <Img
                  // className="pImage"
                  src="/static/overview.png"
                 
                />
              </Container>
            </FlexCenter>
            <FlexRightDiv className="sub__sections">
              <div
                className="vertical__text"
                style={{
                  flex: 2,
                  border: "0px solid green",
                  position: "relative",
                  paddingRight: "10vw",
                }}
              >
                {scroll > 56 && scroll < 71 ? (
                  <RightText>
                   <motion.p
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                              style={{
                                transform: "rotate(-90deg)",
                                fontSize: "1.75vw",
                                textTransform: "uppercase",
                              }}
                            >
                              Strategy ___
                            </motion.p>
                            <motion.p
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                              style={{
                                transform: "rotate(-90deg)",
                                fontSize: "1.75vw",
                                textTransform: "uppercase",
                              }}
                            >
                              Creative
                            </motion.p>

                            <motion.p
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                              style={{
                                transform: "rotate(-90deg)",
                                
                                fontSize: "1.75vw",
                                textTransform: "uppercase",
                              }}
                            >
                              campaign
                            </motion.p>
                  </RightText>
                ) : (
                  <>
                    {scroll > 72 && scroll < 79 ? (
                      <>
                           <RightText>
                         <motion.p
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                              style={{
                                transform: "rotate(-90deg)",
                                fontSize: "1.75vw",
                                textTransform: "uppercase",
                              }}
                            >
                              Strategy 
                            </motion.p>
                            <motion.p
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                              style={{
                                transform: "rotate(-90deg)",
                                fontSize: "1.75vw",
                                textTransform: "uppercase",
                              }}
                            >
                              Creative ___
                            </motion.p>

                            <motion.p
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                              style={{
                                transform: "rotate(-90deg)",
                                
                                fontSize: "1.75vw",
                                textTransform: "uppercase",
                              }}
                            >
                              campaign
                            </motion.p>
                            </RightText>
                      </>
                    ) : (
                      <>
                        {scroll > 80 && scroll < 87 ? (
                          <>
                          <RightText>
                            <motion.p
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                              style={{
                                transform: "rotate(-90deg)",
                                fontSize: "1.75vw",
                                textTransform: "uppercase",
                              }}
                            >
                              Strategy
                            </motion.p>
                            <motion.p
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                              style={{
                                transform: "rotate(-90deg)",
                                fontSize: "1.75vw",
                                textTransform: "uppercase",
                              }}
                            >
                              Creative 
                            </motion.p>

                            <motion.p
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                              style={{
                                transform: "rotate(-90deg)",
                                fontSize: "1.75vw",
                                textTransform: "uppercase",
                              }}
                            >
                              campaign ___
                            </motion.p>
                            </RightText>
                          </>
                        ) : null}
                      </>
                    )}
                  </>
                )}
              </div>
            </FlexRightDiv>
          </FlexCont>
        </div>
      </div>
    </>
  );
};

export default Overview;
