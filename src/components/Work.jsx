import React from "react";
import styled from "styled-components";
import { useState } from "react";
import WebDesign from "./WebDesign";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import FullStack from "./FullStack";
import SocialMedia from "./SocialMedia";

const data = ["Web Design", "Fullstack Dev", "Development", "Product Design", "Social Media"];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1120px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ListItem = styled.li`
  color: transparent;
  font-size: 3rem;
  font-weight: bold;
  cursor: pointer;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: orangered;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveColorText 0.5s linear both;
      @keyframes moveColorText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Work = () => {
  const [work, setWork] = useState("Web Design");

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>{work === "Web Design" ? <WebDesign /> : work === "Fullstack Dev" ? <FullStack /> : work === "Development" ? <Development /> : work === "Social Media" ? <SocialMedia /> : <ProductDesign />}</Right>
      </Container>
    </Section>
  );
};

export default Work;
