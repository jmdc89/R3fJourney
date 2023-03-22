import { useGLTF, OrbitControls } from '@react-three/drei'

export default function Experience()
{

    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')


    return <>

        <color args={ [ '#241a1a' ] } attach="background" />

        <OrbitControls makeDefault />

        <primitive object={ computer.scene } />

    </>
}