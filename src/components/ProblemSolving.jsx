import React from 'react';
import { 
  Code, 
  ExternalLink, 
  CheckCircle2, 
  Flame, 
  Award, 
  Binary, 
  Cpu, 
  Zap, 
  Compass, 
  Terminal 
} from 'lucide-react';
import { problemSolvingData } from '../data/portfolioData';

export default function ProblemSolving() {
  return (
    <section id="dsa" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20">
            <Binary className="w-3.5 h-3.5" />
            <span>DATA STRUCTURES & ALGORITHMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Problem Solving & DSA
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {problemSolvingData.tagline}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Top Banner: LeetCode Verified Badge & Profile Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-amber-500/10 via-slate-900/10 to-blue-500/10 dark:from-amber-500/10 dark:via-dark-900 dark:to-blue-500/10 border border-amber-500/20 dark:border-amber-500/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500 font-bold text-2xl shadow-sm">
                <Code className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    LeetCode Profile: <span className="font-mono text-amber-500">@{problemSolvingData.username}</span>
                  </h3>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Active problem solving across algorithmic paradigms with Java & Python implementations.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={problemSolvingData.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md shadow-amber-500/20 transition-all"
              >
                <span>Visit LeetCode Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

        {/* Pillars of Engineering Problem Solving */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {problemSolvingData.pillars.map((pillar, pidx) => (
            <div
              key={pidx}
              className="p-6 rounded-2xl bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                  {pidx === 0 ? <Zap className="w-5 h-5" /> : pidx === 1 ? <Cpu className="w-5 h-5" /> : <Compass className="w-5 h-5" />}
                </div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-amber-500 font-semibold">
                Core Principle 0{pidx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Topics & Language Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Key Topics Covered */}
          <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Key Topic Competencies
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              Targeted practice across fundamental and advanced patterns.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {problemSolvingData.topics.map((topic, tidx) => (
                <div
                  key={tidx}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-dark-900 border border-slate-200/80 dark:border-slate-800"
                >
                  <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                    {topic.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    {topic.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Language Strengths for DSA */}
          <div className="lg:col-span-5 rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Language Specialization
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                Primary languages leveraged for algorithmic challenges.
              </p>

              <div className="space-y-4">
                {problemSolvingData.languages.map((lang, lidx) => (
                  <div key={lidx} className="p-4 rounded-xl bg-slate-50 dark:bg-dark-900 border border-slate-200/80 dark:border-slate-800">
                    <div className="flex items-center justify-between font-bold text-sm text-slate-900 dark:text-white mb-1">
                      <span>{lang.name}</span>
                      <span className="text-[11px] font-mono text-emerald-500">DSA Ready</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {lang.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-400 text-center">
              Consistent practice &bull; Verified on LeetCode
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
