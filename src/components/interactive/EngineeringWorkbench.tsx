'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Radio, Cpu, Brain, Sliders, Play, RotateCcw, AlertTriangle, CheckCircle, Terminal } from 'lucide-react';

export default function EngineeringWorkbench() {
  const [activeTab, setActiveTab] = useState<'dsp' | 'memory' | 'ml'>('dsp');

  // ==========================================
  // TAB 1: DSP SIGNAL SYNTHESIZER STATE
  // ==========================================
  const [freq, setFreq] = useState<number>(30); // 10Hz to 80Hz
  const [samplingRate, setSamplingRate] = useState<number>(100); // 50 to 200 Hz
  const dspCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const nyquistLimit = freq * 2;
  const isAliasing = samplingRate < nyquistLimit;

  useEffect(() => {
    if (activeTab !== 'dsp') return;
    const canvas = dspCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const render = () => {
      const w = (canvas.width = canvas.parentElement?.clientWidth || 500);
      const h = (canvas.height = 180);

      ctx.clearRect(0, 0, w, h);

      // Draw oscilloscope grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();

      // Continuous Signal (Smooth Wave)
      ctx.beginPath();
      const amp = 50;
      const cy = h / 2;
      for (let x = 0; x < w; x++) {
        const t = x / w;
        const y = cy + Math.sin(2 * Math.PI * (freq / 8) * t + phase) * amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = isAliasing ? 'rgba(239, 68, 68, 0.7)' : 'rgba(56, 189, 248, 0.8)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Discrete Sampling Points (Nyquist verification)
      const numSamples = Math.floor(samplingRate / 2.5);
      const step = w / numSamples;
      for (let i = 0; i <= numSamples; i++) {
        const x = i * step;
        const t = x / w;
        const y = cy + Math.sin(2 * Math.PI * (freq / 8) * t + phase) * amp;

        // Stem vertical line
        ctx.beginPath();
        ctx.moveTo(x, cy);
        ctx.lineTo(x, y);
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Sample node circle
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#10B981';
        ctx.fill();
      }

      phase += 0.03;
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [activeTab, freq, samplingRate, isAliasing]);

  // ==========================================
  // TAB 2: C MEMORY & POINTER SIMULATOR STATE
  // ==========================================
  interface AllocatedBlock {
    id: number;
    address: string;
    studentName: string;
    rollNumber: number;
    gpa: number;
  }
  const [heapBlocks, setHeapBlocks] = useState<AllocatedBlock[]>([
    { id: 1, address: '0x7ffee4b0', studentName: 'Ubaid Ur Rehman', rollNumber: 7613, gpa: 3.99 },
    { id: 2, address: '0x7ffee4c8', studentName: 'Laboratory Record', rollNumber: 7614, gpa: 3.85 },
  ]);
  const [nextId, setNextId] = useState(3);

  const allocateMemory = () => {
    if (heapBlocks.length >= 4) return;
    const hex = '0x7ffee' + Math.floor(Math.random() * 800 + 100).toString(16);
    setHeapBlocks([
      ...heapBlocks,
      {
        id: nextId,
        address: hex,
        studentName: `Record #${nextId}`,
        rollNumber: 7610 + nextId,
        gpa: +(Math.random() * 0.5 + 3.5).toFixed(2),
      },
    ]);
    setNextId(nextId + 1);
  };

  const freeMemory = () => {
    if (heapBlocks.length === 0) return;
    setHeapBlocks(heapBlocks.slice(0, heapBlocks.length - 1));
  };

  // ==========================================
  // TAB 3: ML DECISION TREE SIMULATOR STATE
  // ==========================================
  const [glucose, setGlucose] = useState<number>(125); // mg/dL
  const [bmi, setBmi] = useState<number>(27);

  // Decision rule derived from DecisionTreeClassifier
  let prediction = 'Negative (Non-Diabetic)';
  let confidence = 88;
  let isPositive = false;

  if (glucose > 140) {
    if (bmi > 28) {
      prediction = 'High Risk: Diabetic';
      confidence = 94;
      isPositive = true;
    } else {
      prediction = 'Borderline / Moderate Risk';
      confidence = 72;
      isPositive = true;
    }
  } else {
    if (bmi > 35) {
      prediction = 'Borderline Risk';
      confidence = 68;
      isPositive = false;
    } else {
      prediction = 'Low Risk: Non-Diabetic';
      confidence = 91;
      isPositive = false;
    }
  }

  return (
    <section id="workbench" className="py-20 relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive Engineering Laboratory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Interactive Engineering Workbench
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Live computational simulations demonstrating my three core disciplines: MATLAB Signal Sampling, C Memory Architecture, and ML Decision Trees.
            </p>
          </div>

          {/* Workbench Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.03] border border-white/10 self-start">
            <button
              onClick={() => setActiveTab('dsp')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'dsp'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span>DSP & FFT</span>
            </button>

            <button
              onClick={() => setActiveTab('memory')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'memory'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>C Memory Layout</span>
            </button>

            <button
              onClick={() => setActiveTab('ml')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'ml'
                  ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>ML Decision Tree</span>
            </button>
          </div>
        </div>

        {/* Workbench Body */}
        <div className="rounded-3xl glass-surface border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          {/* ========================================================= */}
          {/* TAB 1: DSP SIGNAL SAMPLING & NYQUIST OSCILLOSCOPE */}
          {/* ========================================================= */}
          {activeTab === 'dsp' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Continuous Signal Sampling & Nyquist Theorem</span>
                    <span className="text-xs font-mono text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                      MATLAB / Signals & Systems
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Adjust signal frequency and sampling rate to observe discrete sampling stems and test for Nyquist aliasing.
                  </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs">
                  {isAliasing ? (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Aliasing Detected! (Fs &lt; 2•Fmax)</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Nyquist Compliant (Fs &ge; 2•Fmax)</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Live Canvas Oscilloscope */}
              <div className="relative rounded-2xl bg-black/60 border border-white/10 p-2 overflow-hidden shadow-inner">
                <canvas ref={dspCanvasRef} className="w-full h-[180px] block" />
                <div className="absolute top-3 left-4 flex items-center gap-3 text-[11px] font-mono">
                  <span className="flex items-center gap-1 text-sky-400">
                    <span className="w-2.5 h-0.5 bg-sky-400"></span> Continuous x(t)
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Discrete x[n]
                  </span>
                </div>
              </div>

              {/* Interactive Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Signal Frequency (F0):</span>
                    <span className="text-sky-400 font-bold">{freq} Hz</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="70"
                    value={freq}
                    onChange={(e) => setFreq(Number(e.target.value))}
                    className="w-full accent-sky-400 cursor-pointer"
                  />
                  <div className="text-[10px] font-mono text-slate-500">
                    Minimum required sampling rate: {nyquistLimit} Hz
                  </div>
                </div>

                <div className="space-y-2 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Sampling Rate (Fs):</span>
                    <span className="text-emerald-400 font-bold">{samplingRate} Hz</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="180"
                    value={samplingRate}
                    onChange={(e) => setSamplingRate(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                  <div className="text-[10px] font-mono text-slate-500">
                    Nyquist condition: Fs &ge; 2 • {freq} Hz = {nyquistLimit} Hz
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 2: C DYNAMIC MEMORY ALLOCATION & STRUCT POINTERS */}
          {/* ========================================================= */}
          {activeTab === 'memory' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>C Dynamic Heap Allocation & Struct Pointers</span>
                    <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      Low-Level Systems in C
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Simulates heap blocks allocated via <code className="text-emerald-300">malloc(sizeof(Student))</code> with memory address pointers.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={allocateMemory}
                    disabled={heapBlocks.length >= 4}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-mono transition-all disabled:opacity-40"
                  >
                    + malloc() Block
                  </button>
                  <button
                    onClick={freeMemory}
                    disabled={heapBlocks.length === 0}
                    className="px-3.5 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 text-xs font-mono transition-all disabled:opacity-40"
                  >
                    - free(ptr)
                  </button>
                </div>
              </div>

              {/* Simulated Heap Blocks */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>HEAP MEMORY ADDRESS SPACE:</span>
                  <span>Active Blocks: {heapBlocks.length} / 4 Allocated</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {heapBlocks.map((block) => (
                    <div
                      key={block.id}
                      className="p-4 rounded-xl bg-black/50 border border-emerald-500/30 text-xs font-mono space-y-2 relative group hover:border-emerald-400 transition-all shadow-md"
                    >
                      <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5">
                        <span className="text-emerald-400 font-bold">{block.address}</span>
                        <span className="text-[10px] text-slate-500">struct Student</span>
                      </div>
                      <div className="space-y-1 text-slate-300 text-[11px]">
                        <div>name: <span className="text-white font-medium">&quot;{block.studentName}&quot;</span></div>
                        <div>rollNo: <span className="text-sky-300">{block.rollNumber}</span></div>
                        <div>gpa: <span className="text-amber-400">{block.gpa}</span></div>
                      </div>
                      <div className="text-[10px] text-emerald-400/80 pt-1 border-t border-white/[0.04]">
                        Status: Memory Safely Referenced
                      </div>
                    </div>
                  ))}
                  {heapBlocks.length === 0 && (
                    <div className="col-span-full py-8 text-center text-xs font-mono text-slate-500">
                      All heap memory freed. Zero memory leaks.
                    </div>
                  )}
                </div>
              </div>

              {/* Code Snippet Callout */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-slate-300 flex items-center justify-between">
                <div>
                  <span className="text-slate-500">// Pointer declaration:</span>{' '}
                  <span className="text-sky-400">Student*</span> ptr = (<span className="text-sky-400">Student*</span>)malloc({heapBlocks.length} * sizeof(<span className="text-sky-400">Student</span>));
                </div>
                <span className="text-emerald-400 text-[11px]">heap OK</span>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 3: ML CLASSIFICATION DECISION BOUNDARY */}
          {/* ========================================================= */}
          {activeTab === 'ml' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Clinical Diagnostic Decision Tree Simulator</span>
                    <span className="text-xs font-mono text-violet-400 px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
                      scikit-learn / Classification
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Trained DecisionTreeClassifier splitting biomarker features (Blood Glucose & BMI) into outcome classifications.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border ${
                      isPositive
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                        : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    }`}
                  >
                    {prediction}
                  </span>
                </div>
              </div>

              {/* Interactive Biomarker Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Glucose Level:</span>
                    <span className="text-violet-400 font-bold">{glucose} mg/dL</span>
                  </div>
                  <input
                    type="range"
                    min="70"
                    max="200"
                    value={glucose}
                    onChange={(e) => setGlucose(Number(e.target.value))}
                    className="w-full accent-violet-400 cursor-pointer"
                  />
                  <div className="text-[10px] font-mono text-slate-500">
                    Decision threshold split at 140 mg/dL
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Body Mass Index (BMI):</span>
                    <span className="text-sky-400 font-bold">{bmi}</span>
                  </div>
                  <input
                    type="range"
                    min="18"
                    max="45"
                    value={bmi}
                    onChange={(e) => setBmi(Number(e.target.value))}
                    className="w-full accent-sky-400 cursor-pointer"
                  />
                  <div className="text-[10px] font-mono text-slate-500">
                    Decision threshold split at 28.0 BMI
                  </div>
                </div>
              </div>

              {/* Model Decision Path Display */}
              <div className="p-4 rounded-2xl bg-black/50 border border-white/5 font-mono text-xs space-y-2">
                <div className="text-slate-500 uppercase text-[10px] tracking-wider">
                  Decision Tree Evaluation Trace:
                </div>
                <div className="text-slate-300 space-y-1">
                  <div>1. Node 0: Glucose &lt;= 140.0 mg/dL ? <span className={glucose <= 140 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>{glucose <= 140 ? 'True (Left branch)' : 'False (Right branch)'}</span></div>
                  <div>2. Node 1: BMI &lt;= 28.0 ? <span className={bmi <= 28 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>{bmi <= 28 ? 'True' : 'False'}</span></div>
                  <div className="text-sky-300 pt-1">
                    ▶ Result: {prediction} • Confidence: {confidence}% • Sample Weighting: Applied
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

