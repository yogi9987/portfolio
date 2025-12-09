'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Floating Code Block
function CodeBlock({ position, rotation, scale = 1 }: { position: [number, number, number]; rotation?: [number, number, number]; scale?: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} position={position} rotation={rotation}>
                <boxGeometry args={[2 * scale, 1.2 * scale, 0.1]} />
                <meshStandardMaterial
                    color="#1a1a2e"
                    metalness={0.8}
                    roughness={0.2}
                />
                {/* Code lines */}
                <mesh position={[-0.6 * scale, 0.3 * scale, 0.06]}>
                    <boxGeometry args={[0.6 * scale, 0.08, 0.02]} />
                    <meshStandardMaterial color="#E84545" emissive="#E84545" emissiveIntensity={0.5} />
                </mesh>
                <mesh position={[-0.3 * scale, 0.1 * scale, 0.06]}>
                    <boxGeometry args={[1 * scale, 0.08, 0.02]} />
                    <meshStandardMaterial color="#4A90A4" emissive="#4A90A4" emissiveIntensity={0.3} />
                </mesh>
                <mesh position={[0 * scale, -0.1 * scale, 0.06]}>
                    <boxGeometry args={[0.8 * scale, 0.08, 0.02]} />
                    <meshStandardMaterial color="#98C379" emissive="#98C379" emissiveIntensity={0.3} />
                </mesh>
                <mesh position={[-0.2 * scale, -0.3 * scale, 0.06]}>
                    <boxGeometry args={[1.2 * scale, 0.08, 0.02]} />
                    <meshStandardMaterial color="#E5C07B" emissive="#E5C07B" emissiveIntensity={0.3} />
                </mesh>
            </mesh>
        </Float>
    );
}

// Terminal Window
function Terminal({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
            meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.15) * 0.05;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
            <group ref={meshRef} position={position}>
                {/* Terminal frame */}
                <mesh>
                    <boxGeometry args={[3, 2, 0.15]} />
                    <meshStandardMaterial color="#0d0d0d" metalness={0.9} roughness={0.1} />
                </mesh>
                {/* Terminal header */}
                <mesh position={[0, 0.85, 0.08]}>
                    <boxGeometry args={[2.8, 0.2, 0.02]} />
                    <meshStandardMaterial color="#1a1a2e" />
                </mesh>
                {/* Terminal buttons */}
                <mesh position={[-1.2, 0.85, 0.1]}>
                    <sphereGeometry args={[0.05, 16, 16]} />
                    <meshStandardMaterial color="#E84545" emissive="#E84545" emissiveIntensity={0.8} />
                </mesh>
                <mesh position={[-1.05, 0.85, 0.1]}>
                    <sphereGeometry args={[0.05, 16, 16]} />
                    <meshStandardMaterial color="#E5C07B" emissive="#E5C07B" emissiveIntensity={0.8} />
                </mesh>
                <mesh position={[-0.9, 0.85, 0.1]}>
                    <sphereGeometry args={[0.05, 16, 16]} />
                    <meshStandardMaterial color="#98C379" emissive="#98C379" emissiveIntensity={0.8} />
                </mesh>
                {/* Terminal lines */}
                <mesh position={[-0.8, 0.5, 0.08]}>
                    <boxGeometry args={[0.8, 0.06, 0.02]} />
                    <meshStandardMaterial color="#98C379" emissive="#98C379" emissiveIntensity={0.5} />
                </mesh>
                <mesh position={[-0.5, 0.3, 0.08]}>
                    <boxGeometry args={[1.4, 0.06, 0.02]} />
                    <meshStandardMaterial color="#ABB2BF" emissive="#ABB2BF" emissiveIntensity={0.3} />
                </mesh>
                <mesh position={[-0.3, 0.1, 0.08]}>
                    <boxGeometry args={[1.8, 0.06, 0.02]} />
                    <meshStandardMaterial color="#61AFEF" emissive="#61AFEF" emissiveIntensity={0.3} />
                </mesh>
                <mesh position={[-0.6, -0.1, 0.08]}>
                    <boxGeometry args={[1.2, 0.06, 0.02]} />
                    <meshStandardMaterial color="#E84545" emissive="#E84545" emissiveIntensity={0.4} />
                </mesh>
                <mesh position={[-0.4, -0.3, 0.08]}>
                    <boxGeometry args={[1.6, 0.06, 0.02]} />
                    <meshStandardMaterial color="#C678DD" emissive="#C678DD" emissiveIntensity={0.3} />
                </mesh>
                {/* Cursor blink */}
                <mesh position={[-1.2, -0.5, 0.08]}>
                    <boxGeometry args={[0.08, 0.12, 0.02]} />
                    <meshStandardMaterial color="#E84545" emissive="#E84545" emissiveIntensity={1} />
                </mesh>
            </group>
        </Float>
    );
}

// Floating Brackets
function Bracket({ position, char, color }: { position: [number, number, number]; char: string; color: string }) {
    return (
        <Float speed={3} rotationIntensity={1} floatIntensity={2}>
            <mesh position={position}>
                <boxGeometry args={[0.3, 0.6, 0.1]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.6}
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>
        </Float>
    );
}

// Particles
function Particles() {
    const count = 100;
    const mesh = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 15;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
            mesh.current.rotation.x = state.clock.elapsedTime * 0.01;
        }
    });

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(particles, 3));
        return geo;
    }, [particles]);

    return (
        <points ref={mesh} geometry={geometry}>
            <pointsMaterial
                size={0.03}
                color="#E84545"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

// Main Scene
function Scene() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={1} color="#E84545" />
            <pointLight position={[-5, -5, 5]} intensity={0.5} color="#4A90A4" />
            <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.5} />

            {/* Main Terminal */}
            <Terminal position={[0, 0, 0]} />

            {/* Floating Code Blocks */}
            <CodeBlock position={[-3, 1.5, -2]} rotation={[0.1, 0.3, 0]} scale={0.7} />
            <CodeBlock position={[3, -1, -1.5]} rotation={[-0.1, -0.2, 0.1]} scale={0.6} />
            <CodeBlock position={[-2.5, -1.5, -1]} rotation={[0, 0.4, -0.1]} scale={0.5} />

            {/* Floating Brackets */}
            <Bracket position={[-4, 0.5, 0]} char="{" color="#E84545" />
            <Bracket position={[4, -0.5, 0]} char="}" color="#E84545" />
            <Bracket position={[-3.5, -2, 1]} char="<" color="#4A90A4" />
            <Bracket position={[3.5, 2, 1]} char=">" color="#4A90A4" />

            {/* Particles */}
            <Particles />
        </>
    );
}

export default function ThreeBackground() {
    return (
        <div className="hero-globe">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 50 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <Scene />
            </Canvas>
        </div>
    );
}
