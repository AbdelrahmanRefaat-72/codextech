import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Globe, Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { t, language, toggleLanguage, dir } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/about', label: t('nav.about') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-codex-darkBg/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-sm'
          : 'bg-slate-50/80 dark:bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative p-0.5 rounded-xl bg-gradient-to-tr from-codex-blue to-codex-cyan shadow-md shadow-codex-blue/20 group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src="/logo.png"
                alt="CODEX Technology Logo"
                className="h-10 w-10 object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                CODEX <span className="text-codex-blue dark:text-codex-cyan text-sm font-semibold px-1.5 py-0.5 rounded bg-codex-blue/10 border border-codex-blue/20">TECH</span>
              </span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 -mt-1 tracking-wider uppercase">
                {t('slogan')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/90 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-codex-blue text-white shadow-md shadow-codex-blue/30 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-codex-blue dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar: Lang, Theme, Request Project Button */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:border-codex-blue border border-slate-200 dark:border-slate-700/80 transition-all shadow-sm"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-codex-blue" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 hover:text-codex-blue transition-all shadow-sm"
              title="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-codex-blue" />
              )}
            </button>

            {/* CTA Request Project */}
            <Link
              to="/request-project"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-codex-blue to-codex-cyan hover:opacity-95 shadow-md shadow-codex-blue/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t('nav.request')}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-codex-blue" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-codex-blue/10 border border-codex-blue/20 text-codex-blue dark:text-codex-cyan"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/95 dark:bg-codex-darkBg/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-codex-blue text-white shadow-md'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/request-project"
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-codex-blue to-codex-cyan shadow-lg text-center"
              >
                <span>{t('nav.request')}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
