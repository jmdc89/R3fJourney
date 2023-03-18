import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useHelper, MeshReflectorMaterial, Float, Text, Html, PivotControls, TransformControls, OrbitControls } from '@react-three/drei'
import { button, useControls } from 'leva'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'


export default function Experience() {
    const cube = useRef()
    const sphere = useRef()
    const directionalLight = useRef()
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

    const { position, color, visible } = useControls('sphere', {
        position:
        {
            value: { x: - 2, y: 0 },
            step: 0.01,
            joystick: 'invertY'
        },
        color: '#ff0000',
        visible: true,
        myInterval:
        {
            min: 0,
            max: 10,
            value: [4, 5],
        },
        clickMe: button(() => {console.log('ok')}),
        choice: { options: [ 'a', 'b', 'c' ] }
    })

    const { scale } = useControls('cube', {
        scale:
        {
            value: 1.5,
            step: 0.01,
            min: 0,
            max: 5
        }
    })

    const { perfVisible } = useControls({
        perfVisible: true
    })

    return <>
        { perfVisible && <Perf position="top-left" /> }
        <OrbitControls makeDefault />
        <directionalLight ref={ directionalLight } position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={0.5} />

        <mesh position={[position.x, position.y, 0]} ref={sphere}>
            <sphereGeometry />
            <meshStandardMaterial color={color} />
        </mesh>


        <mesh ref={cube} position-x={2} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>


        <mesh visible={visible} position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="green" />

        </mesh>

    </>
}