import React from "react";
import AtomReact from "./AtomReact";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const FullStack = () => {
  return (
    <Canvas>
      <Stage enviornment="city" intensity={0.6}>
        <AtomReact />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default FullStack;
