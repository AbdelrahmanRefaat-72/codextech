import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Database, Laptop, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceItem {
  id: string;
  category: string;
  icon: string;
  title: { en: string; ar: string };
  tagline: { en: string; ar: string };
  subServices: Array<{ name: { en: string; ar: string } }>;
  features: { en: string[]; ar: string[] };
  technologies: string[];
}

export const ServiceCard: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => {
  const { language, dir, t } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-7 h-7 text-codex-cyan" />;
      case 'Database': return <Database className="w-7 h-7 text-codex-cyan" />;
      case 'Laptop': return <Laptop className="w-7 h-7 text-codex-cyan" />;
      default: return <Globe className="w-7 h-7 text-codex-cyan" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-white dark:bg-codex-darkCard p-8 border border-slate-200 dark:border-slate-800 hover:border-codex-blue/50 dark:hover:border-codex-blue/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-codex-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="p-3.5 rounded-xl bg-codex-blue/10 dark:bg-codex-blue/20 border border-codex-blue/20 group-hover:scale-110 transition-transform">
            {renderIcon(service.icon)}
          </div>
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
            0{index + 1}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-codex-blue dark:group-hover:text-codex-cyan transition-colors">
          {service.title[language]}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          {service.tagline[language]}
        </p>

        {/* Sub-services list */}
        <div className="space-y-2 mb-6">
          {service.subServices.map((sub, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-codex-blue shrink-0" />
              <span>{sub.name[language]}</span>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {service.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer link */}
      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-sm font-bold text-codex-blue dark:text-codex-cyan hover:underline group-hover:gap-3 transition-all pt-4 border-t border-slate-100 dark:border-slate-800/80"
      >
        <span>{t('services.viewAll')}</span>
        <ArrowIcon className="w-4 h-4" />
      </Link>
    </motion.div>
  );
};
