import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const PauseCanvasWhenOffscreen = ({ inView }) => {
  const { gl } = useThree();

  useEffect(() => {
    gl.setAnimationLoop(inView ? undefined : null); // resumes or pauses
  }, [inView, gl]);

  return null;
};

export default PauseCanvasWhenOffscreen;