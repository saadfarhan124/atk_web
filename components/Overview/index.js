import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
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
const Overview = () => {
  const ag = useRef();

  return (
    <div ref={ag}>
      <Title>
        Overview <br /> of our <br /> Services
      </Title>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "40vh",
          paddingLeft: "5rem",
          paddingRight: "5rem",
        }}
      >
        <div style={{ flex: 2, border: "0px solid green" }}>
          <p style={{ transform: "rotate(-90deg)", fontSize: "50pt" }}>
            Strategy
          </p>
        </div>
        <div style={{ flex: 3, border: "0px solid yellow" }}>
          <Container className="pSection">
            <ContainerTxt className="pContent">
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
            </ContainerTxt>
            <Img
              className="pImage"
              src="/static/overview.png"
              width="305px"
              height="380px"
            />
          </Container>
        </div>
        <div
          style={{
            flex: 2,
            border: "0px solid blue",
            textAlign: "right",
            paddingRight: "2rem",
          }}
        >
          <p style={{ fontSize: "1.5rem" }}>hello</p>
          <p style={{ fontSize: "1.5rem" }}>hi hello</p>
          <p style={{ fontSize: "1.5rem" }}>whats up</p>
        </div>
      </div>
      {/* <Container className="pSection">

        <ContainerTxt className="pContent">
          <Description>
            
            Verbal brand identity - Brand <br/>
            audit - Naming - Positioning - <br/>
            Differentiation - Brand<br/>
            architecture - Tone of voice - <br/>
            Consumer, market, and <br/>
            competitor research - Insights - <br/>
            Fieldwork - Focus groups <br/>
            Testing - Launch plans
          </Description>
       
        </ContainerTxt>
        <Img
          className="pImage"
          src="/static/overview.png"
          width="305px"
          height="380px"
        />
      </Container> */}
    </div>
  );
};

export default Overview;
