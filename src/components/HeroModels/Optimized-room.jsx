/* eslint-disable react/no-unknown-property */
import React, { useRef, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
// import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
// import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { useMediaQuery } from "react-responsive";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();
const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const matcapTexture = useTexture("/images/textures/mat1.png");

  // ✅ Memoized materials (only created once)
  const curtainMaterial = useMemo(() => new THREE.MeshPhongMaterial({ color: "#d90429" }), []);
  const bodyMaterial = useMemo(() => new THREE.MeshPhongMaterial({ map: matcapTexture }), []);
  const tableMaterial = useMemo(() => new THREE.MeshPhongMaterial({ color: "#582f0e" }), []);
  const radiatorMaterial = useMemo(() => new THREE.MeshPhongMaterial({ color: "#fff" }), []);
  const compMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: "#fff" }), []);
  const pillowMaterial = useMemo(() => new THREE.MeshPhongMaterial({ color: "#8338ec" }), []);
  const chairMaterial = useMemo(() => new THREE.MeshPhongMaterial({ color: "#000" }), []);

  return (
    <group {...props} dispose={null}>
      
      {!isMobile && (<EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>)}
      

      {/* Key meshes with optimized materials and shadows */}
      <mesh geometry={nodes._________6_blinn1_0.geometry} material={curtainMaterial} castShadow receiveShadow />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} castShadow receiveShadow />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} castShadow receiveShadow />
      <mesh geometry={nodes.chair_body_blinn1_0.geometry} material={chairMaterial} castShadow receiveShadow />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} castShadow receiveShadow />
      <mesh ref={screensRef} geometry={nodes.emis_lambert1_0.geometry} material={materials.lambert1} />

      {/* All other static meshes (no material changes) */}
      {[
        'handls_blinn1_0',
        'keyboard_blinn1_0',
        'kovrik_blinn1_0',
        'lamp_bl_blinn1_0',
        'lamp_white_blinn1_0',
        'miuse_blinn1_0',
        'monitor2_blinn1_0',
        'monitor3_blinn1_0',
        'pCylinder5_blinn1_0',
        'polySurface53_blinn1_0',
        'radiator_blinn1_0001',
        'railing_blinn1_0',
        'red_bttns_blinn1_0',
        'red_vac_blinn1_0',
        'stylus_blinn1_0',
        'tablet_blinn1_0',
        'triangle_blinn1_0',
        'vac_black_blinn1_0',
        'vacuum1_blinn1_0',
        'vacuumgrey_blinn1_0',
        'vires_blinn1_0',
        'window_blinn1_0'
      ].map((name) => (
        <mesh
          key={name}
          geometry={nodes[name].geometry}
          material={materials.blinn1}
          castShadow
          receiveShadow
        />
      ))}

      <mesh geometry={nodes.pillows_blinn1_0.geometry} material={pillowMaterial} castShadow receiveShadow />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} castShadow receiveShadow />
      <mesh geometry={nodes.radiator_blinn1_0.geometry} material={radiatorMaterial} castShadow receiveShadow />
      <mesh geometry={nodes.window4_phong1_0.geometry} material={materials.phong1} castShadow receiveShadow />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");
