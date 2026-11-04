'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Activity, Sparkles, Radio, Binary, EyeOff, Sliders } from 'lucide-react';

export type CanvasMode = 'neural' | 'dsp' | 'matrix' | 'off';

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<CanvasMode>('neural');
  const [showControls, setShowControls] = useState(false);
  const mouseRef = useRef({ x: -1000, y: -1000, isHovering: false, lastMove: 0 });

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

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isHovering = true;
      mouseRef.current.lastMove = Date.now();
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // 1. NEURAL MODE PARTICLES
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      color: string;
    }

    let nodes: Node[] = [];
    const nodeCount = Math.min(Math.floor((width * height) / 14000), 85);

    // 3. MATRIX MODE DROPS
    const chars = '0123456789ABCDEFλπω∫∑√∂Δ∇';
    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops: number[] = [];

    const initElements = () => {
      // Neural nodes
      nodes = [];
      const colors = ['#38BDF8', '#10B981', '#818CF8'];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.8 + 1,
          baseAlpha: Math.random() * 0.5 + 0.25,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      // Matrix drops
      columns = Math.floor(width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -100);
      }
    };

    initElements();

    let wavePhase = 0;

    // Render loop
    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      if (mode === 'neural') {
        // --- NEURAL CONSTELLATION ---
        const maxDist = 135;
        const mouseRadius = 180;

        // Draw soft cursor spotlight glow
        if (mouse.isHovering) {
          const radial = ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            mouseRadius
          );
          radial.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
          radial.addColorStop(1, 'transparent');
          ctx.fillStyle = radial;
          ctx.fillRect(0, 0, width, height);
        }

        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          // Mouse gravity interaction
          if (mouse.isHovering) {
            const dx = mouse.x - n.x;
            const dy = mouse.y - n.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouseRadius && dist > 1) {
              const pull = (mouseRadius - dist) / mouseRadius;
              n.x += (dx / dist) * pull * 0.8;
              n.y += (dy / dist) * pull * 0.8;
            }
          }

          // Draw node circle with subtle glow
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = n.color;
          ctx.globalAlpha = n.baseAlpha;
          ctx.fill();
          ctx.globalAlpha = 1;

          // Connect nearby nodes
          for (let j = i + 1; j < nodes.length; j++) {
            const n2 = nodes[j];
            const dx = n.x - n2.x;
            const dy = n.y - n2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.22;
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
              ctx.lineWidth = 0.9;
              ctx.stroke();
            }
          }

          // Dynamic line to cursor
          if (mouse.isHovering) {
            const dx = mouse.x - n.x;
            const dy = mouse.y - n.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouseRadius) {
              const alpha = (1 - dist / mouseRadius) * 0.45;
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
              ctx.lineWidth = 1.1;
              ctx.stroke();
            }
          }
        }
      } else if (mode === 'dsp') {
        // --- INTERACTIVE DSP FREQUENCY OSCILLOSCOPE ---
        wavePhase += 0.02;
        const waves = 5;
        const normMouseX = mouse.isHovering ? mouse.x / width : 0.5;
        const normMouseY = mouse.isHovering ? mouse.y / height : 0.5;

        // Background subtle grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.lineWidth = 1;
        const gridStep = 40;
        for (let x = 0; x < width; x += gridStep) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridStep) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        // Draw multiple harmonic waveforms
        for (let w = 0; w < waves; w++) {
          ctx.beginPath();
          const freq = (w + 1) * (0.002 + normMouseX * 0.004);
          const amp = (30 + w * 20) * (0.6 + (1 - normMouseY) * 0.8);
          const yCenter = height * 0.55 + (w - waves / 2) * 50;

          for (let x = 0; x < width; x += 4) {
            const y =
              yCenter +
              Math.sin(x * freq + wavePhase * (w * 0.8 + 1)) * amp +
              Math.cos(x * 0.001 + wavePhase) * (amp * 0.35);

            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }

          const colors = [
            'rgba(56, 189, 248, 0.25)',
            'rgba(16, 185, 129, 0.25)',
            'rgba(129, 140, 248, 0.25)',
            'rgba(245, 158, 11, 0.2)',
            'rgba(236, 72, 153, 0.15)',
          ];
          ctx.strokeStyle = colors[w % colors.length];
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Floating DSP frequency readout badge in bottom left of canvas
        ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.font = '11px monospace';
        ctx.fillText(
          `DSP OSCILLOSCOPE: Fs=1000Hz | f0=${(normMouseX * 120 + 20).toFixed(
            1
          )}Hz | FFT Points=1024`,
          30,
          height - 30
        );
      } else if (mode === 'matrix') {
        // --- CYBER / ENGINEERING RAIN ---
        ctx.fillStyle = 'rgba(8, 9, 12, 0.15)';
        ctx.fillRect(0, 0, width, height);

        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Highlight lead character
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.fillText(char, x, y);

          // Trail character
          ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
          ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, y - fontSize);

          if (y > height && Math.random() > 0.985) {
            drops[i] = 0;
          }
          drops[i]++;
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
        className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-1000"
      />

      {/* Floating Canvas Mode HUD Controller */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#0B0D13]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
          <button
            onClick={() => setShowControls(!showControls)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
            title="Configure Interactive Wallpaper"
          >
            <Activity className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span className="hidden sm:inline text-slate-400">Mode:</span>
            <span className="text-sky-400 font-semibold uppercase tracking-wider">
              {mode}
            </span>
          </button>

          {showControls && (
            <div className="flex items-center gap-1 pl-1 border-l border-white/10 animate-fade-in">
              <button
                onClick={() => setMode('neural')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono transition-colors ${
                  mode === 'neural'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Neural / Graph Mode"
              >
                <Sparkles className="w-3 h-3 text-sky-400" />
                <span className="text-[10px]">Neural</span>
              </button>

              <button
                onClick={() => setMode('dsp')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono transition-colors ${
                  mode === 'dsp'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="DSP / FFT Waveform Mode"
              >
                <Radio className="w-3 h-3 text-emerald-400" />
                <span className="text-[10px]">DSP</span>
              </button>

              <button
                onClick={() => setMode('matrix')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono transition-colors ${
                  mode === 'matrix'
                    ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Engineering Binary Stream"
              >
                <Binary className="w-3 h-3 text-violet-400" />
                <span className="text-[10px]">Code</span>
              </button>

              <button
                onClick={() => setMode('off')}
                className={`p-1.5 rounded-full text-xs transition-colors ${
                  mode === 'off' ? 'bg-white/20 text-white' : 'text-slate-500 hover:text-white'
                }`}
                title="Turn Wallpaper Off"
              >
                <EyeOff className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
