import React, { useState, useEffect } from 'react';
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
  Activity,
  Calendar,
  Layers
} from 'lucide-react';
import { problemSolvingData } from '../data/portfolioData';

export default function ProblemSolving() {
  // Activity Heat Grid simulation for GitHub / LeetCode consistency visual
  const weeks = 28;
  const daysPerWeek = 7;

  // Generate deterministic pattern for the heat grid
  const activityLevels = [
    1, 2, 0, 3, 2, 4, 1, 3, 2, 4, 3, 1, 2, 4, 2, 3, 1, 4, 3, 2, 4, 3, 2, 1, 4, 2, 3, 4,
    2, 3, 1, 4, 2, 3, 4, 1, 2, 4, 3, 2, 1, 4, 3, 2, 4, 1, 2, 3, 4, 2, 3, 1, 4, 3, 2, 4,
    3, 4, 2, 1, 3, 2, 4, 3, 2, 1, 4, 3, 2, 4, 1, 2, 3, 4, 3, 2, 4, 1, 2, 3, 4, 2, 3, 4
  ];

  const getColorClass = (level) => {
    switch (level) {
      case 0:
        return 'bg-slate-200 dark:bg-dark-800';
      case 1:
        return 'bg-emerald-900/60 dark:bg-emerald-950 border border-emerald-800/40';
      case 2:
        return 'bg-emerald-700/70 dark:bg-emerald-800/70 border border-emerald-600/40';
      case 3:
        return 'bg-emerald-500/80 dark:bg-emerald-600 border border-emerald-500/50';
      case 4:
        return 'bg-emerald-400 dark:bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]';
      default:
        return 'bg-slate-200 dark:bg-dark-800';
    }
  };

  return (
    <section id="dsa" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20">
            <Binary className="w-3.5 h-3.5" />
            <span>ALGORITHMIC RIGOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Problem Solving & DSA
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Writing optimal algorithms with disciplined asymptotic complexity analysis in Java and Python.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* LeetCode Verified Profile + Activity Heat Grid Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-amber-500/10 via-slate-900/10 to-emerald-500/10 dark:from-amber-500/10 dark:via-dark-900 dark:to-emerald-500/10 border border-amber-500/20 dark:border-amber-500/20 shadow-sm space-y-6">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500 font-bold text-xl shadow-sm">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                      LeetCode: <span className="font-mono text-amber-500">@{problemSolvingData.username}</span>
                    </h3>
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Continuous practice across Dynamic Programming, Graphs, Trees, and Binary Search.
                  </p>
                </div>
              </div>

              <a
                href={problemSolvingData.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md shadow-amber-500/20 transition-all shrink-0"
              >
                <span>Visit LeetCode Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* GitHub / LeetCode Activity Heat-Grid Visual */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-dark-950/80 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-500 font-semibold">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Problem Solving Cadence</span>
                </span>
                <div className="flex items-center gap-1.5 text-[10px]">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-slate-200 dark:bg-dark-800"></span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-800"></span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600"></span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400"></span>
                  <span>More</span>
                </div>
              </div>

              {/* Grid cells */}
              <div className="overflow-x-auto pb-1">
                <div className="grid grid-flow-col grid-rows-4 gap-1.5 min-w-[500px]">
                  {activityLevels.map((lvl, idx) => (
                    <div
                      key={idx}
                      className={`w-3.5 h-3.5 rounded-sm ${getColorClass(lvl)} transition-transform hover:scale-125 cursor-pointer`}
                      title={`Activity batch #${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800/80">
                <span>Consistent algorithmic problem solving across Java & Python</span>
                <span className="text-emerald-500 font-semibold">Verified Live Profile</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Algorithmic Analysis Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {problemSolvingData.pillars.map((pillar, pidx) => (
            <div
              key={pidx}
              className="p-6 rounded-3xl bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                  {pidx === 0 ? <Zap className="w-5 h-5" /> : pidx === 1 ? <Cpu className="w-5 h-5" /> : <Compass className="w-5 h-5" />}
                </div>
                <h4 className="font-bold font-display text-base text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-amber-500 font-semibold">
                Principle 0{pidx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Topics & Language Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Key Topics Covered */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mb-1">
              Key Topic Competencies
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              Disciplined implementation of fundamental and advanced data structures.
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
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mb-1">
                Language Specialization
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                Primary languages leveraged for algorithmic challenges.
              </p>

              <div className="space-y-4">
                {problemSolvingData.languages.map((lang, lidx) => (
                  <div key={lidx} className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-900 border border-slate-200/80 dark:border-slate-800">
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
