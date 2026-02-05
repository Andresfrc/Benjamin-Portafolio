import { useRef, useLayoutEffect } from 'react';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Liquid() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useLayoutEffect(() => {
    if (!meshRef.current) return;

    // Create a timeline that spans the entire scrollable area
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5, // smooth scrubbing
      }
    });

    // Animate Rotation
    tl.to(meshRef.current.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      ease: 'none',
    }, 0);

    // Animate Material properties (e.g. change color or roughness)
    // Note: modifying material uniforms/props via GSAP
    if(materialRef.current) {
        tl.to(materialRef.current, {
            distortion: 0.8,
            chromaticAberration: 0.5,
            ease: "power2.inOut"
        }, 0);
    }
    
    return () => {
        tl.kill();
    }
  }, []);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.2}>
        <icosahedronGeometry args={[1, 15]} /> {/* High detail sphere */}
        <MeshTransmissionMaterial
          ref={materialRef}
          backside
          samples={16}
          resolution={1024}
          transmission={1}
          roughness={0.2}
          thickness={3.5} // High thickness for refraction
          ior={1.5}
          chromaticAberration={0.1}
          anisotropy={0.3}
          distortion={0.4}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#ffffff"
          background={new THREE.Color('#000000')}
        />
      </mesh>
    </Float>
  );
}
