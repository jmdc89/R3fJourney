import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'



export default function Experience() {

    const cubeRef = useRef()

    useFrame((state, delta) =>
    {
        cubeRef.current.rotation.y += delta
    })

    return (
        <>
            <mesh position-x="-2">
                <sphereGeometry />
                <meshBasicMaterial color="orange" wireframe />
            </mesh>

            <mesh ref={cubeRef} rotation-y={ Math.PI * 0.25 } position-x="2" scale={2}>
                <boxGeometry />
                <meshBasicMaterial color="mediumpurple" wireframe={false} />
            </mesh>

            <mesh rotation-x={ - Math.PI * 0.5 } position-y="-1" scale={10}>
                <planeBufferGeometry/>
                <meshBasicMaterial color="green"/>
            </mesh>
        </>
        
    )
}
