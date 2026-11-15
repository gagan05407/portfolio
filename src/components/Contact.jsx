import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  Code, 
  Check, 
  Copy, 
  MessageSquare, 
  Sparkles,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setFeedbackMsg('Please complete all required fields.');
      return;
    }

    setStatus('submitting');
    setFeedbackMsg('');

    try {
      const response = await fetch('https://formspree.io/f/mqaejebk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact Inquiry',
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFeedbackMsg('Thank you! Your message has been sent directly to Gagan.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        throw new Error('Form service notice');
      }
    } catch (err) {
      // Fallback: Trigger direct mailto link with pre-filled content
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Gagan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      
      setStatus('success');
      setFeedbackMsg('Opening your email client to send this message directly...');
      window.location.href = mailtoUrl;

      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S BUILD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Let's build something great together.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            I'm always interested in discussing interesting engineering problems, AI systems, software development opportunities, and collaborations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Contact Layout: Info Cards on Left, Functional Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card with Copy button */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-dark-900 hover:bg-slate-200 dark:hover:bg-dark-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Direct Email Contact</div>
              <a
                href={personalInfo.socials.email}
                className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white hover:text-blue-500 transition-colors block mt-1 break-all"
              >
                {personalInfo.email}
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Usually responds within 24 hours. Open for conversations with hiring managers and founders.
              </p>
            </div>

            {/* Phone & Location Info */}
            <div className="p-6 rounded-3xl bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-900 flex items-center justify-center text-blue-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Direct Phone</div>
                  <div className="text-sm font-semibold font-mono text-slate-900 dark:text-white">
                    {personalInfo.phone}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-900 flex items-center justify-center text-blue-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Current Location</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="p-6 rounded-3xl bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-xs font-mono text-slate-400 uppercase mb-3">Professional Profiles</div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-semibold bg-slate-100 dark:bg-dark-900 hover:bg-slate-200 dark:hover:bg-dark-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 transition"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-semibold bg-slate-100 dark:bg-dark-900 hover:bg-slate-200 dark:hover:bg-dark-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 transition"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-semibold bg-slate-100 dark:bg-dark-900 hover:bg-slate-200 dark:hover:bg-dark-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 transition"
                >
                  <LeetcodeIcon className="w-3.5 h-3.5 text-amber-500" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-dark-850 border border-slate-200 dark:border-slate-800 shadow-sm">
              
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below to initiate a discussion, discuss an opportunity, or schedule a technical call.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-2xl text-xs sm:text-sm bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-2xl text-xs sm:text-sm bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Engineering Role / Project Discussion"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-2xl text-xs sm:text-sm bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your team, challenge, or what you'd like to collaborate on..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-2xl text-xs sm:text-sm bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none font-sans"
                  ></textarea>
                </div>

                {/* Status Message */}
                {feedbackMsg && (
                  <div className={`p-3 rounded-2xl text-xs flex items-center gap-2 ${
                    status === 'success'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                  }`}>
                    {status === 'success' ? <Check className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                    <span>{feedbackMsg}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-blue-600/20 hover:shadow-glow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Dispatching Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
