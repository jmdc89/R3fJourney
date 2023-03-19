import { useGLTF } from '@react-three/drei'

export default function Boxes()
{
    const boxes = useGLTF('./boxtestcolors.gltf')

    return <>
        <primitive object={ boxes.scene } scale={0.1} />
    </>
}

useGLTF.preload('./boxtestcolors.gltf')