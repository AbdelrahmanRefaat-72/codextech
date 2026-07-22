import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { ProjectCard, ProjectItem } from '../components/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

import projectsData from '../data/projects.json';

export const Portfolio: React.FC = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'web' | 'custom' | 'desktop'>('all');

  const categories = [
    { id: 'all', label: t('portfolio.all') },
    { id: 'web', label: language === 'ar' ? 'مواقع الويب' : 'Web Applications' },
    { id: 'custom', label: language === 'ar' ? 'أنظمة الإدارة' : 'Custom Management Systems' },
    { id: 'desktop', label: language === 'ar' ? 'تطبيقات سطح المكتب' : 'Desktop Applications' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <div className="pt-28 pb-20">
      <SEO
        title={language === 'ar' ? 'معرض الأعمال والمشاريع' : 'Portfolio Showcase'}
        description={language === 'ar' ? 'استعرض مشاريع كودكس تكنولوجي في تطوير المنصات والمواقع وأنظمة الإدارة والبرامج.' : 'Explore CODEX Technology portfolio projects: live demos of web platforms, clinic management, LMS education, and desktop POS software.'}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-codex-blue dark:text-codex-cyan">
            {t('portfolio.badge')}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {t('portfolio.title')}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                filter === cat.id
                  ? 'bg-codex-blue text-white shadow-lg shadow-codex-blue/30 scale-105'
                  : 'bg-white dark:bg-codex-darkCard text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-codex-blue'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project as ProjectItem} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No projects found in this category.
          </div>
        )}

      </div>
    </div>
  );
};
