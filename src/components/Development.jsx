import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AtomReact from "./AtomReact";

const Development = () => {
  return (
    <Canvas>
      <Stage enviornment="city" intensity={0.6}>
        <AtomReact />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Development;
