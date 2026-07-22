import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Zap,
  Layers,
} from 'lucide-react';

import servicesData from '../data/services.json';
import projectsData from '../data/projects.json';

export const Home: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  const stats = [
    { value: '45+', label: t('hero.stats.projects') },
    { value: '30+', label: t('hero.stats.clients') },
    { value: '99.9%', label: t('hero.stats.uptime') },
    { value: '98%', label: t('hero.stats.satisfaction') },
  ];

  const whyUs = [
    {
      icon: Sparkles,
      title: t('why.1.title'),
      desc: t('why.1.desc'),
    },
    {
      icon: Zap,
      title: t('why.2.title'),
      desc: t('why.2.desc'),
    },
    {
      icon: Layers,
      title: t('why.3.title'),
      desc: t('why.3.desc'),
    },
    {
      icon: ShieldCheck,
      title: t('why.4.title'),
      desc: t('why.4.desc'),
    },
  ];

  const processSteps = [
    { num: '01', title: t('process.1.title'), desc: t('process.1.desc') },
    { num: '02', title: t('process.2.title'), desc: t('process.2.desc') },
    { num: '03', title: t('process.3.title'), desc: t('process.3.desc') },
    { num: '04', title: t('process.4.title'), desc: t('process.4.desc') },
  ];

  return (
    <div className="relative overflow-hidden">
      <SEO />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 dark:bg-codex-darkBg transition-colors duration-300">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-codex-blue/15 dark:from-codex-blue/20 via-codex-cyan/15 dark:via-codex-cyan/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-codex-blue/10 border border-codex-blue/20 text-codex-blue dark:text-codex-cyan text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-codex-blue dark:text-codex-cyan animate-pulse" />
              <span>{t('hero.badge')}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]"
            >
              {language === 'ar' ? (
                <>
                  بناء حلول رقمية قوية <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-codex-blue via-blue-600 to-codex-cyan dark:from-codex-blue dark:via-codex-cyan dark:to-blue-400">
                    للمؤسسات والشركات الحديثة
                  </span>
                </>
              ) : (
                <>
                  Building Powerful Digital Solutions <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-codex-blue via-blue-600 to-codex-cyan dark:from-codex-blue dark:via-codex-cyan dark:to-blue-400">
                    For Modern Businesses
                  </span>
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2.5xl mx-auto leading-relaxed font-normal"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-800 dark:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-codex-blue shadow-md transition-all hover:scale-[1.02] text-center"
              >
                {t('hero.cta.portfolio')}
              </Link>
              <Link
                to="/request-project"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-codex-blue to-codex-cyan hover:opacity-95 shadow-xl shadow-codex-blue/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t('hero.cta.request')}</span>
                <ArrowIcon className="w-5 h-5" />
              </Link>
            </motion.div>

          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-codex-darkCard border border-slate-200 dark:border-slate-800 shadow-xl"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-2">
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-codex-blue to-blue-600 dark:from-codex-blue dark:to-codex-cyan">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-slate-100/70 dark:bg-slate-950/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-codex-blue dark:text-codex-cyan">
              {t('services.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {t('services.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-codex-blue dark:text-codex-cyan bg-white dark:bg-codex-blue/10 border border-slate-200 dark:border-codex-blue/20 hover:bg-codex-blue hover:text-white dark:hover:bg-codex-blue shadow-sm transition-all"
            >
              <span>{t('services.viewAll')}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="py-20 bg-slate-50 dark:bg-codex-darkBg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-codex-blue dark:text-codex-cyan">
                {t('portfolio.badge')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                {t('portfolio.title')}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl">
                {t('portfolio.subtitle')}
              </p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-codex-blue dark:text-codex-cyan hover:underline shrink-0"
            >
              <span>{t('portfolio.viewAll')}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-codex-blue/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-codex-cyan">
              {t('why.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {t('why.title')}
            </h2>
            <p className="text-slate-400 text-base">
              {t('why.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-codex-cyan/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-codex-blue/20 border border-codex-blue/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-codex-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50 dark:bg-codex-darkBg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-codex-blue dark:text-codex-cyan">
              {t('process.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {t('process.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-white dark:bg-codex-darkCard border border-slate-200 dark:border-slate-800 shadow-md">
                <div className="text-4xl font-black text-codex-blue/30 dark:text-codex-cyan/20 mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-r from-codex-blue to-blue-700 text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/request-project"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-codex-blue bg-white hover:bg-slate-100 shadow-2xl transition-transform hover:scale-[1.03]"
            >
              {t('cta.button')}
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white border-2 border-white/40 hover:bg-white/10 transition-colors"
            >
              {t('cta.contact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
