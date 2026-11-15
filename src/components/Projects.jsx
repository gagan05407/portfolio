import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Cpu, 
  Sparkles, 
  ArrowUpRight, 
  Code2, 
  Bot, 
  Info,
  TrendingUp,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { label: 'All Projects', value: 'All' },
    { label: 'AI & Agents', value: 'AI & Agents' },
    { label: 'Full-Stack', value: 'Full-Stack' },
    { label: 'AI & ML', value: 'AI & ML' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  // Flagship project for Bento Grid top card
  const flagshipProject = projectsData.find(p => p.id === 'riskshield-ai');
  const otherProjects = filteredProjects.filter(p => p.id !== (filter === 'All' ? 'riskshield-ai' : ''));

  return (
    <section id="projects" className="py-20 bg-slate-100/50 dark:bg-dark-900/50 border-y border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>ENGINEERING CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Featured Projects & Systems
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Production-oriented architectures designed for high throughput, explainable intelligence, and zero-downtime workflows.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-4 py-2 rounded-2xl text-xs font-mono font-semibold transition-all ${
                filter === cat.value
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white dark:bg-dark-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="space-y-8">
          
          {/* Flagship Large Marquee Card (when viewing All or AI & ML) */}
          {(filter === 'All' || filter === 'AI & ML') && flagshipProject && (
            <div 
              onClick={() => setSelectedProject(flagshipProject)}
              className="group cursor-pointer rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 dark:from-dark-850 dark:via-dark-900 dark:to-dark-950 border-2 border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 shadow-xl hover:shadow-glow-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left side details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      ★ Flagship Case Study
                    </span>
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                      {flagshipProject.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {flagshipProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {flagshipProject.tagline}
                  </p>

                  {/* Problem & Impact Metric */}
                  <div className="p-4 rounded-2xl bg-white/80 dark:bg-dark-950/80 border border-slate-200/80 dark:border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 dark:text-white">
                      <AlertCircle className="w-3.5 h-3.5 text-blue-500" />
                      <span>One-Line Problem:</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {flagshipProject.problemSolved}
                    </p>
                  </div>

                  {/* Impact Metric Badge with TODO note */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Sub-45ms Inference &bull; Explainable SHAP Attribution</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      TODO: [Production Metrics Configurable]
                    </span>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {flagshipProject.technologies.map((t, tidx) => (
                      <span key={tidx} className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-100 dark:bg-dark-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right side live interactive simulation badge */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl p-5 bg-dark-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-3 shadow-inner">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px]">
                      <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-blue-400" />
                        <span>Live Risk Scoring Telemetry</span>
                      </span>
                      <span className="text-emerald-400">ONLINE</span>
                    </div>

                    <div className="space-y-2 text-[11px]">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between">
                        <span className="text-slate-400">Model Pipeline:</span>
                        <span className="text-blue-400 font-bold">XGBoost Classifier</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between">
                        <span className="text-slate-400">Explainability:</span>
                        <span className="text-cyan-400 font-bold">TreeSHAP Values</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between">
                        <span className="text-slate-400">Analyst Copilot:</span>
                        <span className="text-indigo-400 font-bold">RAG Retrieval</span>
                      </div>
                    </div>

                    <div className="pt-2 text-center">
                      <span className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-sans font-semibold group-hover:underline">
                        <span>Click to view full architecture & case study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-3xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800/90 hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-glow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category and Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 dark:bg-dark-900 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-slate-800">
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* One-Line Problem */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-900/80 border border-slate-200/80 dark:border-slate-800 text-xs">
                    <span className="font-mono font-bold text-slate-900 dark:text-white">Problem: </span>
                    <span className="text-slate-600 dark:text-slate-300">{project.problemSolved}</span>
                  </div>

                  {/* Impact Metric Placeholder */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
                    <span>Impact: </span>
                    <span className="text-slate-700 dark:text-slate-300 font-semibold">
                      {project.id === 'multi-agent-assistant' ? 'Zero-loss state persistence' :
                       project.id === 'placement-portal-v2' ? 'Automated eligibility engine' :
                       project.id === 'devflow-productivity' ? 'Role-based sprint workflows' :
                       'Semantic matching accuracy'}
                    </span>
                    <span className="text-[10px] text-amber-500 font-mono">TODO: [Metrics]</span>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-slate-100 dark:bg-dark-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 text-[11px] font-mono text-slate-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer bar */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-blue-500 font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                  
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-800 transition"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-blue-500 hover:bg-slate-100 dark:hover:bg-dark-800 transition"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
