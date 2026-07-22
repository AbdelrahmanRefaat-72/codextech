import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Github, Sparkles, Monitor, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface ProjectItem {
  id: string;
  name: { en: string; ar: string };
  category: string;
  description: { en: string; ar: string };
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  const { language, dir, t } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const hasDemo = Boolean(project.demoUrl && project.demoUrl.trim().length > 0);
  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group rounded-2xl bg-white dark:bg-codex-darkCard border border-slate-200 dark:border-slate-800 hover:border-codex-blue/60 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Project Screenshot / Cover */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.name[language]}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

          {/* Category Tag */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-codex-cyan border border-codex-cyan/30">
              {project.category}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-codex-blue dark:group-hover:text-codex-cyan transition-colors">
            {project.name[language]}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
            {project.description[language]}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="px-6 pb-6 pt-0 flex items-center gap-3">
        {hasDemo ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-codex-blue hover:bg-codex-blueHover shadow-md shadow-codex-blue/20 transition-all hover:scale-[1.02]"
          >
            <span>{t('portfolio.viewDemo')}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <Link
            to="/request-project"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-codex-blue transition-all"
          >
            <Monitor className="w-3.5 h-3.5 text-codex-blue dark:text-codex-cyan" />
            <span>{language === 'ar' ? 'اطلب نظام مشابه' : 'Request Similar System'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </Link>
        )}

        {hasGithub && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-codex-blue dark:hover:text-white hover:border-codex-blue transition-all"
            title={t('portfolio.viewGithub')}
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
};
