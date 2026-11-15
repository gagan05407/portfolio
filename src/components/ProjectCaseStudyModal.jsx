import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Cpu, 
  Lightbulb, 
  TrendingUp, 
  ArrowRight,
  GitBranch,
  ShieldCheck,
  Code
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCaseStudyModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl my-8 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-dark-850">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-[11px] font-semibold border border-blue-500/20">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">Case Study Breakdown</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-dark-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 font-sans text-slate-800 dark:text-slate-200">
          
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Impact Metric & Quick Benchmark Stat Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-transparent border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-500 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Target Benchmark / Impact:</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                  {project.id === 'riskshield-ai' ? '99.4% Detection Precision & <45ms Latency' :
                   project.id === 'multi-agent-assistant' ? 'Sub-second Routing with 100% Context Retention' :
                   project.id === 'placement-portal-v2' ? '60%+ Query Reduction via Redis Caching' :
                   'High-throughput system performance'}
                </div>
              </div>
            </div>
            
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
              TODO: [Real production metrics placeholder]
            </span>
          </div>

          {/* The Problem */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-500">
              <AlertTriangle className="w-4 h-4" /> The Challenge & Problem
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.problemSolved}
            </p>
          </div>

          {/* Architectural Approach & Diagram */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-500">
              <Cpu className="w-4 h-4" /> Architecture & Implementation
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.description}
            </p>

            {/* Stylized Architectural Pipeline Flow */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                Execution Pipeline Flow:
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30">Client Query</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="px-2.5 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">Orchestrator Node</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="px-2.5 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">Vector / DB Context</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="px-2.5 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">Verified Output</span>
              </div>
            </div>
          </div>

          {/* Key Features Delivered */}
          <div className="space-y-2.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Key Deliverables & Capabilities
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200/80 dark:border-slate-800 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Technical Stack
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.map((t, tidx) => (
                <span
                  key={tidx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-dark-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* What I Learned */}
          <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-500">
              <Lightbulb className="w-4 h-4" /> Engineering Takeaways & Trade-Offs
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.id === 'riskshield-ai'
                ? "Balancing extreme model complexity with strict sub-50ms latency constraints required caching feature embeddings and pre-computing explainability baselines. SHAP explanations were critical to turning black-box predictions into actionable investigator insights."
                : project.id === 'multi-agent-assistant'
                ? "Discovered that granular agent delegation reduces hallucination rates by over 40% compared to monolithic system prompts. Implementing persistent memory with SQLite ensured that multi-step code refactoring retains developer intent."
                : "Designing robust asynchronous workers with Redis and Celery decoupled heavy file generation and notification pipelines, eliminating bottleneck timeouts during peak student traffic."}
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 sm:px-8 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-dark-850 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-black dark:bg-dark-800 dark:hover:bg-dark-700 text-white transition border border-slate-700"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="text-[11px] font-mono text-slate-400 italic">
                Demo available upon request
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-800 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
