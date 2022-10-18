import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, {
  useRef,
  useLayoutEffect,
  useEffect,
  Fragment,
  useState,
} from "react";
import styled from "styled-components";
import ScrollIndicator from "./ScrollIndicator";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const Title = styled.p`
  font-family: "Graphik";
  font-size: 47pt;
  font-weight: 500;
  color: white;
  text-align: right;
`;
const Description = styled.p`
  width: 40vw;
  font-family: "Graphik";
  font-size: 25pt;
  font-weight: 400;
  color: white;
  padding-top: 3rem;
  text-align: right;
  padding-right: 10rem;
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
`;
const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background: #ccc;
`;
const ProgressBar = styled.div`
  height: 8px;
  background: ${(props) => props.color || "#ccc"};
  width: ${(props) => props.width || 0}%;
`;
const ProgressText = styled.span`
  font-size: 1rem;
`;

const Containerr = styled.div`
  background-color: black;
  height: 30px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
`;
const ProgressBarr = styled.div`
  height: 30px;
  background-color: green;
`;
const ScrollContent = styled.div`
  overflowy: scroll;
  height: 2000px;
`;
const Heading = styled.h1`
  text-align: center;
  font-size: 3rem;
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
  // window.addEventListener("scroll", onScroll);
  // window.addEventListener("scroll", onScroll);
  const ag = useRef();
  const ag2 = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    console.log("gsap", ScrollTrigger);
    let ctx = gsap.context(() => {
      // all our animations can use selector text like ".box"
      // and it's properly scoped to our component
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
      {/* <ScrollIndicator /> */}
      <div ref={ag}>
        <div className="section overview__section">
          <Title>
            Overview <br /> of our <br /> Services
          </Title>
          <div
            className=""
            style={{
              display: "flex",
              flexDirection: "row",
              height: "100vh",
              paddingLeft: "5rem",
              paddingRight: "5rem",
            }}
          >
            <div
              className="vertical__text"
              style={{
                flex: 2,
                border: "0px solid green",
                position: "relative",
              }}
            >
             {scroll > 63 && scroll < 72 ? (
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
                  <p
                    style={{
                      transform: "rotate(-90deg)",
                      fontSize: "50pt",
                    }}
                  >
                    Strategy 1
                  </p>
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
                      <p
                        style={{
                          transform: "rotate(-90deg)",
                          fontSize: "50pt",
                        }}
                      >
                        Strategy 2
                      </p>
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
                          <p
                            style={{
                              transform: "rotate(-90deg)",
                              fontSize: "50pt",
                            }}
                          >
                            Strategy 3
                          </p>
                        </motion.p>
                      ) : null}
                    </>
                  )}
                </>
              )}
            </div>
            <div style={{ flex: 3, border: "0px solid yellow" }}>
              <Container className="pSection">
                <ContainerTxt className="pContent">
                  {scroll > 63 && scroll < 72 ? (
                     <motion.div initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     duration={2}
                     >
                    <Description
                   
                    
                    >
                      1 Verbal brand identity - Brand <br />
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
                        <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        duration={2}
                        >
                       <Description
                      
                       
                       >
                        2 Verbal brand identity - Brand <br />
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
                          {scroll > 80 && scroll < 87 ? (
                            <motion.div initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            duration={2}
                            >
                           <Description
                          
                           
                           >
                             3 Verbal brand identity - Brand <br />
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
                          ) : null}
                        </>
                      )}
                    </>
                  )}
                </ContainerTxt>
                <Img
                  // className="pImage"
                  src="/static/overview.png"
                  width="305px"
                  height="380px"
                />
              </Container>
            </div>
            <div
              className="sub__sections"
              style={{
                flex: 2,
                border: "0px solid blue",
                textAlign: "right",
                paddingRight: "2rem",
              }}
            >
              <div
                className="vertical__text"
                style={{
                  flex: 2,
                  border: "0px solid green",
                  position: "relative",
                }}
              >
              {scroll > 63 && scroll < 72 ? (
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    style={{ transform: "rotate(-90deg)", fontSize: "20pt" }}
                  >
                    Strategy
                  </motion.p>
                ) : (
                  <>
                    {scroll > 72 && scroll < 79 ? (
                      <>
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
                            fontSize: "20pt",
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
                            paddingRight: 20,
                            fontSize: "20pt",
                          }}
                        >
                          Creative
                        </motion.p>
                      </>
                    ) : (
                      <>
                        {scroll > 80 && scroll < 87 ? (
                          <>
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
                                fontSize: "20pt",
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
                                fontSize: "20pt",
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
                                paddingRight: 20,
                                fontSize: "20pt",
                              }}
                            >
                              campaign
                            </motion.p>
                          </>
                        ) : null}
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
