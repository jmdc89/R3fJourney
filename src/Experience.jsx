import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { MeshReflectorMaterial, Float, Text, Html, PivotControls, TransformControls, OrbitControls } from '@react-three/drei'



export default function Experience() {
    const cube = useRef()
    const sphere = useRef()

    return <>
        <OrbitControls makeDefault />
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <mesh position-x={- 2} ref={sphere}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>


            <mesh ref={cube} position-x={2} scale={1.5}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>


        <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="green" />

        </mesh>

    </>
}