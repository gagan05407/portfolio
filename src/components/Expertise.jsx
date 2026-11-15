import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  BrainCircuit, 
  Database, 
  Sparkles, 
  Check, 
  Terminal, 
  Cpu, 
  Server, 
  ShieldCheck,
  Search
} from 'lucide-react';
import { expertiseData } from '../data/portfolioData';

export default function Expertise() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    'software-engineering': <Code2 className="w-4 h-4" />,
    'full-stack': <Layers className="w-4 h-4" />,
    'ai-ml': <BrainCircuit className="w-4 h-4" />,
    'databases-tools': <Database className="w-4 h-4" />
  };

  const filteredCategories = expertiseData.map(cat => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean).filter(cat => cat.skills.length > 0);

  return (
    <section id="expertise" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>COMPETENCIES & STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Technical Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Proficiencies across software engineering, modern full-stack frameworks, AI agent workflows, and database systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-2xl text-xs font-mono font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white dark:bg-dark-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              All Categories
            </button>
            {expertiseData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-mono font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white dark:bg-dark-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {categoryIcons[cat.id]}
                <span>{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search stack (e.g. LangGraph)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-2xl text-xs bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-sans"
            />
          </div>
        </div>

        {/* Grouped Expertise Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800/90 shadow-sm hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      {categoryIcons[cat.id]}
                    </div>
                    <div>
                      <h3 className="font-bold font-display text-lg text-slate-900 dark:text-white">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {cat.skills.length} verified competencies
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Chips Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                  {cat.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="group/skill flex items-center justify-between px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 hover:bg-blue-50/50 dark:hover:bg-dark-800 transition-all"
                    >
                      <span className="font-medium text-xs text-slate-800 dark:text-slate-200 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-dark-950 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified in code & builds</span>
                <span className="text-emerald-500 font-semibold flex items-center gap-1">
                  <Check className="w-3 h-3" /> Production Ready
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
