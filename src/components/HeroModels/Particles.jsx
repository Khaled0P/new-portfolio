/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 200 }) => {
  const mesh = useRef();
  const startTime = useRef(performance.now()); // store absolute start time

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        initialY: Math.random() * 10 + 5,
        position: [
          (Math.random() - 0.5) * 10,
          0,
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.3 + Math.random() * 0.1,
        birthTime: 0, // new particle's birth time
      });
    }
    return temp;
  }, [count]);

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
  const positionAttr = mesh.current.geometry.attributes.position;
  const arr = positionAttr.array;

  for (let i = 0; i < count; i++) {
    const p = particles[i];

    // Move particle down
    arr[i * 3 + 1] -= p.speed * delta;

    // If particle is below the floor, reset it
    if (arr[i * 3 + 1] < -2) {
      arr[i * 3] = (Math.random() - 0.5) * 10;         // random X
      arr[i * 3 + 1] = Math.random() * 10 + 5;         // reset Y at top
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;     // random Z
      p.speed = 0.3 + Math.random() * 0.1;             // restore normal speed
    }
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
