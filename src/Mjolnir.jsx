/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 mjolnir.glb -s 
Author: Pitahra (https://sketchfab.com/mehmetaliucozresmi)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mjolnir-083f7dba8d464766bbe8f105eff67dea
Title: Mjolnir
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function Model(props) {
  const { nodes, materials } = useGLTF('/mjolnir.glb')
  const hammer = useRef()
  useFrame((state) => {
      const worldPosition = new THREE.Vector3()
      hammer.current?.getWorldPosition(worldPosition)
         
      state.camera.lookAt(worldPosition)

  })
  return (
    <group   ref={hammer} {...props} dispose={null}>
      <group scale={0.001} rotation-y={-11} rotation-z={-0.5} >
        <group position={[0, -253.774, 0]} rotation={[-1.441, -0.348, -0.337]} scale={71.271}>
          <mesh castShadow receiveShadow geometry={nodes.Cylinder021_Material008_0.geometry} material={materials['Material.008']} />
          <mesh castShadow receiveShadow geometry={nodes.Cube_Material005_0.geometry} material={materials['Material.005']} position={[0.014, -0.094, 3.694]} rotation={[0.025, 0.004, -0.002]} scale={[0.993, 0.722, 0.993]} />
          <mesh castShadow receiveShadow geometry={nodes.Cube001_Material005_0.geometry} material={materials['Material.005']} position={[0.01, -2.544, 3.632]} rotation={[0.025, 0.004, -0.002]} scale={[0.87, 1.044, 0.87]} />
          <mesh castShadow receiveShadow geometry={nodes.Cube002_Material005_0.geometry} material={materials['Material.005']} position={[0.015, 0.74, 3.716]} rotation={[0.025, 0.004, -0.002]} scale={0.993} />
          <mesh castShadow receiveShadow geometry={nodes.Cylinder_Material005_0.geometry} material={materials['Material.005']} position={[1.025, -0.095, 3.691]} rotation={[2.748, 1.567, -2.722]} scale={[0.967, 0.967, 0.24]} />
          <mesh castShadow receiveShadow geometry={nodes.Sphere_Material001_0.geometry} material={materials['Material.001']} position={[1.61, -2.57, 4.121]} rotation={[2.748, 1.567, -2.722]} scale={[0.198, 0.198, 0.085]} />
          <mesh castShadow receiveShadow geometry={nodes.Sphere001_Material001_0.geometry} material={materials['Material.001']} position={[0.008, -3.518, 3.607]} rotation={[-1.545, 0.002, -3.138]} scale={[-0.282, 0.282, 0.113]} />
          <mesh castShadow receiveShadow geometry={nodes.Cylinder001_Material001_0.geometry} material={materials['Material.001']} position={[0.018, -0.121, 4.783]} rotation={[0.025, 0.004, -0.002]} scale={0.993} />
          <mesh castShadow receiveShadow geometry={nodes.Sphere002_Material009_0.geometry} material={materials['Material.009']} position={[1.111, -0.096, 3.69]} rotation={[2.748, 1.567, -2.722]} scale={[0.646, 0.646, 0.329]} />
          <mesh castShadow receiveShadow geometry={nodes.Cylinder002_Material001_0.geometry} material={materials['Material.001']} position={[0.01, -0.066, 2.579]} rotation={[0.025, 0.004, -0.002]} scale={0.993} />
          <mesh castShadow receiveShadow geometry={nodes.Cylinder003_Material002_0.geometry} material={materials['Material.002']} position={[0.002, -0.016, 0.617]} rotation={[0.025, 0.004, -0.002]} scale={1.032} />
          <mesh castShadow receiveShadow geometry={nodes.Cylinder010__0.geometry} material={materials['Cylinder.010__0']} position={[0.006, -0.041, 1.597]} rotation={[0.025, 0.004, -0.002]} scale={0.969} />
          <mesh castShadow receiveShadow geometry={nodes.Cylinder019__0.geometry} material={materials['Cylinder.010__0']} position={[0.001, -0.004, 0.163]} scale={0.993} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/mjolnir.glb')