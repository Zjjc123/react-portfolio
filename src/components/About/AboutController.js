import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber";

import { useFBXLoader, OrbitControls } from 'drei'

import { Section } from "../Section";

const modelPath = require.context('../../../public/model')

const Model = () => {
    const fbx = useFBXLoader(modelPath('./dslr.fbx'));
    return <primitive object={fbx} dispose={null} />;
}

const Lights = () => {
    return (
      <>
        {/* Ambient Light illuminates lights for all objects */}
        <ambientLight intensity={0.3} />
        {/* Diretion light */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* Spotlight Large overhead light */}
        <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
      </>
    );
  };

function AboutController() {
    return (
        <Canvas
            colorManagement
            camera={{ position: [0, 0, 120], fov: 70 }}
        >
            <Lights />
            <Suspense fallback={null}>
                <Section factor={1.5} offset={1}>
                    <group position={[0, 200, 0]}>
                        <mesh position={[0, 50, 100]}>
                            <Model />
                        </mesh>
                    </group>
                </ Section>
            </Suspense>
            <OrbitControls />
        </Canvas>
    )
}

export default AboutController;