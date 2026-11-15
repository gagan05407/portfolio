import React, { useEffect, useRef, useState } from 'react';
import { Bot, Sparkles, CheckCircle2, Cpu, Activity } from 'lucide-react';

export default function AgentNetworkGraph() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isVisible = true;

    // Responsive sizing
    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Pause rendering when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          lastTime = performance.now();
          animate(lastTime);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Agent Graph Network definition
    const nodes = [
      { id: 'router', label: 'Router Agent', sub: 'LangGraph', xRel: 0.5, yRel: 0.22, color: '#3b82f6', pulse: 0 },
      { id: 'rag', label: 'RAG Retriever', sub: 'ChromaDB', xRel: 0.2, yRel: 0.52, color: '#06b6d4', pulse: 0.3 },
      { id: 'mcp', label: 'MCP Tools Engine', sub: 'Custom Tools', xRel: 0.8, yRel: 0.52, color: '#8b5cf6', pulse: 0.6 },
      { id: 'inference', label: 'Risk & ML Engine', sub: 'FastAPI / SHAP', xRel: 0.32, yRel: 0.82, color: '#10b981', pulse: 0.2 },
      { id: 'memory', label: 'Context Memory', sub: 'SQLite / Sessions', xRel: 0.68, yRel: 0.82, color: '#f59e0b', pulse: 0.7 },
    ];

    const edges = [
      { from: 'router', to: 'rag', progress: 0.1, speed: 0.007 },
      { from: 'router', to: 'mcp', progress: 0.6, speed: 0.008 },
      { from: 'rag', to: 'inference', progress: 0.3, speed: 0.006 },
      { from: 'mcp', to: 'memory', progress: 0.8, speed: 0.007 },
      { from: 'inference', to: 'memory', progress: 0.4, speed: 0.005 },
      { from: 'memory', to: 'router', progress: 0.2, speed: 0.006 },
    ];

    let lastTime = performance.now();

    const animate = (time) => {
      if (!isVisible) return;

      const delta = (time - lastTime) / 1000;
      lastTime = time;

      const rect = canvas.parentElement.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Draw Connection Edges
      edges.forEach((edge) => {
        const fromNode = nodes.find(n => n.id === edge.from);
        const toNode = nodes.find(n => n.id === edge.to);

        const x1 = fromNode.xRel * w;
        const y1 = fromNode.yRel * h;
        const x2 = toNode.xRel * w;
        const y2 = toNode.yRel * h;

        // Base line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.16)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated Traveling Packet
        edge.progress += edge.speed;
        if (edge.progress > 1) edge.progress = 0;

        const px = x1 + (x2 - x1) * edge.progress;
        const py = y1 + (y2 - y1) * edge.progress;

        // Packet glow
        const glowGrad = ctx.createRadialGradient(px, py, 0, px, py, 6);
        glowGrad.addColorStop(0, '#38bdf8');
        glowGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();

        // Packet core
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Nodes
      nodes.forEach((node) => {
        const x = node.xRel * w;
        const y = node.yRel * h;

        // Outer pulse circle
        node.pulse = (node.pulse + delta * 0.7) % 1;
        const pulseRadius = 16 + node.pulse * 18;
        const pulseAlpha = Math.max(0, 0.35 * (1 - node.pulse));

        ctx.beginPath();
        ctx.arc(x, y, pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(59, 130, 246, ${pulseAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Node background circle
        ctx.fillStyle = '#0a101f';
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.fill();

        // Node border
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.stroke();

        // Node inner dot
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();

        // Node Label
        ctx.fillStyle = '#f1f5f9';
        ctx.font = '600 11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, x, y + 28);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '400 9.5px "JetBrains Mono", monospace';
        ctx.fillText(node.sub, x, y + 40);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-dark-900/90 border border-slate-800/80 p-3 overflow-hidden shadow-2xl">
      {/* Top telemetry bar */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 px-2 text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
          <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Multi-Agent Runtime</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-emerald-400">STREAMING</span>
        </span>
      </div>

      {/* HTML5 Canvas */}
      <canvas ref={canvasRef} className="w-full h-[270px] cursor-crosshair" />

      {/* Bottom status line */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/60 pt-1.5">
        <span>Routing: Dynamic Graph Engine</span>
        <span className="text-cyan-400">P99 Latency: ~18ms</span>
      </div>
    </div>
  );
}
