import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import { useRef, useEffect } from 'react';
import { Room } from './Optimized-room';
import HeroLights from './HeroLights';
import Particles from './Particles';
import PauseCanvasWhenOffscreen from '../../hooks/PauseCanvasWhenOffscreen';

const HeroExperience = () => {
  const isTabletQuery = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobileQuery = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletRef = useRef(isTabletQuery);
  const isMobileRef = useRef(isMobileQuery);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      isTabletRef.current = isTabletQuery;
      isMobileRef.current = isMobileQuery;
    }, 100);
    return () => clearTimeout(timer);
  }, [isTabletQuery, isMobileQuery]);

  const isTablet = isTabletRef.current;
  const isMobile = isMobileRef.current;
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>
        <Canvas 
          camera={{ position: [0, 0, 15], fov: 45 }}
          gl={{ 
            antialias: !isMobile,
            powerPreference: isMobile ? 'low-power' : 'high-performance'
          }}
        >
          <PauseCanvasWhenOffscreen inView={inView} />
          <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
          />
          <HeroLights />
          <Particles count={isMobile ? 50 : 200} />
          {/* eslint-disable-next-line react/no-unknown-property */}
          <group scale={isMobile ? 0.7 : 1} position={[0, -3.5 ,0]} rotation={[0, -Math.PI / 4, 0]}>
            <Room />
          </group>
        </Canvas>
    </div>
  );
};

export default HeroExperience;
