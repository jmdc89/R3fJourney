import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from './CustomObject'

extend({ OrbitControls })
// extend({ OrbitControls: OrbitControls })


export default function Experience() {

    const { camera, gl } = useThree()

    const cubeRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta
        // groupRef.current.rotation.y += delta

        const angle = state.clock.elapsedTime
        state.camera.position.x = Math.sin(angle) * 8
        state.camera.position.z = Math.cos(angle) * 8
        state.camera.lookAt(0, 0, 0)
    })

    return (
        <>
            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            {/* <orbitControls args={[camera, gl.domElement]} /> */}

            <group ref={groupRef}>
                <mesh position-x="-2">
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" wireframe />
                </mesh>

                <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x="2" scale={2}>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" wireframe={false} />
                </mesh>
            </group>

            <mesh rotation-x={- Math.PI * 0.5} position-y="-1" scale={10}>
                <planeBufferGeometry />
                <meshStandardMaterial color="green" />
            </mesh>

            <CustomObject />
        </>

    )
}
