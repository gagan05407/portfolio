import React from 'react';
import { Users, Calendar, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { leadershipData } from '../data/portfolioData';

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-slate-100/50 dark:bg-dark-900/50 border-y border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
            <Users className="w-3.5 h-3.5" />
            <span>COMMUNICATION & INITIATIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Leadership & Activities
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Demonstrated cross-functional collaboration, event execution, and community management.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Leadership Card */}
        <div className="max-w-3xl mx-auto">
          {leadershipData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {item.organization}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-6 space-y-3">
                {item.points.map((pt, pidx) => (
                  <div key={pidx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>

              {/* Tag indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Campus Cultural Community</span>
                <span className="text-emerald-500 font-semibold">Leadership Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
