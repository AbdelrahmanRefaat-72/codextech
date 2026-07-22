import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { ShieldCheck, Target, Eye, Award, Sparkles, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      name: t('about.values.quality'),
      desc: t('about.values.quality.desc'),
      icon: Award,
    },
    {
      name: t('about.values.innovation'),
      desc: t('about.values.innovation.desc'),
      icon: Sparkles,
    },
    {
      name: t('about.values.transparency'),
      desc: t('about.values.transparency.desc'),
      icon: ShieldCheck,
    },
    {
      name: t('about.values.commitment'),
      desc: t('about.values.commitment.desc'),
      icon: Target,
    },
    {
      name: t('about.values.growth'),
      desc: t('about.values.growth.desc'),
      icon: TrendingUp,
    },
  ];

  return (
    <div className="pt-28 pb-20">
      <SEO
        title={language === 'ar' ? 'من نحن — شركة كودكس تكنولوجي' : 'About Codex Technology'}
        description={language === 'ar' ? 'تعرف على قصة شركة كودكس تكنولوجي، رؤيتنا، رسالتنا، وقيمنا الجوهرية في هندسة البرمجيات.' : 'Discover Codex Technology story, vision, mission, and core engineering values (Quality, Innovation, Transparency, Commitment, Growth).'}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-codex-blue dark:text-codex-cyan">
            {t('nav.about')}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {t('about.story.title')}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            {t('about.story.text')}
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-codex-darkCard border border-slate-200 dark:border-slate-800 shadow-xl space-y-4 relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-codex-blue/10 dark:bg-codex-blue/20 border border-codex-blue/30 flex items-center justify-center">
              <Eye className="w-7 h-7 text-codex-blue dark:text-codex-cyan" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {t('about.vision.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {t('about.vision.text')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-codex-darkCard border border-slate-200 dark:border-slate-800 shadow-xl space-y-4 relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-codex-cyan/10 dark:bg-codex-cyan/20 border border-codex-cyan/30 flex items-center justify-center">
              <Target className="w-7 h-7 text-codex-cyan" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {t('about.mission.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {t('about.mission.text')}
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {t('about.values.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              The fundamental principles that guide every line of code we write.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-codex-darkCard border border-slate-200 dark:border-slate-800 hover:border-codex-blue/50 transition-all shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-codex-blue/10 dark:bg-codex-blue/20 border border-codex-blue/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-codex-blue dark:text-codex-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {val.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
