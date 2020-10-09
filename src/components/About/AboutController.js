import React, { Suspense, useRef, useState } from "react"
import { Canvas, useFrame } from "react-three-fiber";

import { useFBXLoader, OrbitControls, softShadows } from 'drei'

import { useSpring, a } from "react-spring/three";

const modelPath = require.context('../../../public/model')

softShadows()

const Model = ({ position, path, scale }) => {
    const fbx = useFBXLoader(modelPath(path));

    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.001));

    const [expand, setExpand] = useState();

    const props = useSpring({
        scale: expand ? [scale * 1.1, scale * 1.1, scale * 1.1] : [scale, scale, scale]
    })

    return (
        <a.mesh
            onPointerOver={() => setExpand(true)}
            onPointerOut={() => setExpand(false)}
            ref={mesh}
            position={position}
            scale={props.scale}>
            <primitive object={fbx} dispose={null} />
        </a.mesh>
    )
}

const Lights = () => {
    return (
        <>
            {/* Ambient Light illuminates lights for all objects */}
            <ambientLight intensity={0.3} />
            {/* Diretion light */}
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight
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
            camera={{ position: [-5, 20, 10], fov: 60 }}
        >
            <Suspense fallback={null}>
                <Lights />
                <Model path={"./dslr.fbx"} position={[0, 5, 0]} scale={0.7} />
                <Model path={"./hw7.fbx"} position={[10, 5, 15]} scale={0.7} />
                <OrbitControls
                    enablePan={('Pan', false)}
                    enableZoom={('Zoom', true)}
                    enableRotate={('Rotate', true)} />
            </Suspense>
        </Canvas>
    )
}

export default AboutController;