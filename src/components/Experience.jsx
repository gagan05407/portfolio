import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on technical engineering experience in production workflows and design validation.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container with vertical illuminated line */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-gradient-to-b from-blue-500 via-cyan-500 to-transparent ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline node icon with glow ring */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-blue-500/40 ring-4 ring-white dark:ring-dark-950 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-3 h-3" />
                </div>

                {/* Experience Card */}
                <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/40 transition-all duration-300">
                  
                  {/* Top metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-dark-900 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold mb-1">
                        {exp.badge}
                      </span>
                      <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                        {exp.company}
                      </h3>
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {exp.role}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-slate-400 space-y-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed my-4">
                    {exp.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5">
                    {exp.points.map((pt, pidx) => (
                      <div key={pidx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Transparent Disclosure Note */}
                  <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span>Automotive Hardware-Software Validation</span>
                    <span className="text-blue-500 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified Internship
                    </span>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
