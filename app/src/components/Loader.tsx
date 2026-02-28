import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

export function Loader() {
  const { active, progress } = useProgress();
  const [show, setShow] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(0);

  // Smooth progress animation
  useEffect(() => {
    if (progress > displayProgress) {
        const timer = setTimeout(() => {
            setDisplayProgress(prev => Math.min(prev + 1, progress));
        }, 10);
        return () => clearTimeout(timer);
    }
  }, [progress, displayProgress]);

  // Fade out logic when done
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setShow(false), 800); // Small delay to show 100%
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!show && !active) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#050505',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      transition: 'opacity 0.5s ease',
      opacity: progress === 100 ? 0 : 1,
      pointerEvents: progress === 100 ? 'none' : 'all',
    }}>
      <div style={{
        fontFamily: "'Inter', sans-serif",
        color: '#fff',
        fontSize: '1.5rem',
        fontWeight: 300,
        letterSpacing: '5px',
        marginBottom: '1rem',
        textTransform: 'uppercase'
      }}>
        Benjamin Forero
      </div>
      
      <div style={{
        width: '200px',
        height: '2px',
        background: 'rgba(255,255,255,0.1)',
        position: 'relative',
        borderRadius: '2px',
        overflow: 'hidden'
      }}>
        <div style={{
            width: `${Math.round(displayProgress)}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #FFD700, #FF8C00)',
            transition: 'width 0.1s linear'
        }} />
      </div>
      
      <div style={{
          marginTop: '0.5rem',
          color: '#666',
          fontSize: '0.8rem',
          fontFamily: "'Inter', sans-serif"
      }}>
          {Math.round(displayProgress)}%
      </div>
    </div>
  );
}
