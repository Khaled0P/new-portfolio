import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import PauseCanvasWhenOffscreen from '../../../hooks/PauseCanvasWhenOffscreen';

const LazyIconModel = lazy(() => import('./IconModel'));

const TechIcon = ({ model }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div ref={ref} className="w-full h-full">
      <Canvas>
        <PauseCanvasWhenOffscreen inView={inView} />
        <Suspense fallback={null}>
          <LazyIconModel model={model} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TechIcon;