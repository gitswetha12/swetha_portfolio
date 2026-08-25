import React, { useRef, useState } from 'react';

interface InteractiveTiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  glareColor?: string;
  glareOpacity?: number;
  scale?: number;
  id?: string;
}

export const InteractiveTiltCard: React.FC<InteractiveTiltCardProps> = ({
  children,
  className = '',
  maxTilt = 7,
  perspective = 1000,
  glareColor = 'rgba(52, 211, 153, 0.12)',
  glareOpacity = 0.15,
  scale = 1.015,
  id
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * maxTilt;
    const rotY = ((x - centerX) / centerX) * maxTilt;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: glareOpacity
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePosition(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      id={id}
      style={{ perspective: `${perspective}px` }}
      className={`select-none ${className}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? scale : 1}, ${isHovered ? scale : 1}, 1)`,
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
          transformStyle: 'preserve-3d'
        }}
        className="relative h-full w-full rounded-2xl transition-shadow duration-300"
      >
        {/* Dynamic Light Specular Reflection */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300 z-20"
          style={{
            background: `radial-gradient(circle 240px at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor}, transparent 80%)`,
            opacity: glarePosition.opacity > 0 ? 1 : 0
          }}
        />
        
        {/* Card Content with 3D Depth Support */}
        <div className="relative h-full w-full" style={{ transformStyle: 'preserve-3d' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
