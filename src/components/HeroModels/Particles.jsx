/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 200 }) => {
  const mesh = useRef();
  const timeRef = useRef(0); // manually tracked time

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        initialY: Math.random() * 10 + 5,
        position: [
          (Math.random() - 0.5) * 10,
          0, // will be set based on initialY + time
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.3 + Math.random() * 0.1
      });
    }
    return temp;
  }, [count]);

  // Generate initial positions array
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      arr[i * 3] = p.position[0];
      arr[i * 3 + 1] = p.initialY;
      arr[i * 3 + 2] = p.position[2];
    });
    return arr;
  }, [count, particles]);

  useFrame((_, delta) => {
    timeRef.current += delta;
    const elapsed = timeRef.current;

    const positionAttr = mesh.current.geometry.attributes.position;
    const arr = positionAttr.array;

    for (let i = 0; i < count; i++) {
      const p = particles[i];
      const fallDistance = p.speed * elapsed;

      let y = p.initialY - fallDistance;

      if (y < -2) {
        // Reset particle to the top and update its "start time"
        p.initialY = Math.random() * 10 + 5;
        p.speed = 0.005 + Math.random() * 0.001;
        y = p.initialY;
      }

      arr[i * 3 + 1] = y;
    }

    positionAttr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
