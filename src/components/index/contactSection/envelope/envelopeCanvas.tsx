import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./envelope";
import { Environment, OrbitControls } from "@react-three/drei";

const EnvelopeComponent = () => {
  return (
    <Canvas style={{ height: "100%" }}>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default EnvelopeComponent;
