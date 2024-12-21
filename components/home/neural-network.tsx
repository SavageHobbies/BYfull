"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const nodes: Node[] = [];
    const nodeCount = 40;
    const connectionDistance = 140;
    const margin = 20;
    let animationFrameId: number;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      // Get the container's computed style
      const computedStyle = window.getComputedStyle(container);
      const width = parseInt(computedStyle.width);
      const height = parseInt(computedStyle.height);
      
      // Set canvas size to match container
      canvas.width = width;
      canvas.height = height;
      
      // Scale for device pixel ratio
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      // Set CSS size
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const createNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
        });
      }
    };

    const drawNetwork = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(0, 166, 251, 0.2)';
      ctx.fillStyle = '#00A6FB';

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges with margin and improved damping
        if (node.x <= margin || node.x >= canvas.width - margin) {
          node.vx *= -0.8;
          node.x = Math.max(margin, Math.min(canvas.width - margin, node.x));
        }
        if (node.y <= margin || node.y >= canvas.height - margin) {
          node.vy *= -0.8;
          node.y = Math.max(margin, Math.min(canvas.height - margin, node.y));
        }

        // Draw connections
        nodes.forEach((otherNode) => {
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(0, 166, 251, ${opacity * 0.3})`;
            ctx.stroke();
          }
        });

        // Draw nodes
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawNetwork);
    };

    const handleResize = () => {
      resizeCanvas();
      createNodes();
    };

    // Initial setup
    handleResize();
    drawNetwork();

    // Handle resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1 }}
    />
  );
}