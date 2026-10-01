// components/3d/CharacterCanvas.tsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface CharacterCanvasProps {
  characterName: string;
  rankTitle: string;
}

function Procedural3DHero() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.8;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 2]} />
        <MeshWobbleMaterial 
          color="#39FF88" 
          wireframe 
          factor={0.4} 
          speed={1.5} 
          emissive="#18C875" 
          emissiveIntensity={0.5} 
        />
      </mesh>
    </Float>
  );
}

export const CharacterCanvas: React.FC<CharacterCanvasProps> = ({ characterName, rankTitle }) => {
  return (
    <div className="w-full h-80 relative rounded-2xl bg-gradient-to-b from-[#E8FFF1] to-[#B8FFD6] border-2 border-[#39FF88] shadow-[0_0_30px_rgba(57,255,136,0.3)] overflow-hidden">
      <div className="absolute top-3 left-4 z-10 bg-[#0B3D24]/80 text-[#39FF88] px-3 py-1 rounded-full text-xs font-bold tracking-wider backdrop-blur-sm">
        3D {rankTitle.toUpperCase()} • {characterName}
      </div>

      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} color="#52FF9A" intensity={2} />
        <pointLight position={[-5, -5, -5]} color="#39FF88" intensity={1} />
        <Sparkles count={60} scale={6} size={3} speed={0.4} color="#39FF88" />
        <Procedural3DHero />
        <OrbitControls enableZoom={true} enablePan={false} autoRotate={true} autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
};