import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
    nodes: {
        Cube: any,
        Text_1: any
  };
  materials: {};
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/envelope.gltf") as GLTFResult;
  const [rot, setRot] = useState(new THREE.Euler(0, 0, 0));

  useFrame(() => {
    setRot(new THREE.Euler(0, rot.y + 0.02, 0))
  })

  return (
    <group {...props} dispose={null}>
      <group scale={0.01} rotation={rot}>
        <lineSegments
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          // position={[61.59, 18.412, 7.869]}
        >
          <group position={[91.74, -38.72, -10.287]}>
            <lineSegments
              geometry={nodes.Text_1.geometry}
              material={nodes.Text_1.material}
              // position={[0.428, -2.191, 0]}
            />
          </group>
        </lineSegments>
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[-101.305, 149.121, 971.533]}
          rotation={[-0.142, -0.202, -0.029]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/envelope.gltf");