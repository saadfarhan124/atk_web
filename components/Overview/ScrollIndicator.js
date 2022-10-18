import React, { useState, Fragment } from "react";
// import { Container, ProgressBar, ScrollContent, Heading } from "./Styles";
import styled from "styled-components";
const Container = styled.div`
   background-color: black;
   height: 30px;
   position: sticky;
   top: 0;
   left: 0;
   z-index: 1;
   width: 100%;
`
const ProgressBar = styled.div`
   height: 30px;
   background-color: green;
`
const ScrollContent = styled.div`
   overflowY: scroll;
   height:2000px;
`; 
const Heading = styled.h1`
text-align: center;
font-size: 3rem;
`
const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);
  
  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };
  
  // window.addEventListener("scroll", onScroll);
  
  return (
    <Fragment>
      <Container>
        <ProgressBar style={{ width: `${scroll}%` }}>
        </ProgressBar>
      </Container>
      <ScrollContent>
        <Heading>GeeksForGeeks Scroll Indicator</Heading>
      </ScrollContent>
    </Fragment>
  );
};
  
export default ScrollIndicator;
