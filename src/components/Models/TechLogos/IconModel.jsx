/* eslint-disable react/no-unknown-property */
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';

const IconModel = ({ model }) => {
  const { scene } = useGLTF(model.modelPath);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group
          scale={model.scale}
          rotation={model.rotation}
          position={model.name === 'Shopify Developer' ? [0, -3, 0] : [0, 0, 0]}
        >
          <primitive object={scene} />
        </group>
      </Float>
    </>
  );
};

export default IconModel;