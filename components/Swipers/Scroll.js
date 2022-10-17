import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";

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
          start: "top 15%",
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
          WE CALL THEM CHANGEMAKERS
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
          <SwiperSlide className="slides">Slide 1</SwiperSlide>
          <SwiperSlide className="slides">Slide 2</SwiperSlide>
          <SwiperSlide className="slides">Slide 3</SwiperSlide>
          <SwiperSlide className="slides">Slide 4</SwiperSlide>
          <SwiperSlide className="slides">Slide 5</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Scroll;
