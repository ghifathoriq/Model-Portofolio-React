import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
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
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  padding: 0rem 0rem 0rem 2rem;
  justify-content: center;
  // background-color: red;
  @media only screen and (max-width: 768px) {
    flex: 1;
    height: 100vh;
    width: 100%;
    text-align: center;
    align-items: center;
    padding: 0rem 0rem 0rem 0rem;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin: 0rem 4rem 0rem 2.3rem;
  @media only screen and (max-width: 768px) {
    text-align: center;
    display: flex;
    font-size: 3rem;
    width: 60%;
    margin: 0rem 0rem 0rem 0rem;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0rem 0rem 0rem 2.3rem;
  @media only screen and (max-width: 768px) {
    margin: 0rem 0rem 0rem 0rem;
  }
`;

const Line = styled.p`
  width: 4.5rem;
  height: 0.6rem;
  border-radius: 10px;
  margin: 0rem 0rem 0rem 0.4rem;
  background-color: gray;
  @media only screen and (max-width: 768px) {
    width: 1.7rem;
    height: 0.4rem;
    margin: 0rem 0rem 0rem 0rem;
  }
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Desc = styled.p`
  font-size: 1.2rem;
  margin: 0rem 1.2rem 0rem 2.3rem;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
    margin: 0rem 0rem 0rem 0rem;
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
  margin: 0.7rem 0rem 0rem 2.3rem;
  @media only screen and (max-width: 768px) {
    margin: 0.4rem 0rem 0rem 0rem;
  }
`;

const Right = styled.div`
  display: flex;
  flex: 2;
  width: 100%;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 700px;
  height: 430px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    100% {
      transform: translateY(22px);
    }
  }

  @media only screen and (max-width: 768px) {
    width: 220px;
    height: 310px;
    margin: auto;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Navbar />
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line></Line>
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>We Enjoy Creating Delightful, human-centered digital experiences.</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.1}>
              <MeshDistortMaterial color="purple" attach="material" distort={0.5} speed={2} />
            </Sphere>
          </Canvas>
          <Img src="./images/Astronaut.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
