import { useEffect, lazy, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lazy load heavy 3D components for better initial load time (bundle-dynamic-imports)
const Experience = lazy(() => import('./scene/Experience').then(m => ({ default: m.Experience })));

import { Overlay } from './sections/Overlay';
import { useIsMobile } from './utils/useIsMobile';
import { Loader } from './components/Loader';

import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const isMobile = useIsMobile();

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

    // Store callback reference for proper cleanup (client-event-listeners fix)
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000); // lenis requires ms
    };
    
    gsap.ticker.add(tickerCallback);

    // Turn off GSAP's lag smoothing to avoid jumps during heavy scroll
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Clean up with proper reference
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    }
  }, []);

  return (
    <>
      <Canvas
        dpr={isMobile ? [1, 1.5] : [1, 2]} // Cap DPR at 2.0 to avoid huge slowdowns on Retina/4K
        gl={{ 
            antialias: !isMobile, // Disable antialias on mobile for performance
            alpha: true, 
            powerPreference: "high-performance",
            stencil: false,
            depth: true 
        }} 
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none' }}
      >
        {/* Suspense boundary for lazy-loaded 3D scene */}
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <Overlay />
      <Loader />
    </>
  );
}

export default App;
