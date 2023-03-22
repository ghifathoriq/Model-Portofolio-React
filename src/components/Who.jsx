import React from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  color: white;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  // width: 1180px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Left = styled.div`
  flex: 3;
  @media only screen and (max-width: 768px) {
    flex: 1;
  }
`;

const Right = styled.div`
  flex: 2;
  justify-content: center;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem 0rem 0rem;
  // background-color: red;
  @media only screen and (max-width: 768px) {
    flex: 1;
    padding: 0rem 0rem 0rem 0rem;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  @media only screen and (max-width: 768px) {
    font-size: 2rem
    padding: 0.4rem
    width: 70%;
    text-align: center;
  }
`;

const WhoWeAre = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Line = styled.p`
  width: 4.5rem;
  height: 0.6rem;
  border-radius: 10px;
  background-color: gray;
  @media only screen and (max-width: 768px) {
    width: 2rem;
    height: 0.3rem;
  }
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  @media only screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Desc = styled.p`
  font-size: 1.2rem;
  @media only screen and (max-width: 768px) {
    padding: 0.4rem
    width: 80%;
    text-align: center;
  }
`;

const Button = styled.button`
  width: 5.2rem;
  padding: 0.3rem;
  background-color: #da4ea2;
  border-radius: 1px;
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhoWeAre>
            <Line></Line>
            <Subtitle>Who we are</Subtitle>
          </WhoWeAre>
          <Desc>a creative individual of designers and development with a passion for the arts.</Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
