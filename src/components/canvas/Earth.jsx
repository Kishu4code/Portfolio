/* eslint-disable react/no-unknown-property */


import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'

const Earth = () => {
    const earth = useGLTF('./planet/scene.gltf')
    return (
            <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0} />
  )
}

const EarthCanvas = () => {
    return (
        <Canvas frameloop='demand' shadows camera={{ fov: 46,near: 0.1, far: 200, position: [-4, 3, 6] }} gl={{ preserveDrawingBuffer: true }} >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} autoRotate />
                <Earth />
                
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default EarthCanvas;