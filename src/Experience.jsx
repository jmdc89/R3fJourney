import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Model from './Model.jsx'
import { Suspense } from 'react'
import Placeholder from './Placeholder.jsx'
import Hamburguer from './Hamburguer.jsx'
import Fox from './Fox.jsx'
import Unicorn from './Unicorn.jsx'
import Boxes from './boxestest.jsx'

export default function Experience() {

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={ 0.04 } />
        <ambientLight intensity={0.5} />

        <Suspense fallback={ <Placeholder position-y={ 0.5 } scale={ [ 2, 3, 2 ] } /> }>
            <Hamburguer scale={0.35}/>
            <Fox/>
            {/* <Unicorn /> */}
            <Boxes />
        </Suspense>

        <mesh receiveShadow position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}