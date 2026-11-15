import React from 'react';
import { Code2, BrainCircuit, Cpu, GraduationCap, CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

export default function About() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-blue-500" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-cyan-500" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-500" />;
      default:
        return <Code2 className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-100/50 dark:bg-dark-900/50 border-y border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            {aboutData.heading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Narrative & Dual Degree Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8 space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {aboutData.bio.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick Dual Degree Callout Card */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none"></div>
            
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" /> Academic Rigor
            </div>

            <div className="space-y-4">
              <div>
                <div className="font-bold font-display text-slate-900 dark:text-white text-base">
                  LNMIIT, Jaipur
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  B.Tech in Electronics & Communication (2023–2027)
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="font-bold font-display text-slate-900 dark:text-white text-base">
                  IIT Madras
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  BS in Data Science & Applications (Concurrent)
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Full-time engineering + rigorous data science</span>
            </div>
          </div>
        </div>

        {/* 3 Attractive Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutData.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative rounded-3xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-glow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-dark-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  {getIcon(pillar.icon)}
                </div>

                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white tracking-tight mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              {/* Highlights tag list */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                {pillar.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
