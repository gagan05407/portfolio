import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Code, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Bot, 
  Database, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import AgentNetworkGraph from './AgentNetworkGraph';

export default function Hero({ onOpenResume }) {
  const [activeVisualTab, setActiveVisualTab] = useState('agent-graph'); // 'agent-graph' | 'portrait'
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "AI Systems Engineer",
    "Full-Stack Software Engineer",
    "Agentic AI & RAG Architect",
    "Scalable Backend Developer"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/10 dark:bg-blue-500/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 dark:bg-cyan-400/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      
      {/* Subtle Linear-style grid texture */}
      <div className="absolute inset-0 bg-grid-subtle-light dark:bg-grid-subtle opacity-70 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Role Switcher, CTAs & Trust Chips */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Full-Time & Founding Engineering Roles</span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="font-mono text-[11px] opacity-90">Jaipur &bull; Remote</span>
            </div>

            {/* Big Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Engineering Intelligent Systems & Scalable Software.
              </h1>
              
              {/* Dynamic Animated Role Switcher */}
              <div className="h-10 sm:h-12 flex items-center">
                <p className="text-xl sm:text-2xl lg:text-3xl font-mono font-semibold text-slate-700 dark:text-slate-300">
                  <span className="text-blue-600 dark:text-blue-400">&gt; </span>
                  <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
                    {roles[roleIndex]}
                  </span>
                  <span className="inline-block w-2.5 h-6 ml-1 bg-blue-500 animate-pulse align-middle"></span>
                </p>
              </div>
            </div>

            {/* Main Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">Gagan Gaur</strong>. I build production-grade multi-agent architectures, explainable machine learning systems, and resilient full-stack platforms that turn complex engineering problems into clean software.
            </p>

            {/* Row of Small Trust Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
              <span className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-dark-900 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-slate-800 flex items-center gap-1.5 font-medium">
                <GraduationCap className="w-3.5 h-3.5" /> LNMIIT Jaipur (B.Tech ECE '27)
              </span>
              <span className="px-3 py-1 rounded-lg bg-cyan-50 dark:bg-dark-900 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-slate-800 flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" /> IIT Madras (BS Data Science)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                LangGraph
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                FastAPI
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                React
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                PostgreSQL
              </span>
            </div>

            {/* 3 Action Buttons: View Projects, Download Resume, Contact */}
            <div className="flex flex-wrap gap-3.5 pt-3 items-center">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-blue-600/20 hover:shadow-glow-md transition-all group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm bg-white dark:bg-dark-850 hover:bg-slate-50 dark:hover:bg-dark-800 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4 text-blue-500" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm bg-transparent hover:bg-slate-100 dark:hover:bg-dark-800 text-slate-700 dark:text-slate-300 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Profiles:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-850 text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-dark-800 border border-slate-200 dark:border-slate-800 transition"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-850 text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-dark-800 border border-slate-200 dark:border-slate-800 transition"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-850 text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:bg-slate-200 dark:hover:bg-dark-800 border border-slate-200 dark:border-slate-800 transition"
                  title="LeetCode Profile"
                  aria-label="LeetCode Profile"
                >
                  <LeetcodeIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.email}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-850 text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-dark-800 border border-slate-200 dark:border-slate-800 transition"
                  title="Email Gagan"
                  aria-label="Email Gagan"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Agent Network Graph / Portrait Switcher */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Visual Mode Selector */}
            <div className="flex items-center justify-center bg-slate-100 dark:bg-dark-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 mb-3 shadow-inner">
              <button
                onClick={() => setActiveVisualTab('agent-graph')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition ${
                  activeVisualTab === 'agent-graph'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Agent Graph (Live)</span>
              </button>
              <button
                onClick={() => setActiveVisualTab('portrait')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition ${
                  activeVisualTab === 'portrait'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Profile Portrait</span>
              </button>
            </div>

            {/* Visual Frame */}
            <div className="w-full max-w-md">
              {activeVisualTab === 'agent-graph' ? (
                <AgentNetworkGraph />
              ) : (
                <div className="relative rounded-3xl p-1 bg-gradient-to-b from-blue-500/30 via-slate-700/20 to-cyan-500/30 shadow-2xl">
                  <div className="rounded-[22px] bg-slate-900 border border-slate-800/80 p-5 text-slate-200 text-center space-y-4">
                    <div className="relative mx-auto w-52 h-52 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-xl group">
                      <img
                        src="/profile.jpg"
                        alt="Gagan Gaur - Professional Portrait"
                        className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 left-2 right-2 text-center">
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-dark-950/90 text-cyan-300 font-mono text-[10px] border border-cyan-500/30">
                          LNMIIT &bull; IIT Madras
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center font-mono">
                      <div className="p-2 rounded-xl bg-dark-950/70 border border-slate-800">
                        <div className="text-cyan-400 font-bold text-xs">AI & RAG</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">LangGraph</div>
                      </div>
                      <div className="p-2 rounded-xl bg-dark-950/70 border border-slate-800">
                        <div className="text-blue-400 font-bold text-xs">Full-Stack</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">FastAPI &bull; React</div>
                      </div>
                      <div className="p-2 rounded-xl bg-dark-950/70 border border-slate-800">
                        <div className="text-emerald-400 font-bold text-xs">DSA</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Java &bull; Python</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
