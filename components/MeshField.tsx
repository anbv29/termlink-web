"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; size: number; phase: number; hub: boolean };

export function MeshField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let nodes: Node[] = [];

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(bounds.width * ratio);
      canvas.height = Math.round(bounds.height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      nodes = Array.from({ length: Math.min(38, Math.ceil(bounds.width / 38)) }, (_, index) => ({
        x: ((index * 193) % 997) / 997 * bounds.width,
        y: ((index * 367) % 881) / 881 * bounds.height,
        vx: ((index % 5) - 2) * 0.042,
        vy: (((index + 2) % 5) - 2) * 0.034,
        size: 1.8 + (index % 4) * 0.42,
        phase: index * 0.73,
        hub: index % 7 === 0,
      }));
    };

    const draw = (now = 0) => {
      const { width, height } = canvas.getBoundingClientRect();
      context.clearRect(0, 0, width, height);
      nodes.forEach((node, index) => {
        if (!reduced) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }
        nodes.slice(index + 1).forEach((other, otherIndex) => {
          const distance = Math.hypot(node.x - other.x, node.y - other.y);
          if (distance < 190) {
            const strength = 1 - distance / 190;
            context.strokeStyle = `rgba(18, 104, 232, ${0.23 * strength})`;
            context.lineWidth = node.hub || other.hub ? 1.15 : 0.8;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.stroke();

            if ((index + otherIndex) % 13 === 0 && distance > 72) {
              const progress = (now * 0.00012 + index * 0.11) % 1;
              const packetX = node.x + (other.x - node.x) * progress;
              const packetY = node.y + (other.y - node.y) * progress;
              context.fillStyle = `rgba(18, 104, 232, ${0.35 + strength * 0.35})`;
              context.beginPath();
              context.arc(packetX, packetY, 1.7, 0, Math.PI * 2);
              context.fill();
            }
          }
        });
        const pulse = reduced ? 0 : Math.sin(now * 0.0012 + node.phase) * 0.45;
        context.shadowBlur = node.hub ? 12 : 0;
        context.shadowColor = "rgba(18, 104, 232, 0.38)";
        context.fillStyle = node.hub ? "rgba(18, 104, 232, 0.72)" : "rgba(18, 104, 232, 0.46)";
        context.beginPath();
        context.arc(node.x, node.y, node.size + pulse, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
      });
      if (!reduced) frame = requestAnimationFrame(draw);
    };

    resize();
    draw(performance.now());
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="meshField" aria-hidden="true" />;
}
