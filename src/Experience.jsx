import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

extend({ OrbitControls })
// extend({ OrbitControls: OrbitControls })


export default function Experience() {

    const { camera, gl } = useThree()

    const cubeRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta
        // groupRef.current.rotation.y += delta
    })

    return (
        <>
            <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
            <ambientLight intensity={ 0.5 } />

            <orbitControls args={[camera, gl.domElement]} />

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
        </>

    )
}
