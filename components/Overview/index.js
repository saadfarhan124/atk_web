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
  }
  @media (max-width: 862px) {
  
  }
  @media (max-width: 635px)  {
    
    padding:0;
   
  }
  
 
  @media (max-width: 650px) {
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
    padding:0;
    padding-top:5rem;
  }
`;
const Container = styled.div`
  position: relative;
`;
const ContainerTxt = styled.div`
  position: relative;

  margin-left: 10%;
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
  
`;

const FlexLeftDiv = styled.div`
  flex: 2;
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

  @media (max-width: 902px) {
    flex: 4;
    font-size: 2rem;
  }
  @media (max-width: 916px) {
    flex: 4;
  }
  @media (max-width: 860px) {
    flex: 4;
  }
  @media (max-width: 460px) {
    flex: 2;
  }
  @media (max-width: 375px) {
    flex: 2;
    padding:0;
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

const SmallText=styled.div`
transform: rotate(-90deg);
                                font-size: 1.75vw;

                                text-transform: uppercase;
`
const Hide=styled.div`
@media (max-width: 479px) {
display:none;
}
`

const Show = styled.div`
 

  @media screen and (min-width: 479px) {
    display: none;
 
  }
`;

const AppTitle = styled.div`
  font-family: "Graphik";
  font-size: 50pt;
  font-weight: 500;
  color: white;
  text-align: right;
  padding:0;
  margin:0;
  padding-top:1rem;
`;
const FlexContApp = styled.div`
  display: flex;
  flex-direction: column;
`;
const FlexRightDivApp = styled.div`
flex:1;
padding-top:2rem
`;
const RightTextApp = styled.div`
`;
const FlexCenterApp=styled.div`
flex:1;
`;
const AppContainer = styled.div`
  position: relative;
`;
const AppContainerTxt = styled.div`
  position: relative;


`;

const AppDescription=styled.div`

  font-family: "Graphik";
  font-size: 18pt;
  font-weight: 400;
  color: white;
  padding-top: 2rem;
  text-align: right;


`
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
  const ag2= useRef();

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


    let ctx2 = gsap.context(() => {
      let t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".overview__section2",
          start: "+=500 center",
          end: "+3500 center",
          markers: false,
          pin: true,
          scrub: true,
        },
      });
      t2.from(".vertical__text2", {
        opacity: 0,
        duration: 0.1,
        stagger: true,
        y: 300,
      })
        .from(".pContent2", {
          opacity: 0,
          duration: 0.2,
          x: 300,
        })
        .from(".pImage2", {
          opacity: 0,
          duration: 0.5,
          y: -200,
        });
    }, ag2);
    return () => {
      ctx.revert();
      ctx2.revert();
    };
  }, []);

  return (
    <>
    <Hide>
      <div ref={ag}>
        <div className="section overview__section" style={{  }}>
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
                  position: "relative",
                  paddingRight: "10vw",
                }}
              >
                {scroll > 56 && scroll < 71 ? (
                  <RightText>
                   <motion.div
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
                                display:'flex',
                                flexDirection:'row',
                                alignItems:'center',
                              }}
                            >
                              <div style={{paddingRight:'10px'}}>
                              Strategy </div>

                              <div style={{width:'5vw',border:'1px solid white',}}>
                              
                              </div>
                            </motion.div>
                            <motion.div
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
                            </motion.div>

                            <motion.div
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
                            </motion.div>
                  </RightText>
                ) : (
                  <>
                    {scroll > 72 && scroll < 79 ? (
                      <>
                          <RightText>
                  
                            <motion.div
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
                            </motion.div>
                            <motion.div
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
                                display:'flex',
                                flexDirection:'row',
                                alignItems:'center',
                              }}
                            >
                              <div style={{paddingRight:'10px'}}>
                               Creative</div>

                              <div style={{width:'5vw',border:'1px solid white',}}>
                              
                              </div>
                            </motion.div>
                            <motion.div
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
                            </motion.div>
                  </RightText>
                      </>
                    ) : (
                      <>
                        {scroll > 80 && scroll < 87 ? (
                          <>
                           <RightText>
                  
                  <motion.div
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
                  </motion.div>
                 
                  <motion.div
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
                  >Creative
                    
                  </motion.div>

                  <motion.div
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
                      display:'flex',
                      flexDirection:'row',
                      alignItems:'center',
                    }}
                  >
                    <div style={{paddingRight:'10px'}}>
                    campaign</div>

                    <div style={{width:'5vw',border:'1px solid white',}}>
                    
                    </div>
                  </motion.div>
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
      </Hide>









      <Show>
      <div ref={ag2} style={{border:'0px solid white',padding:0,margin:0}}>
        <div className="section overview__section2" >
        <AppTitle>
            Overview <br /> of our <br /> Services
          </AppTitle>
          <FlexContApp >

             <FlexRightDivApp className="sub__sections2">
              <div
                className="vertical__text2"
                style={{
                  flex: 1,
                  position: "relative",
                  paddingRight: "10vw",
                  padding:0,
                  margin:0
                }}
              >
                {scroll > 56 && scroll < 71 ? (
                  <RightTextApp >
                   <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                              style={{
                                transform: "rotate(-90deg)",
                                fontSize: "18pt",
                                textTransform: "uppercase",
                                display:'flex',
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'flex-end'
                              }}
                            >
                              <div style={{paddingRight:'10px'}}>
                              Strategy </div>

                              <div style={{border:'1px solid white',width:'5vw'}}>
                              
                              </div>
                            </motion.div>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                              style={{
                                transform: "rotate(-90deg)",
                                fontSize: "10pt",
                                textTransform: "uppercase",
                                display:'flex',
                                flexDirection:'row',
                                alignItems:'center',
                                border:'0px solid white',
                                justifyContent:'flex-end'
                                
                              }}
                            >
                              Creative
                            </motion.div>

                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                              style={{
                                transform: "rotate(-90deg)",
                                fontSize: "10pt",
                                textTransform: "uppercase",
                                display:'flex',
                                flexDirection:'row',
                                alignItems:'center',
                                border:'0px solid white',
                                justifyContent:'flex-end'
                              }}
                            >
                              campaign
                            </motion.div>
                  </RightTextApp>
                ) : (
                  <>
                    {scroll > 72 && scroll < 79 ? (
                      <>
                          <RightTextApp>
                  
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                              style={{
                                transform: "rotate(-90deg)",
                                fontSize: "10pt",
                                textTransform: "uppercase",
                                display:'flex',
                                flexDirection:'row',
                                alignItems:'center',
                                border:'0px solid white',
                                justifyContent:'flex-end'
                              }}
                            >
                              Strategy
                            </motion.div>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                              style={{
                                transform: "rotate(-90deg)",
                                fontSize: "18pt",
                                textTransform: "uppercase",
                                display:'flex',
                                flexDirection:'row',
                                alignItems:'center',
                                border:'0px solid white',
                                justifyContent:'flex-end'
                              }}
                            >
                              <div style={{border:'0px solid white',paddingRight:'10px'}}>
                               Creative</div>

                              <div style={{border:'1px solid white',width:'5vw'}}>
                              
                              </div>
                            </motion.div>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                              style={{
                                transform: "rotate(-90deg)",
                                fontSize: "10pt",
                                textTransform: "uppercase",
                                display:'flex',
                                flexDirection:'row',
                                alignItems:'center',
                                border:'0px solid white',
                                justifyContent:'flex-end'
                              }}
                            >
                              campaign
                            </motion.div>
                  </RightTextApp>
                      </>
                    ) : (
                      <>
                        {scroll > 80 && scroll < 87 ? (
                          <>
                           <RightTextApp>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    style={{
                      transform: "rotate(-90deg)",
                      fontSize: "10pt",
                      textTransform: "uppercase",
                      display:'flex',
                      flexDirection:'row',
                      alignItems:'center',
                      border:'0px solid white',
                      justifyContent:'flex-end'
                    }}
                  >
                    Strategy
                  </motion.div>
                 
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    style={{
                      transform: "rotate(-90deg)",
                      fontSize: "10pt",
                                textTransform: "uppercase",
                                display:'flex',
                                flexDirection:'row',
                                alignItems:'center',
                                border:'0px solid white',
                                justifyContent:'flex-end'
                    }}
                  >Creative
                    
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    style={{
                      transform: "rotate(-90deg)",
                                fontSize: "18pt",
                                textTransform: "uppercase",
                                display:'flex',
                                flexDirection:'row',
                                alignItems:'center',
                                border:'0px solid white',
                                justifyContent:'flex-end'
                    }}
                  >
                    <div style={{border:'0px solid white',paddingRight:'10px'}}>
                    campaign</div>

                    <div style={{border:'1px solid white',width:'5vw'}}>
                    
                    </div>
                  </motion.div>
        </RightTextApp>
                          </>
                        ) : null}
                      </>
                    )}
                  </>
                )}
              </div>
            </FlexRightDivApp>
          <FlexCenterApp>
           
               <AppContainer className="pSection2">
               <AppContainerTxt className="pContent2">
                  {scroll > 56 && scroll < 71 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      duration={2}
                    >
                      <AppDescription>
                        Verbal brand identity - Brand <br />
                        audit - Naming - Positioning - <br />
                        Differentiation - Brand
                        <br />
                        architecture - Tone of voice - <br />
                        Consumer, market, and <br />
                        competitor research - Insights - <br />
                        Fieldwork - Focus groups <br />
                        Testing - Launch plans
                      </AppDescription>
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
                          <AppDescription>
                            Visual brand identity Design <br />
                            Art direction  - 3D work  <br /> Motion graphics -Film<br /> Copywriting -  Differentiation <br />

                            Photography   <br />

                          </AppDescription>
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
                              <AppDescription>
                                The big idea -Launch campaigns
                                <br />
                                Amplification campaigns <br />
                                Channel strategy
                                <br />
                                Implementation ideas  <br />

                              </AppDescription>
                            </motion.div>
                          ) : null}
                        </>
                      )}
                    </>
                  )}
                </AppContainerTxt>
               
              </AppContainer> 
            </FlexCenterApp>


            
          </FlexContApp>
          </div>
          </div>
      </Show>
    </>
  );
};

export default Overview;
