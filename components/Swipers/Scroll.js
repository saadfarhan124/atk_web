import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { image } from "../../public/static/brand_strategy.png";
// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Scroll = () => {
  const mytext = useRef();
  const myimg = useRef();
  const section = useRef();

  useEffect(() => {
    const text1 = mytext.current;
    const image = myimg.current;
    const section1 = section.current;
    gsap.fromTo(
      section1,
      { ease: "easeInOut", y: 30 },

      {
        scrollTrigger: {
          ease: "easeInOut",
          y: 30,
          trigger: section1,
          onSnapComplete: "",
          start: "top 50%",
          end: "bottom 50%",
          markers: false,
          toggleActions: "play stop play stop",
        },
      }
    );
    gsap.fromTo(
      text1,
      { y: "0.5vh" },
      {
        y: "30vh",
        scrollTrigger: {
          trigger: text1,
          start: "top 8%",
          end: "bottom 30%",
          markers: false,
          toggleActions: "play reset play reverse",
          // prpr
        },
      }
    );
    gsap.fromTo(
      image,
      { scale: 1 },
      {
        scale: 1.1,
        scrollTrigger: {
          trigger: image,
          start: "top 15%",
          end: "bottom 30%",
          markers: false,
          toggleActions: "play reset play reverse",

          // prpr
        },
      }
    );
  }, []);

  return (
    <div ref={section}>
      <div className="containerw" ref={section}>
        <div className="text1" ref={mytext}>
          BRAND STRATEGY PROCESS
        </div>
        <Swiper
          ref={myimg}
          direction={"vertical"}
          slidesPerView={"2"}
          freeMode={true}
          scrollbar={true}
          mousewheel={true}
          mousewheelReleaseOnEdges={true}
          modules={[FreeMode, Scrollbar, Mousewheel]}
          className="mySwiper"
        >
          <SwiperSlide className="slides">
            <div className="flex-container">
              <div style={{ flex: 1, border: "0px solid green" }}>
                <div
                  className="title-div"
                  style={{
                    display: "flex",
                    border: "0px solid grey",
                    height: "90%",

                    paddingTop: "50%",
                    paddingLeft: "50%",
                    justifyContent: "center",
                    border: "0px solid red",
                  }}
                >
                  <div className="title">
                    Step<span style={{ paddingRight: "15px" }}></span>1
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: 8,
                  border: "0px solid green",
                  paddingLeft: "1rem",
                  paddingTop: "2rem",
                  textAlign: "left",
                }}
              >
                <div className="right-head">
                  Immerse & <br /> Research_
                </div>

                <div className="right-list">Brand immersion</div>
                <div className="right-list">Brand audit</div>

                <div className="right-list">Market research</div>

                <div className="right-list">Competitor analysis</div>
                <div className="right-list">Audience analysis</div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="slides">
            <div className="flex-container">
              <div style={{ flex: 1, border: "0px solid green" }}>
                <div
                  className="title-div"
                  style={{
                    display: "flex",
                    border: "0px solid grey",
                    height: "100%",

                    paddingTop: "80%",
                    paddingLeft: "50%",
                    justifyContent: "center",
                    border: "0px solid red",
                  }}
                >
                  <div className="title">
                    Step<span style={{ paddingRight: "15px" }}></span>2
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: 8,
                  border: "0px solid green",
                  paddingLeft: "1rem",
                  paddingTop: "2rem",
                  textAlign: "left",
                }}
              >
                <div className="right-head">Fieldwork_</div>

                <div className="right-list">
                  Customer, employee <br /> or partner interviews
                </div>
                <div className="right-list">Questionnaires</div>
                <div className="right-list">Polls</div>
                <div className="right-list">Pop-up agency</div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="slides">
            <div className="flex-container">
              <div style={{ flex: 1, border: "0px solid green" }}>
                <div
                  className="title-div"
                  style={{
                    display: "flex",
                    border: "0px solid grey",
                    height: "80%",

                    paddingTop: "100%",
                    paddingLeft: "50%",
                    justifyContent: "center",
                    border: "0px solid red",
                  }}
                >
                  <div className="title">
                    Step<span style={{ paddingRight: "15px" }}></span>3
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: 8,
                  border: "0px solid green",
                  paddingLeft: "1rem",
                  paddingTop: "2rem",
                  textAlign: "left",
                }}
              >
                <div className="right-head">Workshop_</div>
                <div className="right-list">Collaborative workshop</div>
                <div className="right-list">Q & A</div>
                <div className="right-list">Group exercises</div>
                <div className="right-list">
                  Identification of brand <br />
                  objectives and opportunities{" "}
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="slides" id="slide4">
            <div className="flex-container">
              <div style={{ flex: 1, border: "0px solid green" }}>
                <div
                  className="title-div"
                  style={{
                    display: "flex",
                    border: "0px solid grey",
                    height: "75%",

                    paddingTop: "50%",
                    paddingLeft: "50%",
                    justifyContent: "center",
                    border: "0px solid red",
                  }}
                >
                  <div className="title">
                    Step<span style={{ paddingRight: "15px" }}></span>4
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: 8,
                  border: "0px solid green",
                  paddingLeft: "1rem",
                  paddingTop: "2rem",
                  textAlign: "left",
                }}
              >
                <div className="right-head">Brand Strategy_</div>

                <div className="right-list">Audience personas</div>
                <div className="right-list">
                  Brand positioning & Differentiation
                </div>

                <div className="right-list">Value proposition</div>

                <div className="right-list">Brand purpose</div>
                <div className="right-list">Tone of voice</div>
                <div className="right-list">Values and vision</div>
                <div className="right-list">Archetypes</div>
                <div className="right-list">Messaging</div>
                <div className="right-list">Brand compass</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides" id="slide5">
            <div className="flex-container">
              <div style={{ flex: 1, border: "0px solid green" }}>
                <div
                  className="title-div"
                  style={{
                    display: "flex",
                    border: "0px solid grey",
                    height: "70%",

                    paddingTop: "50%",
                    paddingLeft: "50%",
                    justifyContent: "center",
                    border: "0px solid red",
                  }}
                >
                  <div className="title">
                    Step<span style={{ paddingRight: "15px" }}></span>5
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: 8,
                  border: "0px solid green",
                  paddingLeft: "1rem",
                  paddingTop: "2rem",
                  textAlign: "left",
                }}
              >
                <div className="right-head">Brand Development_</div>
                <div className="right-list">Naming</div>
                <div className="right-list">Logo</div>

                <div className="right-list">Icon</div>

                <div className="right-list">Colour palette</div>
                <div className="right-list">Typography</div>
                <div className="right-list">Graphic language</div>
                <div className="right-list">Imagery style</div>
                <div className="right-list">Brand in action</div>
                <div className="right-list">Guidelines</div>
                <div className="right-list">Brand book </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides">
            <div className="flex-container">
              <div style={{ flex: 1, border: "0px solid green" }}>
                <div
                  className="title-div"
                  style={{
                    display: "flex",
                    border: "0px solid grey",
                    height: "95%",

                    paddingTop: "50%",
                    paddingLeft: "50%",
                    justifyContent: "center",
                    border: "0px solid red",
                  }}
                >
                  <div className="title">
                    Step<span style={{ paddingRight: "15px" }}></span>6
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: 8,
                  border: "0px solid green",
                  paddingLeft: "1rem",
                  paddingTop: "2rem",
                  textAlign: "left",
                }}
              >
                <div className="right-head">Testing_</div>
                <div className="right-list">
                  Customer, employee <br />
                  or partner interviews
                </div>
                <div className="right-list">Questionnaires</div>

                <div className="right-list">Focus groups</div>

                <div className="right-list">User testing</div>
                <div className="right-list">Mystery shopping</div>
                <div className="right-list">A/B testing</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides" id="slide7">
            <div className="flex-container">
              <div style={{ flex: 1, border: "0px solid green" }}>
                <div
                  className="title-div"
                  style={{
                    display: "flex",
                    border: "0px solid grey",
                    height: "65%",

                    paddingTop: "50%",
                    paddingLeft: "50%",
                    justifyContent: "center",
                    border: "0px solid red",
                  }}
                >
                  <div className="title">
                    Step<span style={{ paddingRight: "15px" }}></span>7
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: 8,
                  border: "0px solid green",
                  paddingLeft: "1rem",
                  paddingTop: "2rem",

                  textAlign: "left",
                }}
              >
                <div className="right-head">Creative Production_</div>
                <div className="right-list">Digital design</div>
                <div className="right-list">Video</div>

                <div className="right-list">Photography</div>

                <div className="right-list">Animation</div>
                <div className="right-list">Print</div>
                <div className="right-list">Packaging</div>
                <div className="right-list">Campaigns</div>
                <div className="right-list">Marketing</div>
                <div className="right-list">Internal branding</div>
                <div className="right-list">Environment branding </div>
                <div className="right-list">
                  Social media guidelines & beyond...
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="slides"
            style={{ color: "transparent", backgroundColor: "transparent" }}
          ></SwiperSlide>{" "}
          <SwiperSlide
            className="slides"
            style={{
              border: "none",
              color: "transparent",
              backgroundColor: "transparent",
            }}
          ></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Scroll;
