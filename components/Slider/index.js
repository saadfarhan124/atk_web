import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Parent = styled.div`
  width: 100%;
  background-color: black;
  position: relative;
  height:45vh;
  border:0px solid ;
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
  background-image: url("static/createbg.png");
 
  background-size:cover;
  background-position-y: 0.00rem;  border0px solid red;


`;
const Type = styled.div`
  height: 45vh;
  width: 100vw;
  background-size: auto 60vh;
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
