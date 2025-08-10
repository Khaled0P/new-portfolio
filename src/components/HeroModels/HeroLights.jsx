/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';

const HeroLights = ({ isMobile }) => {
  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        intensity={isMobile ? 60 : 100}
        angle={0.15}
        penumbra={0.2}
        color="white"
        castShadow={!isMobile}
      />
      <spotLight
        position={[4, 5, 4]}
        intensity={isMobile ? 25 : 40}
        angle={0.3}
        penumbra={0.5}
        color="#4cc9f0"
        castShadow={!isMobile}
      />
      {!isMobile && (
        <spotLight
          position={[4, 5, 4]}
          intensity={40}
          angle={0.3}
          penumbra={0.5}
          color="#4cc9f0"
        />
      )}
      <spotLight
        position={[-3, 5, 5]}
        intensity={isMobile ? 35 : 60}
        angle={0.4}
        penumbra={1}
        color="#9d4edd"
        castShadow={!isMobile}
      />
      {!isMobile && (
        <primitive
          object={new THREE.RectAreaLight('#A259ff', 8, 3, 2)}
          position={[1, 3, 4]}
          intensity={15}
          rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        />
      )}
      <pointLight 
        position={[0, 1, 0]} 
        intensity={isMobile ? 6 : 10} 
        color="#7209b7" 
        castShadow={!isMobile}
      />
      {!isMobile && (
        <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
      )}
    </>
  );
};

export default HeroLights;
