'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Menu, X, FileDown, Terminal } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Engineering Lab', href: '#workbench' },
    { name: 'Projects', href: '#projects' },
    { name: 'Mastery Hub', href: '#knowledge-hub' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#08090C]/85 backdrop-blur-md border-b border-white/[0.07] shadow-xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Monogram */}
          <a
            href="#overview"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 group-hover:border-sky-500/40 transition-all shadow-inner">
              <span className="font-mono text-sm font-bold text-sky-400 group-hover:text-white transition-colors">
                UR
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-sky-300 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                BZU Multan • CE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[#0E121A]/70 border border-white/[0.07] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-sky-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button: Download Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={portfolioData.personal.resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-sky-400/40 transition-all shadow-sm group"
            >
              <FileDown className="w-3.5 h-3.5 text-sky-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#0D1017] border border-white/10 shadow-2xl space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              <a
                href={portfolioData.personal.resumeDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40"
              >
                <FileDown className="w-4 h-4 text-sky-400" />
                Download Resume PDF
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
