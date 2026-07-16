"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import type { Group, Mesh } from "three";

type TokenShape = "icosahedron" | "dodecahedron" | "octahedron" | "torus" | "tetrahedron";

interface TokenDef {
  shape: TokenShape;
  position: [number, number, number];
  scale: number;
  color: string;
  distort: boolean;
  speed: number;
  rotationSpeed: number;
}

/**
 * Hand-placed "game tokens" — seeds, pebbles and abstract solids in a
 * Ghanaian palette. Positions are fixed for deliberate composition rather
 * than random scatter.
 */
const TOKENS: TokenDef[] = [
  { shape: "icosahedron", position: [-4.4, 1.9, -2.4], scale: 0.95, color: "#e8b923", distort: true, speed: 1.1, rotationSpeed: 0.2 },
  { shape: "dodecahedron", position: [3.3, 0.6, -2], scale: 1.35, color: "#1e824c", distort: false, speed: 0.9, rotationSpeed: -0.25 },
  { shape: "torus", position: [1.8, 2.1, -1.5], scale: 0.7, color: "#c4551d", distort: false, speed: 1.4, rotationSpeed: 0.4 },
  { shape: "octahedron", position: [-3.7, -2.2, -1.6], scale: 0.78, color: "#a8332a", distort: false, speed: 1.2, rotationSpeed: 0.3 },
  { shape: "tetrahedron", position: [2.6, -1.9, 0], scale: 0.85, color: "#b3860f", distort: false, speed: 1.0, rotationSpeed: -0.35 },
  { shape: "icosahedron", position: [-4.2, -0.4, -2.5], scale: 0.7, color: "#b8551b", distort: true, speed: 1.3, rotationSpeed: 0.22 },
  { shape: "dodecahedron", position: [0.2, -2.4, -1], scale: 0.6, color: "#7b3f00", distort: false, speed: 1.5, rotationSpeed: 0.28 },
  { shape: "torus", position: [4.1, 1.9, -3], scale: 0.55, color: "#1e824c", distort: false, speed: 1.1, rotationSpeed: -0.4 },
  { shape: "octahedron", position: [-0.6, 2.4, -2], scale: 0.65, color: "#e8b923", distort: false, speed: 1.25, rotationSpeed: 0.33 },
];

function Geometry({ shape }: { shape: TokenShape }) {
  switch (shape) {
    case "icosahedron":
      return <icosahedronGeometry args={[1, 1]} />;
    case "dodecahedron":
      return <dodecahedronGeometry args={[1, 0]} />;
    case "octahedron":
      return <octahedronGeometry args={[1, 0]} />;
    case "tetrahedron":
      return <tetrahedronGeometry args={[1, 0]} />;
    case "torus":
      return <torusGeometry args={[0.8, 0.32, 24, 64]} />;
  }
}

function Token({ def }: { def: TokenDef }) {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * def.rotationSpeed;
    ref.current.rotation.y += delta * def.rotationSpeed * 0.8;
  });

  return (
    <Float speed={def.speed} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={def.position} scale={def.scale}>
        <Geometry shape={def.shape} />
        {def.distort ? (
          <MeshDistortMaterial
            color={def.color}
            roughness={0.25}
            metalness={0.35}
            distort={0.32}
            speed={1.6}
          />
        ) : (
          <meshStandardMaterial
            color={def.color}
            roughness={0.28}
            metalness={0.45}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
}

function SceneContents() {
  const group = useRef<Group>(null);
  const tokens = useMemo(() => TOKENS, []);

  // Gentle parallax toward the pointer.
  useFrame((state) => {
    if (!group.current) return;
    const targetY = state.pointer.x * 0.35;
    const targetX = -state.pointer.y * 0.25;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
  });

  return (
    <>
      {/* Opaque light backdrop — reliable across renderers (no alpha dependency) */}
      <color attach="background" args={["#f7f1e1"]} />
      <fog attach="fog" args={["#f7f1e1", 14, 26]} />
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 6, 4]} intensity={2.4} color="#fff2cf" />
      <directionalLight position={[-6, -3, 2]} intensity={1.2} color="#c4551d" />
      <pointLight position={[0, 0, 5]} intensity={18} color="#1e824c" distance={18} />

      <group ref={group}>
        {tokens.map((def, i) => (
          <Token key={i} def={def} />
        ))}
      </group>

      <Sparkles
        count={50}
        scale={[12, 8, 6]}
        size={3}
        speed={0.3}
        opacity={0.6}
        color="#b3860f"
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 8], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <SceneContents />
    </Canvas>
  );
}
