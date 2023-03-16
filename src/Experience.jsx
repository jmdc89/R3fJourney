import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Float, Text, Html, PivotControls, TransformControls, OrbitControls } from '@react-three/drei'



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
            {/* <Html position={ [ 1, 1, 0 ] } wrapperClass="label" center distanceFactor={ 8 } occlude={ [ sphere, cube ] }>That's a sphere 👍</Html> */}
        </mesh>

        <PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={4}
            axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
            scale={2}>
            <mesh ref={cube} position-x={2} scale={1.5}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
        </PivotControls>

        {/* <TransformControls object={ cube } mode="translate" /> */}


        <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
            
        </mesh>

        {/* <Html>Test</Html> */}

        <Float
        speed={ 5 }
        floatIntensity={ 2 }
        >
        <Text
            fontSize={ 1 }
            color="salmon"
            position-y={ 2 }
            maxWidth={ 2 }
            textAlign="center"
        >I LOVE R3F
        </Text>
        </Float>

    </>
}