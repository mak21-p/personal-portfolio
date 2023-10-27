import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HandModel } from "./handmodel";

const SecondSection = () => {
  return (
    <div className="sectionWrapper" id="second">
      <div className="section textSection">
        <h2>About Me</h2>
        <p>
          I'm a full-stack developer from India who loves to bring fascinating
          concepts to reality in the realm of websites and applications.
          Currently, I am a freelance developer for hire.
          <br /> <br />
          When I'm not working, I like to lift weights at the gym and read books
          that pique my interest. My favorite genres of books are non-fiction
          and philosophy.
        </p>
      </div>
      <div className="section">
        <div style={{ height: "100%" }}>
          <Canvas style={{ height: "100%", background: "#000" }}>
            <Suspense fallback={null}>
              <HandModel />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
