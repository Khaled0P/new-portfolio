import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

export const RenderTrigger = ({ inView }) => {
  const { invalidate } = useThree();

  useEffect(() => {
    if (inView) invalidate();
  }, [inView, invalidate]);

  return null;
};