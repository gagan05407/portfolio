import React from 'react';
import { ArrowUp, Mail, Code, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-950 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-xs">
                GG
              </div>
              <span className="font-bold text-base text-slate-900 dark:text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              AI Engineer | Software Engineer | Full-Stack Developer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-500 hover:bg-slate-100 dark:hover:bg-dark-800 transition"
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-500 hover:bg-slate-100 dark:hover:bg-dark-800 transition"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-dark-800 transition"
              title="LeetCode"
              aria-label="LeetCode"
            >
              <LeetcodeIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.email}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-500 hover:bg-slate-100 dark:hover:bg-dark-800 transition"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span>&copy; {currentYear} Gagan Gaur. All rights reserved.</span>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-100 dark:bg-dark-850 hover:bg-slate-200 dark:hover:bg-dark-800 text-slate-600 dark:text-slate-300 transition border border-slate-200 dark:border-slate-800"
              title="Back to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
