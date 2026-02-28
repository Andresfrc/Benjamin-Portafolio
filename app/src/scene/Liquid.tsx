import { useRef, useLayoutEffect, useMemo } from 'react';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsMobile } from '../utils/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

export function Liquid() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const isMobile = useIsMobile();

  // Memoize configs to prevent recreation on every render (js-cache-property-access)
  const geometryArgs = useMemo<[number, number]>(() => 
    isMobile ? [1, 0] : [1, 3], // 0 = 20 faces (super fast), 3 = 1280 faces (smooth)
  [isMobile]);
  
  const config = useMemo(() => ({
    samples: isMobile ? 3 : 6, // Reduced sampling
    resolution: isMobile ? 256 : 512, // Lower internal resolution
    distortionScale: isMobile ? 0.5 : 0.3, // Slightly higher distortion on low poly to hide edges
  }), [isMobile]);

  // UseMemo for the color object to prevent reallocation on every render frame
  const backgroundColor = useMemo(() => new THREE.Color('#000000'), []);

  useLayoutEffect(() => {
    if (!meshRef.current) return;

    // Wrap in gsap.context to ensure proper cleanup in React strict mode memory leaks
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5, // smooth scrubbing
        }
      });

      // Animate Rotation
      tl.to(meshRef.current!.rotation, {
        x: Math.PI * 2,
        y: Math.PI * 2,
        ease: 'none',
      }, 0);

      // Animate Material properties 
      if(materialRef.current) {
          tl.to(materialRef.current, {
              distortion: 0.8,
              chromaticAberration: 0.5,
              ease: "power2.inOut"
          }, 0);
      }
    });

    return () => {
        ctx.revert();
    }
  }, []);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.2}>
        <icosahedronGeometry args={geometryArgs} /> 
        <MeshTransmissionMaterial
          ref={materialRef}
          backside
          samples={config.samples} 
          resolution={config.resolution} 
          transmission={1}
          roughness={0.2}
          thickness={3.5}
          ior={1.5}
          chromaticAberration={0.1}
          anisotropy={0.3}
          distortion={0.4}
          distortionScale={config.distortionScale}
          temporalDistortion={0.1}
          color="#ffffff"
          background={backgroundColor}
        />
      </mesh>
    </Float>
  );
}
