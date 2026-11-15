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
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const categories = ['All', 'AI & Agents', 'Full-Stack', 'AI & ML'];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  const toggleExpand = (id) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-slate-100/50 dark:bg-dark-900/50 border-y border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>ENGINEERING PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Architected full-stack systems, multi-agent frameworks, explainable ML models, and production platforms.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-dark-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800/90 hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-glow-sm overflow-hidden flex flex-col justify-between"
              >
                {/* Top Subtle Gradient Accents */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${
                  project.id === 'multi-agent-assistant' ? 'from-blue-600 via-cyan-500 to-indigo-500' :
                  project.id === 'riskshield-ai' ? 'from-cyan-500 via-blue-500 to-emerald-500' :
                  project.id === 'placement-portal-v2' ? 'from-indigo-500 via-blue-500 to-purple-500' :
                  'from-blue-500 to-cyan-500'
                }`}></div>

                <div className="p-6 sm:p-8 space-y-5">
                  {/* Category and Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 dark:bg-dark-900 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-slate-800">
                      <Sparkles className="w-3 h-3" />
                      {project.badge}
                    </span>
                    
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Main Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem Solved Callout */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-900/80 border border-slate-200/80 dark:border-slate-800">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 dark:text-white mb-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-blue-500" />
                      <span>Problem Solved:</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.problemSolved}
                    </p>
                  </div>

                  {/* Key Features Checklist */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Key Highlights & Architecture
                    </div>
                    <ul className="space-y-1.5">
                      {project.keyFeatures.slice(0, isExpanded ? project.keyFeatures.length : 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {project.keyFeatures.length > 3 && (
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="text-[11px] font-mono text-blue-500 hover:underline inline-flex items-center gap-1 pt-1"
                      >
                        {isExpanded ? (
                          <><span>Show less</span> <ChevronUp className="w-3 h-3" /></>
                        ) : (
                          <><span>+{project.keyFeatures.length - 3} more features</span> <ChevronDown className="w-3 h-3" /></>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tidx) => (
                        <span
                          key={tidx}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-100 dark:bg-dark-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions & Configurable Links */}
                <div className="px-6 sm:px-8 py-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-dark-900/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-black text-white dark:bg-dark-800 dark:hover:bg-dark-700 border border-slate-700 dark:border-slate-700 transition"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code Repository</span>
                    </a>

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500 italic">
                        Docs / Demo on request
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
