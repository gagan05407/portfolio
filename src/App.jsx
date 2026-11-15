import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import ValueProps from './components/ValueProps';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import ProblemSolving from './components/ProblemSolving';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CommandPalette from './components/CommandPalette';
import CursorSpotlight from './components/CursorSpotlight';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleCustomPaletteToggle = () => {
      setIsCommandPaletteOpen((prev) => !prev);
    };

    window.addEventListener('toggle-command-palette', handleCustomPaletteToggle);
    return () => window.removeEventListener('toggle-command-palette', handleCustomPaletteToggle);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 overflow-x-hidden selection:bg-blue-600 selection:text-white relative">
      {/* Scroll Progress Line at top */}
      <ScrollProgress />

      {/* Ambient Desktop Cursor Spotlight */}
      <CursorSpotlight />

      {/* Navigation Bar */}
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        onOpenResume={() => setIsResumeOpen(true)} 
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        
        {/* Expertise & Skills */}
        <div id="skills">
          <Expertise />
        </div>

        {/* What I Can Build For Your Team */}
        <ValueProps onContactClick={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        <Projects />
        <Experience />
        <Education />
        <ProblemSolving />
        <Leadership />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Printable & Interactive Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Universal Command Palette (Cmd+K / Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />
    </div>
  );
}
