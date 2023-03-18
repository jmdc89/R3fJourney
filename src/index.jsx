import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { CineonToneMapping } from 'three'
import * as THREE from 'three'
import { StrictMode } from 'react'


const root = ReactDOM.createRoot(document.querySelector('#root'))


root.render(
    <StrictMode>
        <Canvas 
            shadows
            gl={ {
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping
            } }
            camera={ { 
            fov: 45, 
            near: 0.1, 
            far: 200, 
            position: [ 3, 2, 6 ] 
            } }
        >
            <color args={ [ 'ivory' ] } attach="background" />
            <Experience />
        </Canvas>
        </StrictMode>
)