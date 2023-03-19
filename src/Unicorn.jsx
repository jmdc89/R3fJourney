import { useLoader } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Unicorn()
{
    const unicorn = useGLTF('./unicorn/scene.gltf')

    return <>
        <primitive object={unicorn.scene}/>
    </>
}

useGLTF.preload('./unicorn/scene.gltf')