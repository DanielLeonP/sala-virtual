/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useLayoutEffect, useRef } from 'react'
import { useGLTF, CubeCamera } from '@react-three/drei'

export default function Escena({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/escena.glb')
    console.log({nodes,materials})
    // const snap = useSnapshot(state);


    // useLayoutEffect(() => {
    //     materials.Silla.color.set('#00000')
    //   }, [materials])
    return (
        <group ref={group} {...props} dispose={null}>
            <group ref={group} {...props} dispose={null}>
                <mesh geometry={nodes.Mesa.geometry} material={materials.madera} position={[-7., 0.1, -7.9]} scale={[2, 0.04, 2]}/> 
                <mesh geometry={nodes.piso.geometry} material={materials.piso} position={[-7, -0.9, -7]} scale={[2, 0.04, 4]}/> 
                <mesh geometry={nodes.marcoSilla.geometry} material={materials.madera} position={[-4, 0, -7]} scale={[0.5, 0.05, 0.5 ]}/> 
                <mesh geometry={nodes.coginSilla.geometry} material={materials.cogin} position={[-4, 0.11, -7]} scale={[0.5, 0.05, 0.5 ]}/> 
            </group>
        </group>
    )
}

useGLTF.preload('/escena.glb')
