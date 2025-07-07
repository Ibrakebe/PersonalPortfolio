import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!containerRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.animationDuration = (Math.random() * 5 + 10) + 's';
      particle.style.opacity = (Math.random() * 0.2 + 0.1).toString();
      
      containerRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (containerRef.current && containerRef.current.contains(particle)) {
          containerRef.current.removeChild(particle);
        }
      }, 15000);
    };

    const interval = setInterval(createParticle, 800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
