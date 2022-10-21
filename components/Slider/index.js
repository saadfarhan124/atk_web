import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Parent = styled.div`
  width: 100%;
  background-color: black;
  position: relative;
  height: 80vh;
`;
const Marquee = keyframes`
0% {
  background-position: 0;
}
100% {
  background-position: -4250%;
}
`;
const Slide = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("static/createbg.jpeg");

  background-size: cover;
  background-position-y: 1rem;
`;
const Type = styled.div`
  height: 80vh;
  // width: 100vw;
  background-size: auto 80vh;
  background-repeat: repeat-x;
  animation-name: ${Marquee};
  animation: ${Marquee} 480s linear infinite;
  animation-direction: reverse;
  background-image: url("/static/create.png");
`;
const Mytext = styled.div`
  display: block;
  position: absolute;
  text-align: center;
  top:48%;
  right: 0;
  bottom: 0;
  left: 0;
  /* transform: translateX(-50%) translateY(-50%); */
  text-transform: uppercase;
  font-size: 4vw;
  letter-spacing: 0.8vw;
  font-family: "Graphik";
  font-weight: bolder;
  color: white;
  overflow-x: hidden;
  @media (max-width: 479px) {
    font-size: 15vw;
 
    margin-bottom:50%;
    height:30vh
    
  }

`;

const Sliderr = () => {
  return (
    <Parent>
      <Slide>
        <Type></Type>
      </Slide>

      
      <Mytext>Create positive change</Mytext>
     
    </Parent>
  );
};

export default Sliderr;
