import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
`;
const ImgNews = styled.img`
  object-fit: contain;
  width: 35vw;
  @media screen and (max-width: 479px) {
    width: 50vw;
  }
`;
const Header = () => {
  return (
    <Container>
      <ImgNews src={"/static/header_logo.png"} />
    </Container>
  );
};

export default Header;
