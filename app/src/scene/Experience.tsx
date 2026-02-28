import { useRef, useLayoutEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Environment, Stars } from '@react-three/drei';
import { Liquid } from './Liquid';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const { camera } = useThree();
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    // Initial Camera Setup
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'body', 
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1, 
        }
      });

      // 1. Intro -> Profile
      tl.to(camera.position, {
          x: -2, 
          y: 0, 
          z: 4,
          ease: "power1.inOut"
      }, 0)
      
      // 2. Profile -> About 
      .to(camera.position, {
          x: 2, 
          y: 0.5, 
          z: 3.5, 
          ease: "power1.inOut"
      }, ">")

      // 3. About -> Philosophy 
      .to(camera.position, {
          x: -1.5,
          y: -0.5,
          z: 3,
          ease: "power1.inOut"
      }, ">")

      // 4. Philosophy -> Projects
      .to(camera.position, {
          x: 0,
          y: -1,
          z: 5,
          ease: "power1.inOut"
      }, ">")
      
      // 5. Projects -> Contact 
      .to(camera.position, {
          x: 0,
          y: 0,
          z: 7,
          ease: "power1.inOut"
      }, ">");

      timelineRef.current = tl;
    });

    return () => {
      ctx.revert();
    }
  }, [camera]);

  return (
    <>
      <color attach="background" args={['#050505']} />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#4fd1c5" />
      <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={2} color="#f6ad55" />
      
      <Environment preset="city" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <Liquid />
    </>
  );
}
