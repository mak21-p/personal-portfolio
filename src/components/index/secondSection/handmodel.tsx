import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Group9288: any;
  };
  materials: {};
};

export function HandModel(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("/hands.gltf") as GLTFResult;
    const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    nodes.Group9288.materials = wireframeMaterial;
    const [rot, setRot] = useState(new THREE.Euler(0, 0, -Math.PI / 2));

    useFrame(() => {
    setRot(new THREE.Euler(rot.x, rot.y + 0.02, rot.z))
    })

  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1} />    
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Group9288.geometry}
          material={wireframeMaterial}
          position={[0, 225, 175]}
          rotation={rot}
          scale={500}
        />
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[0, 0, 1000]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/hands.gltf");
