import React from 'react';
import { Bot, SearchCheck, Layers, ArrowRight, Sparkles, CheckCircle2, Zap } from 'lucide-react';

export default function ValueProps({ onContactClick }) {
  const capabilities = [
    {
      id: "agentic-ai",
      title: "Autonomous Agentic Systems & Multi-Agent Workflows",
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      tagline: "LangGraph • Router Architectures • MCP Tools",
      description: "Design and implement autonomous agent topologies with intelligent routing, custom tool calling via Model Context Protocol (MCP), and persistent state memory across complex multi-step workflows.",
      deliverables: [
        "Multi-agent router & worker coordination",
        "Deterministic fallback & exception guards",
        "Real-time token & event streaming APIs"
      ],
      borderGlow: "group-hover:border-cyan-500/50"
    },
    {
      id: "production-rag",
      title: "Production RAG & Semantic Intelligence Engines",
      icon: <SearchCheck className="w-6 h-6 text-blue-400" />,
      tagline: "ChromaDB • Sentence-BERT • Hybrid Retrieval",
      description: "Build high-precision Retrieval-Augmented Generation pipelines with dense vector search, lexical fallbacks, document chunking, and explainable decision attribution (SHAP) that minimize hallucinations.",
      deliverables: [
        "Sub-second vector retrieval with ChromaDB",
        "Hybrid dense + lexical similarity ranking",
        "Explainable AI decision auditing (SHAP)"
      ],
      borderGlow: "group-hover:border-blue-500/50"
    },
    {
      id: "fullstack-platforms",
      title: "Scalable Full-Stack Products & Resilient Backends",
      icon: <Layers className="w-6 h-6 text-indigo-400" />,
      tagline: "React • FastAPI • PostgreSQL • Redis & Celery",
      description: "Architect end-to-end web applications with type-safe REST APIs, relational schemas (PostgreSQL / Prisma), JWT authentication, asynchronous queue workers, and Redis caching layers.",
      deliverables: [
        "High-concurrency async APIs in FastAPI & Express",
        "Role-based access control (RBAC) & auth flows",
        "Background job queues (Celery) & caching (Redis)"
      ],
      borderGlow: "group-hover:border-indigo-500/50"
    }
  ];

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="value-props" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
            <Zap className="w-3.5 h-3.5 text-blue-500" />
            <span>FOR FOUNDERS, CTOS & ENGINEERING LEADS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            What I Can Build For Your Team
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging foundational software engineering with production AI systems to ship reliable, high-impact features.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* 3 High-Impact Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className={`group relative rounded-3xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 ${cap.borderGlow} shadow-sm hover:shadow-glow-sm transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* Icon & Tagline */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-dark-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {cap.icon}
                </div>

                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
                  {cap.tagline}
                </div>

                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white tracking-tight mb-3">
                  {cap.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Deliverables checklist */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Core Deliverables:
                </div>
                {cap.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner below */}
        <div className="mt-12 text-center">
          <button
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-blue-500/20 transition group"
          >
            <span>Have a technical problem or open role? Let's talk</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
