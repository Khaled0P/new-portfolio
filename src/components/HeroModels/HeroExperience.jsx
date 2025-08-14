/* eslint-disable react/no-unknown-property */
import { Html, OrbitControls, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import { Room } from './Optimized-room';
import HeroLights from './HeroLights';
import Particles from './Particles';
import PauseCanvasWhenOffscreen from '../../hooks/PauseCanvasWhenOffscreen';
import { Suspense } from 'react';

const HeroExperience = ({ enableControls }) => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });



  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center>
        <div className="text-white text-center">
          <p>{progress.toFixed(0)} % loaded</p>
        </div>
      </Html>
    );
  }

  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        key={isMobile ? 'mobile' : 'desktop'}
        className="pointer-events-none"
        onPointerDown={(e) => {
          if (!enableControls) {
            e.stopPropagation();
            return;
          }
        }}
        style={{
          touchAction: enableControls ? 'none' : 'auto', // important for mobile scroll
        }}
        gl={{ antialias: !isMobile, powerPreference: 'low-power' }}
        frameloop={!isMobile | inView ? 'always' : 'never'}
      >
        <Suspense fallback={<Loader />}>
          <PauseCanvasWhenOffscreen inView={inView} />
          <OrbitControls
            enablePan={false}
            enabled={enableControls}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
          />
          <HeroLights />
          <Particles count={isMobile ? 30 : 50} />
          {}
          <group
            scale={isMobile ? 0.7 : 1}
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Room isMobile={isMobile} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroExperience;
