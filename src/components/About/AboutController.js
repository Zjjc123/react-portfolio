import React, { Suspense, useRef, useState } from "react"
import { Canvas } from "react-three-fiber";

import { useHistory } from 'react-router-dom';

import { useGLTFLoader, OrbitControls, useProgress } from 'drei'

import { useSpring, a } from "react-spring/three";
import { useTransition, a as a2 } from "@react-spring/web";

const modelPath = require.context('../../../public/model')

const Model = ({ position, path, scale, pop = false, rotation, onClick, link = false }) => {
    const gltf = useGLTFLoader(modelPath(path));
    const mesh = useRef(null);

    const [expand, setExpand] = useState();

    const props = useSpring({
        scale: (expand && pop) ? [scale * 1.1, scale * 1.1, scale * 1.1] : [scale, scale, scale]
    })

    const [clickAble, setClickable] = useState(true);

    const mouseDownCoords = e => {
        window.checkForDrag = e.clientX;
    };

    const clickOrDrag = e => {
        if (link && clickAble) {
            const mouseUp = e.clientX;
            if (
                mouseUp < window.checkForDrag + 6 &&
                mouseUp > window.checkForDrag - 6
            ) {
                onClick();
                setClickable(false);
            }
        }
    };

    return (
        <a.mesh
            onPointerOver={() => setExpand(true)}
            onPointerOut={() => setExpand(false)}
            onPointerDown={mouseDownCoords}
            onPointerUp={clickOrDrag}
            ref={mesh}
            position={position}
            rotation={rotation}
            scale={props.scale}>
            <primitive object={gltf.scene} dispose={null} />
        </a.mesh>
    )
}

const Loader = () => {
    const { active, progress } = useProgress();
    const transition = useTransition(active, {
        from: { opacity: 1, progress: 0 },
        leave: { opacity: 0 },
        update: { progress },
    });
    const p = progress - 4 + '%';
    return transition(
        ({ opacity }, active) =>
            active && (
                <a2.div className='loading' style={{ opacity }}>
                    <h1 className='loading-text'>Journey Before Destination</h1>
                    <a2.div className='loading-bar' style={{ width: p }}></a2.div>
                </a2.div>
            )
    );
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
    const history = useHistory();

    return (
        <>
            <Canvas
                colorManagement
                camera={{ position: [0, 15, 20], fov: 60 }}
            >
                <Suspense fallback={null}>
                    <Lights />
                    <Model path={"./desk.glb"} scale={10} />
                    <Model
                        path={"./camera.glb"}
                        rotation={[0, -1, 0]}
                        position={[-5, 5.3, 0]}
                        scale={1}
                        pop
                        onClick={() => {
                            history.push('gallery')
                        }}
                        link
                    />
                    <Model
                        path={"./computer.glb"}
                        rotation={[0, 0, 0]}
                        position={[1, 7, 0]}
                        scale={2}
                        pop
                        onClick={() => {
                            history.push('projects')
                        }}
                        link
                    />
                </Suspense>
                <OrbitControls
                    enablePan={('Pan', false)}
                    enableZoom={('Zoom', false)}
                    enableRotate={('Rotate', true)}
                />
            </Canvas>
            <Loader />
        </>
    )
}

export default AboutController;