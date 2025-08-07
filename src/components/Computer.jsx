/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export function Computer(props) {
  const { nodes, materials } = useGLTF(
    "/models/computer-optimized-transformed.glb"
  );

  const deskMaterial = useMemo(() => materials["ComputerDesk.001"], [materials]);
  const floppyMaterial = useMemo(() => materials["FloppyDisk.001"], [materials]);

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={deskMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={floppyMaterial}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;