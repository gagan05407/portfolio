import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { personalInfo, aboutData, educationData, experienceData, projectsData, expertiseData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl my-8 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-dark-850">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">Gagan Gaur — Resume Preview</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6 text-slate-800 dark:text-slate-200 font-sans print:p-0 print:text-black">
          {/* Header */}
          <div className="text-center pb-4 border-b border-slate-200 dark:border-slate-800">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Gagan Gaur
            </h1>
            <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-1">
              {personalInfo.headline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 dark:text-slate-400 mt-2">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-blue-500" /> Jaipur, Rajasthan, India</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-blue-500" /> {personalInfo.phone}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:underline text-blue-600 dark:text-blue-400">
                <Mail className="w-3 h-3" /> {personalInfo.email}
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400 mt-2">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:text-blue-500 flex items-center gap-1">
                <GithubIcon className="w-3 h-3" /> github.com/gagan05407
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-500 flex items-center gap-1">
                <LinkedinIcon className="w-3 h-3" /> linkedin.com/in/gagan-gaur
              </a>
              <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" className="hover:text-blue-500 flex items-center gap-1">
                <LeetcodeIcon className="w-3 h-3 text-amber-500" /> leetcode.com/u/Gagan05407
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Software Engineering student with hands-on experience building full-stack web applications, REST APIs, database-backed systems, and AI-enabled applications using Java, Python, JavaScript, and SQL. Strong foundation in data structures, algorithms, OOP, DBMS, and operating systems, with experience in authentication, asynchronous task processing, RAG pipelines, and multi-agent systems.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2">
              {educationData.map((edu, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-white">
                    <span>{edu.institution}</span>
                    <span className="text-xs text-slate-500">{edu.period}</span>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 italic text-xs">{edu.degree}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">AI/ML:</span>{' '}
                <span className="text-slate-600 dark:text-slate-300">PyTorch, Scikit-learn, XGBoost, OpenCV, SHAP, NLP, LangChain, LangGraph, RAG, MCP, Vector Databases</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">Languages:</span>{' '}
                <span className="text-slate-600 dark:text-slate-300">Java, Python, JavaScript, SQL</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">Backend:</span>{' '}
                <span className="text-slate-600 dark:text-slate-300">Flask, FastAPI, Node.js, Express.js, REST APIs, JWT, Celery, Redis</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">Frontend:</span>{' '}
                <span className="text-slate-600 dark:text-slate-300">React.js, Vue.js, HTML5, CSS3, Tailwind CSS</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">Databases:</span>{' '}
                <span className="text-slate-600 dark:text-slate-300">PostgreSQL, MySQL, SQLite, SQLAlchemy, Prisma ORM, ChromaDB</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">CS Fundamentals:</span>{' '}
                <span className="text-slate-600 dark:text-slate-300">Data Structures & Algorithms, OOP, DBMS, OS, Computer Networks</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Key Projects
            </h2>
            <div className="space-y-3">
              {projectsData.map((project) => (
                <div key={project.id} className="text-xs">
                  <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-white">
                    <span>{project.title} <span className="font-normal text-slate-500 italic text-[11px]">| {project.technologies.slice(0, 5).join(', ')}</span></span>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline flex items-center gap-0.5 text-[11px]">
                      GitHub <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 mt-1 space-y-0.5">
                    {project.keyFeatures.slice(0, 3).map((feat, fidx) => (
                      <li key={fidx} className="leading-snug">{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Experience
            </h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="text-xs">
                <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-white">
                  <span>{exp.company} — <span className="font-medium text-slate-700 dark:text-slate-300">{exp.role}</span></span>
                  <span className="text-slate-500 text-[11px]">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 mt-1 space-y-0.5">
                  {exp.points.map((pt, pidx) => (
                    <li key={pidx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Leadership & Activities */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Leadership & Activities
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <li><strong className="text-slate-900 dark:text-white">Fashion Club Coordinator, LNMIIT:</strong> Coordinated student teams, organized campus cultural events, and managed event logistics.</li>
              <li><strong className="text-slate-900 dark:text-white">Problem Solving:</strong> Practicing Data Structures and Algorithms on LeetCode to strengthen competitive programming and algorithmic thinking.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
