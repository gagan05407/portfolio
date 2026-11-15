import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle, ShieldCheck } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-100/50 dark:bg-dark-900/50 border-y border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Dual Degree Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Concurrent rigorous training in engineering systems and data science.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 dark:bg-dark-900 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-slate-800">
                    {edu.status}
                  </span>
                </div>

                {/* Institution & Degree */}
                <div className="mt-5 space-y-1.5">
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {edu.institution}
                  </h3>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {edu.degree}
                  </div>
                </div>

                {/* Period & Location */}
                <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 my-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {edu.location}
                  </span>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Coursework & Focus:
                  </div>
                  <ul className="space-y-2">
                    {edu.highlights.map((item, hidx) => (
                      <li key={hidx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verified academic track */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified Academic Candidate</span>
                <span className="text-blue-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Enrolled
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
