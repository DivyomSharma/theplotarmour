"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 360;
const BASE_POSITIONS = new Float32Array(PARTICLE_COUNT * 3);

for (let index = 0; index < PARTICLE_COUNT; index += 1) {
  const stride = index * 3;
  BASE_POSITIONS[stride] = (Math.random() - 0.5) * 12;
  BASE_POSITIONS[stride + 1] = (Math.random() - 0.5) * 7;
  BASE_POSITIONS[stride + 2] = (Math.random() - 0.5) * 5;
}

function ParticleCloud() {
  const pointsRef = useRef<THREE.Points>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const easedPointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useFrame((state) => {
    const points = pointsRef.current;

    if (!points) {
      return;
    }

    easedPointerRef.current.x +=
      (pointerRef.current.x - easedPointerRef.current.x) * 0.035;
    easedPointerRef.current.y +=
      (pointerRef.current.y - easedPointerRef.current.y) * 0.035;

    const positions = points.geometry.getAttribute("position");
    const array = positions.array as Float32Array;
    const elapsed = state.clock.elapsedTime;

    for (let index = 0; index < PARTICLE_COUNT; index += 1) {
      const stride = index * 3;
      const baseX = BASE_POSITIONS[stride];
      const baseY = BASE_POSITIONS[stride + 1];
      const baseZ = BASE_POSITIONS[stride + 2];

      const drift = elapsed * 0.22 + index * 0.16;
      const waveX = Math.sin(drift) * 0.11;
      const waveY = Math.cos(drift * 1.3) * 0.14;

      const dx = baseX - easedPointerRef.current.x * 4.5;
      const dy = baseY - easedPointerRef.current.y * 2.6;
      const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 0.75);
      const force = Math.min(1.2 / distance, 0.22);

      array[stride] = baseX + waveX + (dx / distance) * force;
      array[stride + 1] = baseY + waveY + (dy / distance) * force;
      array[stride + 2] = baseZ + Math.sin(drift * 0.8) * 0.05;
    }

    positions.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[BASE_POSITIONS.slice(), 3]}
          count={PARTICLE_COUNT}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#f8fafc"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.72}
        depthWrite={false}
      />
    </points>
  );
}

export function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.8], fov: 48 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#040507"]} />
      <fog attach="fog" args={["#040507", 3.6, 9]} />
      <ambientLight intensity={0.8} />
      <ParticleCloud />
    </Canvas>
  );
}
