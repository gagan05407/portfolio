import React, { useState } from 'react';
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
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'agent-console'

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 dark:bg-blue-500/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 dark:bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      {/* Subtle tech grid background */}
      <div className="absolute inset-0 bg-radial-grid-light dark:bg-radial-grid opacity-60 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="font-mono text-[11px] opacity-90">Jaipur, India</span>
            </div>

            {/* Main Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">Gagan Gaur</span>
              </h1>
              
              <div className="inline-block">
                <p className="text-lg sm:text-xl lg:text-2xl font-mono font-medium text-slate-700 dark:text-slate-300">
                  <span className="text-blue-600 dark:text-blue-400">&gt; </span>
                  {personalInfo.headline}
                </p>
              </div>
            </div>

            {/* Main Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {personalInfo.heroIntro}
            </p>

            {/* Core Interest Pills */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" /> Focus Domains & Research
              </span>
              <div className="flex flex-wrap gap-2">
                {personalInfo.heroInterests.map((interest, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-dark-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-3 items-center">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 hover:shadow-glow-md transition-all group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white dark:bg-dark-850 hover:bg-slate-50 dark:hover:bg-dark-800 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4 text-blue-500" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Connect:</span>
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

          {/* Right Column: Sophisticated Developer Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              
              {/* Card Container with subtle glowing border */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-blue-500/30 via-slate-700/20 to-cyan-500/30 shadow-2xl shadow-blue-900/20">
                <div className="rounded-[22px] bg-slate-900 border border-slate-800/80 p-5 overflow-hidden text-slate-200">
                  
                  {/* Top Header with Tab Switcher */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                      <span className="font-mono text-[11px] text-slate-400 ml-2">gagan-gaur.sys</span>
                    </div>

                    <div className="flex items-center bg-dark-950 p-0.5 rounded-lg border border-slate-800">
                      <button
                        onClick={() => setActiveTab('profile')}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition ${
                          activeTab === 'profile'
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => setActiveTab('agent-console')}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition ${
                          activeTab === 'agent-console'
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Agent Graph
                      </button>
                    </div>
                  </div>

                  {/* Tab 1: Profile View with Real Professional Photo */}
                  {activeTab === 'profile' ? (
                    <div className="pt-4 space-y-4">
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

                      {/* Micro stats banner */}
                      <div className="grid grid-cols-3 gap-2 pt-2 text-center font-mono">
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
                  ) : (
                    /* Tab 2: Interactive Multi-Agent Architecture Visualizer */
                    <div className="pt-4 space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-dark-950/90 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                            <Bot className="w-3.5 h-3.5" /> Multi-Agent Mesh
                          </span>
                          <span className="text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> ACTIVE
                          </span>
                        </div>

                        <div className="space-y-1.5 text-[11px] pt-1">
                          <div className="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800">
                            <span className="text-slate-300">RouterAgent</span>
                            <span className="text-blue-400 text-[10px]">LangGraph</span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800">
                            <span className="text-slate-300">RAG Context Engine</span>
                            <span className="text-cyan-400 text-[10px]">ChromaDB</span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800">
                            <span className="text-slate-300">Tool Execution Layer</span>
                            <span className="text-indigo-400 text-[10px]">MCP Server</span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800">
                            <span className="text-slate-300">Persistent Long Memory</span>
                            <span className="text-amber-400 text-[10px]">SQLite Store</span>
                          </div>
                        </div>
                      </div>

                      {/* Execution simulation log */}
                      <div className="p-2.5 rounded-lg bg-dark-950/60 border border-slate-800 text-[10px] text-slate-400 space-y-1">
                        <div className="text-emerald-400">$ system.diagnostics.check()</div>
                        <div>&gt; Multi-agent orchestrator: 0.02ms latency</div>
                        <div>&gt; Realtime response streaming initialized</div>
                      </div>
                    </div>
                  )}

                  {/* Footer status line */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-blue-400" />
                      <span>Ready for Impact</span>
                    </span>
                    <span className="text-slate-500">v2.4.0</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
