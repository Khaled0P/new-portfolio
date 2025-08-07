/* eslint-disable react/no-unknown-property */
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import PauseCanvasWhenOffscreen from '../../../hooks/PauseCanvasWhenOffscreen';



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

const TechIcon = ({ model }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div ref={ref} className="w-full h-full">
      <Canvas>
        <PauseCanvasWhenOffscreen inView={inView} />
        <IconModel model={model} />
      </Canvas>
    </div>
  );
};

export default TechIcon;
