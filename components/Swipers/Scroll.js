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
  useEffect(() => {
    const text1 = mytext.current;
    const image = myimg.current;
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
    <>
      <div className="containerw">
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
                    height: "100%",

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
                }}
              >
                <div className="right-head">
                  Immerse & <br /> Research_
                </div>
                <div className="right-list">Brand immersion</div>
                <div className="right-list">Brand audit</div>

                <div className="right-list">Market research</div>

                <div className="right-list">Competitor analysis</div>
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

                    paddingTop: "50%",
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
                }}
              >
                <div className="right-head">
                  Immerse & <br /> Research_
                </div>
                <div className="right-list">Brand immersion</div>
                <div className="right-list">Brand audit</div>

                <div className="right-list">Market research</div>

                <div className="right-list">Competitor analysis</div>
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

                    paddingTop: "50%",
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
                }}
              >
                <div className="right-head">
                  Immerse & <br /> Research_
                </div>
                <div className="right-list">Brand immersion</div>
                <div className="right-list">Brand audit</div>

                <div className="right-list">Market research</div>

                <div className="right-list">Competitor analysis</div>
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
                }}
              >
                <div className="right-head">
                  Immerse & <br /> Research_
                </div>
                <div className="right-list">Brand immersion</div>
                <div className="right-list">Brand audit</div>

                <div className="right-list">Market research</div>

                <div className="right-list">Competitor analysis</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="slides"
            style={{ color: "transparent", backgroundColor: "transparent" }}
          ></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Scroll;
