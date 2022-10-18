import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
const Mainbox = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: black;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
  padding-left: 8vh;
  padding-right: 8vh;
  overflow-x: hidden;
`;

const Container = styled.div`
  background-image: url("static/brand_strategy.png");
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  overflow-x: hidden;
`;
const Textcontainer = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Marquee = keyframes`
from {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  to {
    -moz-transform: translateX(150%);
    -webkit-transform: translateX(150%);
    transform: translateX(150%);
  }
`;
const Swipertext = styled.div`
  text-align: right;
  color: white;
  -moz-transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  animation-name: ${Marquee};
  -moz-animation: ${Marquee} 5s linear infinite;
  -webkit-animation: ${Marquee} 5s linear infinite;
  animation: ${Marquee} 5s linear infinite;
  text-transform: uppercase;
  font-size: 110px;
`;
const RightHead = styled.div`
  font-size: 35pt;
  font-weight: 500;
  color: black;
  padding-bottom: 2rem;
`;
const RightList = styled.div`
  font-size: 14pt;
  font-weight: bold;
  padding: 0.25rem;
`;
const LeftText = styled.p`
  font-weight: 500;
  font-size: 50pt;
  ms-transform: rotate(270deg);

//   -webkit-transform: rotate(270deg); /* Chrome, Safari, Opera */
  
//   transform: rotate(270deg);
  border: 0px solid red;
  writing-mode: vertical-lr;


  
`;
const LeftBox = styled.div`
border:0px solid grey;
display:flex;
align-items:flex-end;
height:100%;
justify-content:flex-start;

`;

const Brand = () => {
  return (
    <>
      <Mainbox>
        <Container>
          <Textcontainer>
            <Swipertext>Brand In process.</Swipertext>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Mousewheel]}
              spaceBetween={5}
              slidesPerView={1}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              mousewheel={true}
              direction="vertical"
              loop
              style={{
                height: "40vh",
                width: "40vw",
                border: "0px solid red",
                position: "absolute",
                backgroundColor: "white",
                color: "black",
                // position: "fixed",
              }}
            >
              <SwiperSlide>
                sec 1
                {/* <div style={{display:'flex',flexDirection:'row',height:'100%'}}>
                    <div style={{flex:1,border:'0px solid green',}}>
                        <LeftBox>
                                <LeftText>Step 1 _____</LeftText>
                        </LeftBox>
                        </div>
                        <div
                    style={{
                      flex: 3,
                      border: "0px solid green",
                      paddingLeft: "4rem",
                      paddingTop: "3rem",
                    }}
                  >                        <RightHead>
                      Immerse & <br /> Research_
                    </RightHead>
                    <RightList>Brand immersion</RightList>
                    <RightList>Brand audit</RightList>

                    <RightList>Market research</RightList>

                    <RightList>Competitor analysis</RightList>
                            </div>
                </div> */}
              </SwiperSlide>
              <SwiperSlide>
              sec 2
                  {/* <div
                  style={{
                    border: "0px solid blue",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <LeftBox>
                    <div style={{ display: "flex", border: "0px solid",height:'30vh' ,justifyContent:'center',alignItems:'center'}}>
                      <LeftText>Step 2 _____ </LeftText>
                    </div> 
                  </LeftBox>
                  <div
                    style={{
                      flex: 3,
                      border: "0px solid green",
                      paddingLeft: "4rem",
                      paddingTop: "3rem",
                    }}
                  >
                    <RightHead>
                      Immerse & <br /> Research_
                    </RightHead>
                    <RightList>Brand immersion</RightList>
                    <RightList>Brand audit</RightList>

                    <RightList>Market research</RightList>

                    <RightList>Competitor analysis</RightList>
                  </div>
                </div>
                 */}
                </SwiperSlide>
              <SwiperSlide>
              sec 3

                  {/* <div
                  style={{
                    border: "0px solid blue",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <LeftBox>
                    <div style={{ display: "flex", border: "0px solid",height:'30vh' ,justifyContent:'center',alignItems:'flex-end'}}>
                      <LeftText>Step 3 _____ </LeftText>
                    </div> 
                  </LeftBox>
                  <div
                    style={{
                      flex: 3,
                      border: "0px solid green",
                      paddingLeft: "4rem",
                      paddingTop: "3rem",
                    }}
                  >
                    <RightHead>
                      Immerse & <br /> Research_
                    </RightHead>
                    <RightList>Brand immersion</RightList>
                    <RightList>Brand audit</RightList>

                    <RightList>Market research</RightList>

                    <RightList>Competitor analysis</RightList>
                  </div>
                </div> */}
                </SwiperSlide>
              <SwiperSlide>
              sec 4
                  {/* <div
                  style={{
                    border: "0px solid blue",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <LeftBox>
                    <div style={{ display: "flex", border: "0px solid",height:'30vh' ,justifyContent:'center',alignItems:'center'}}>
                      <LeftText>Step 4 _ </LeftText>
                    </div> 
                  </LeftBox>
                  <div
                    style={{
                      flex: 3,
                      border: "0px solid green",
                      paddingLeft: "4rem",
                      paddingTop: "3rem",
                    }}
                  >
                    <RightHead>
                      Immerse & <br /> Research_
                    </RightHead>
                    <RightList>Brand immersion</RightList>
                    <RightList>Brand audit</RightList>

                    <RightList>Market research</RightList>

                  </div>
                </div> */}
                </SwiperSlide>
              ...
            </Swiper>
          </Textcontainer>
        </Container>
      </Mainbox>

      {/* <div style={{backgroundColor:'black',height:'50vh',border:'1px solid red',display:'flex',justifyContent:'center',alignItems:'center'}}>
   
    </div>
<div style={{height:'100vh'}}></div> */}
    </>
  );
};

export default Brand;
