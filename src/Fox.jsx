import { useGLTF } from '@react-three/drei'

export default function Fox() {
    const fox = useGLTF('./Fox/glTF-Binary/Fox.glb')

    return <>
        <primitive
            object={fox.scene}
            scale={0.02}
            position={[- 2.5, 0, 2.5]}
            rotation-y={0.3}
        />
    </>
}

useGLTF.preload('./Fox/glTF-Binary/Fox.glb')