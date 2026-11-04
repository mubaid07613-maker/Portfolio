'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Activity, Sparkles, EyeOff, Radio } from 'lucide-react';

export type CanvasMode = 'neural' | 'dsp' | 'off';

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<CanvasMode>('neural');
  const [showControls, setShowControls] = useState(false);
  const mouseRef = useRef({ x: -1000, y: -1000, isHovering: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || mode === 'off') return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Particle nodes for Neural mode
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
    }

    let nodes: Node[] = [];
    const nodeCount = Math.min(Math.floor((width * height) / 16000), 75);

    const initElements = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.5 + 1,
          baseAlpha: Math.random() * 0.4 + 0.2,
        });
      }
    };

    initElements();

    let wavePhase = 0;

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (mode === 'neural') {
        // Draw Neural Constellation
        const mouse = mouseRef.current;
        const maxDist = 120;
        const mouseDist = 160;

        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          // Mouse gravity
          if (mouse.isHovering) {
            const dx = mouse.x - n.x;
            const dy = mouse.y - n.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouseDist && dist > 1) {
              const force = (mouseDist - dist) / mouseDist;
              n.x += (dx / dist) * force * 0.6;
              n.y += (dy / dist) * force * 0.6;
            }
          }

          // Draw node
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${n.baseAlpha})`;
          ctx.fill();

          // Connect nearby nodes
          for (let j = i + 1; j < nodes.length; j++) {
            const n2 = nodes[j];
            const dx = n.x - n2.x;
            const dy = n.y - n2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.18;
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }

          // Connect to cursor if close
          if (mouse.isHovering) {
            const dx = mouse.x - n.x;
            const dy = mouse.y - n.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouseDist) {
              const alpha = (1 - dist / mouseDist) * 0.35;
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      } else if (mode === 'dsp') {
        // Draw DSP / Signal Waveform (Harmonic FFT Visualization)
        wavePhase += 0.015;
        const waves = 4;
        const mouseNormX = mouseRef.current.isHovering ? mouseRef.current.x / width : 0.5;

        for (let w = 0; w < waves; w++) {
          ctx.beginPath();
          const freq = (w + 1) * 0.003 * (0.8 + mouseNormX * 0.5);
          const amp = 35 + w * 18;
          const yOffset = height * 0.65 + (w - waves / 2) * 55;

          for (let x = 0; x < width; x += 6) {
            const y =
              yOffset +
              Math.sin(x * freq + wavePhase * (w + 1)) * amp +
              Math.cos(x * 0.001 + wavePhase) * (amp * 0.4);
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }

          ctx.strokeStyle =
            w % 2 === 0
              ? `rgba(56, 189, 248, ${0.12 - w * 0.02})`
              : `rgba(16, 185, 129, ${0.12 - w * 0.02})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 opacity-70 transition-opacity duration-1000"
      />

      {/* Floating Canvas Mode Pill */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#0D1017]/90 border border-white/10 shadow-2xl backdrop-blur-md">
          <button
            onClick={() => setShowControls(!showControls)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            title="Toggle Live Wallpaper Mode"
          >
            <Activity className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span className="hidden sm:inline">Wallpaper:</span>
            <span className="text-sky-400 font-semibold capitalize">{mode}</span>
          </button>

          {showControls && (
            <div className="flex items-center gap-1 pl-1 border-l border-white/10">
              <button
                onClick={() => setMode('neural')}
                className={`p-1.5 rounded-full text-xs transition-colors ${
                  mode === 'neural'
                    ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Neural / Constellation Mode (AI/ML)"
              >
                <Sparkles className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setMode('dsp')}
                className={`p-1.5 rounded-full text-xs transition-colors ${
                  mode === 'dsp'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Signal / Waveform Mode (DSP / FFT)"
              >
                <Radio className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setMode('off')}
                className={`p-1.5 rounded-full text-xs transition-colors ${
                  mode === 'off'
                    ? 'bg-white/20 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Turn Wallpaper Off"
              >
                <EyeOff className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

