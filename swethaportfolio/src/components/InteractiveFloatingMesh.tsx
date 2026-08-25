import React, { useEffect, useRef } from 'react';

export const InteractiveFloatingMesh: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Generate 3D floating nodes
    const nodeCount = Math.min(45, Math.floor((width * height) / 28000));
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 400 + 100, // 3D depth layer
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? 'rgba(52, 211, 153, ' : 'rgba(45, 212, 191, '
    }));

    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        // Wrap around bounds
        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        // 3D Parallax offset based on depth & mouse
        const depthFactor = (500 - node.z) / 500;
        const parallaxX = (mouse.x - width / 2) * depthFactor * 0.03;
        const parallaxY = (mouse.y - height / 2) * depthFactor * 0.03;

        const renderX = node.x + parallaxX;
        const renderY = node.y + parallaxY;
        const alpha = 0.25 * depthFactor;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(renderX, renderY, node.size * depthFactor, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}${alpha})`;
        ctx.fill();

        // Connect nearby nodes with subtle 3D depth line
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const otherDepth = (500 - other.z) / 500;
          const otherX = other.x + (mouse.x - width / 2) * otherDepth * 0.03;
          const otherY = other.y + (mouse.y - height / 2) * otherDepth * 0.03;

          const dx = renderX - otherX;
          const dy = renderY - otherY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.12 * Math.min(depthFactor, otherDepth);
            ctx.beginPath();
            ctx.moveTo(renderX, renderY);
            ctx.lineTo(otherX, otherY);
            ctx.strokeStyle = `rgba(52, 211, 153, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      style={{ willChange: 'transform' }}
    />
  );
};
