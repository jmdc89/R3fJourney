import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Model from './Model.jsx'
import { Suspense } from 'react'

export default function Experience() {

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <Suspense>
            <Model />
        </Suspense>

        <mesh receiveShadow position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}