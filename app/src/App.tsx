import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Experience } from './scene/Experience';
import { Overlay } from './sections/Overlay';

import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Sync GSAP ticker with Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // lenis requires ms
    });

    // Turn off GSAP's lag smoothing to avoid jumps during heavy scroll
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Clean up
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    }
  }, []);

  return (
    <>
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }} 
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none' }}
      >
        <Experience />
      </Canvas>
      <Overlay />
    </>
  );
}

export default App;
