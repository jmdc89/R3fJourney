import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

export default function Fox() {
    const fox = useGLTF('./Fox/glTF-Binary/Fox.glb')
    const animations = useAnimations(fox.animations, fox.scene)
    console.log(animations)

    useEffect(() => {
        animations.actions.Run.play()

        window.setTimeout(() => {
            animations.actions.Walk.play()
            animations.actions.Walk.crossFadeFrom(animations.actions.Run, 1)
        }, 2000)
    }, [])

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