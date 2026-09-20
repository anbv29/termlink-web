"use client";

import { useEffect, useRef } from "react";

type TrailPoint = { x: number; y: number; born: number };

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;
    const canvas = canvasRef.current;
    const dot = dotRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !dot || !context) return;

    document.documentElement.classList.add("customCursorEnabled");
    const points: TrailPoint[] = [];
    let previous = { x: -100, y: -100 };
    let frame = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const draw = (now: number) => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      while (points.length && now - points[0].born > 430) points.shift();
      points.forEach((point) => {
        const life = 1 - (now - point.born) / 430;
        context.fillStyle = `rgba(18, 104, 232, ${Math.max(0, life) * 0.2})`;
        context.beginPath();
        context.arc(point.x, point.y, 3 + life * 4, 0, Math.PI * 2);
        context.fill();
      });
      frame = points.length ? requestAnimationFrame(draw) : 0;
    };
    const move = (event: PointerEvent) => {
      dot.style.opacity = "1";
      dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      if (Math.hypot(event.clientX - previous.x, event.clientY - previous.y) > 7) {
        points.push({ x: event.clientX, y: event.clientY, born: performance.now() });
        if (points.length > 12) points.shift();
        previous = { x: event.clientX, y: event.clientY };
        if (!frame) frame = requestAnimationFrame(draw);
      }
    };
    const leave = () => { dot.style.opacity = "0"; };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("customCursorEnabled");
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return <><canvas className="cursorCanvas" ref={canvasRef} aria-hidden="true" /><span className="cursorDot" ref={dotRef} aria-hidden="true" /></>;
}
