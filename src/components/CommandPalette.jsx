import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  FileText, 
  Code, 
  FolderGit2, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Sun, 
  Moon, 
  ExternalLink, 
  Copy, 
  Check, 
  ArrowRight,
  Sparkles,
  Command
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, onOpenResume, toggleTheme, isDark }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open in parent
          window.dispatchEvent(new CustomEvent('toggle-command-palette'));
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollTo = (id) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const actions = [
    {
      group: "Navigation",
      items: [
        { label: "Go to Projects", icon: <FolderGit2 className="w-4 h-4 text-blue-500" />, action: () => scrollTo('projects') },
        { label: "Go to Technical Expertise", icon: <Code className="w-4 h-4 text-cyan-500" />, action: () => scrollTo('expertise') },
        { label: "Go to What I Build", icon: <Sparkles className="w-4 h-4 text-violet-500" />, action: () => scrollTo('value-props') },
        { label: "Go to Problem Solving / DSA", icon: <Code className="w-4 h-4 text-amber-500" />, action: () => scrollTo('dsa') },
        { label: "Go to Professional Experience", icon: <Briefcase className="w-4 h-4 text-blue-400" />, action: () => scrollTo('experience') },
        { label: "Go to Education", icon: <GraduationCap className="w-4 h-4 text-emerald-500" />, action: () => scrollTo('education') },
        { label: "Go to Contact", icon: <Mail className="w-4 h-4 text-sky-500" />, action: () => scrollTo('contact') }
      ]
    },
    {
      group: "Actions & Tools",
      items: [
        { 
          label: "View & Print Resume", 
          icon: <FileText className="w-4 h-4 text-blue-500" />, 
          action: () => { onClose(); onOpenResume(); } 
        },
        { 
          label: copied ? "Copied Email!" : `Copy Email (${personalInfo.email})`, 
          icon: copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-400" />, 
          action: copyEmail 
        },
        { 
          label: isDark ? "Switch to Light Theme" : "Switch to Dark Theme", 
          icon: isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-500" />, 
          action: () => { toggleTheme(); onClose(); } 
        }
      ]
    },
    {
      group: "Profiles & Links",
      items: [
        { 
          label: "GitHub Profile", 
          icon: <GithubIcon className="w-4 h-4" />, 
          action: () => window.open(personalInfo.socials.github, '_blank') 
        },
        { 
          label: "LinkedIn Profile", 
          icon: <LinkedinIcon className="w-4 h-4 text-blue-500" />, 
          action: () => window.open(personalInfo.socials.linkedin, '_blank') 
        },
        { 
          label: "LeetCode Profile", 
          icon: <LeetcodeIcon className="w-4 h-4 text-amber-500" />, 
          action: () => window.open(personalInfo.socials.leetcode, '_blank') 
        }
      ]
    }
  ];

  const filteredActions = actions.map(group => ({
    ...group,
    items: group.items.filter(item => item.label.toLowerCase().includes(query.toLowerCase()))
  })).filter(group => group.items.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-dark-850">
          <Search className="w-4 h-4 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or jump to a section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none font-sans"
          />
          <div className="flex items-center gap-1.5 ml-2">
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-200 dark:bg-dark-800 rounded border border-slate-300 dark:border-slate-700">ESC</kbd>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-800 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-3">
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500 font-mono">
              No matching commands found.
            </div>
          ) : (
            filteredActions.map((group, gIdx) => (
              <div key={gIdx} className="space-y-1">
                <div className="px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                  {group.group}
                </div>
                {group.items.map((item, iIdx) => (
                  <button
                    key={iIdx}
                    onClick={item.action}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-dark-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-dark-850 flex items-center justify-center border border-slate-200 dark:border-slate-800 group-hover:border-blue-500/40">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-blue-500" />
                  </button>
                ))}
              </div>
            ))
          )}
        </div>

        {/* Bottom Help Bar */}
        <div className="px-4 py-2 bg-slate-100/60 dark:bg-dark-950/80 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
          <span>Navigate with mouse or keyboard</span>
          <span className="flex items-center gap-1">
            <Command className="w-3 h-3" /> Quick Access
          </span>
        </div>
      </div>
    </div>
  );
}
