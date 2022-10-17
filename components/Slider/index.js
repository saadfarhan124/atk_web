import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Parent = styled.div`
  width: 100%;
  background-color: black;
  position: relative;
  height:80vh;
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
 
  background-size:cover;
  background-position-y: 0.00rem; 


`;
const Type = styled.div`
  height:80vh;
  width: 96vw;
  background-size: auto 80vh;
  background-repeat: repeat-x;
  animation-name: ${Marquee};
  animation: ${Marquee} 480s linear infinite;
  animation-direction: reverse;
  background-image: url("/static/create.png");
`;
const Mytext = styled.div`
position: absolute;

top: 50%;
left: 50%;
transform: translateX(-50%) translateY(-50%);
text-transform: uppercase;
font-size: 30pt;
font-family: GraphikItalic;
font-weight: bolder;
color: white;
overflow-x:hidden;

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
