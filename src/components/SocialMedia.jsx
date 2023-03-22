import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Mac from "./Mac";

const SocialMedia = () => {
  return (
    <Canvas>
      <Stage enviornment="city" intensity={0.6}>
        <Mac />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default SocialMedia;
