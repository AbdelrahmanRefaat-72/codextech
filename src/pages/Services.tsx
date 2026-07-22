import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Globe, Database, Laptop, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

import servicesData from '../data/services.json';

export const Services: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (key: string) => {
    setActiveFaq(prev => (prev === key ? null : key));
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-8 h-8 text-codex-cyan" />;
      case 'Database': return <Database className="w-8 h-8 text-codex-cyan" />;
      case 'Laptop': return <Laptop className="w-8 h-8 text-codex-cyan" />;
      default: return <Globe className="w-8 h-8 text-codex-cyan" />;
    }
  };

  return (
    <div className="pt-28 pb-20">
      <SEO
        title={language === 'ar' ? 'الخدمات والحلول البرمجية' : 'Engineering Services'}
        description={language === 'ar' ? 'استعرض خدمات كودكس تكنولوجي في تطوير المواقع، أنظمة الإدارة المخصصة، وتطبيقات سطح المكتب.' : 'Explore CODEX Technology software engineering services: custom web apps, ERP systems, clinic platforms, and desktop software.'}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-codex-blue dark:text-codex-cyan">
            {t('services.badge')}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {t('services.title')}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white dark:bg-codex-darkCard border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Main Overview & Sub-services */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-codex-blue/10 dark:bg-codex-blue/20 border border-codex-blue/20">
                      {renderIcon(service.icon)}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                        {service.title[language]}
                      </h2>
                      <p className="text-sm font-semibold text-codex-blue dark:text-codex-cyan">
                        {service.tagline[language]}
                      </p>
                    </div>
                  </div>

                  {/* Sub-services Grid */}
                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      {language === 'ar' ? 'التخصصات المشمولة:' : 'Sub-Services Included:'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.subServices.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 text-sm font-semibold text-slate-800 dark:text-slate-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-codex-blue shrink-0" />
                          <span>{sub.name[language]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features Bullet List */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      {language === 'ar' ? 'مميزات الحلول لدينا:' : 'Key Engineering Features:'}
                    </h3>
                    <div className="space-y-2">
                      {service.features[language].map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-codex-cyan shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech & CTA Sidebar */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                      {language === 'ar' ? 'التقنيات المستخدمة:' : 'Technologies Used:'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-semibold px-3 py-1 rounded-lg bg-white dark:bg-codex-darkCard text-codex-blue dark:text-codex-cyan border border-slate-200 dark:border-slate-700 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* FAQs for Service */}
                  {service.faqs && service.faqs.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {language === 'ar' ? 'الأسئلة الشائعة:' : 'Frequently Asked:'}
                      </h4>
                      {service.faqs.map((faq, qIdx) => {
                        const faqKey = `${service.id}-${qIdx}`;
                        const isOpen = activeFaq === faqKey;
                        return (
                          <div
                            key={faqKey}
                            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-codex-darkCard overflow-hidden text-xs"
                          >
                            <button
                              onClick={() => toggleFaq(faqKey)}
                              className="w-full p-3 text-left font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between gap-2"
                            >
                              <span>{faq.question[language]}</span>
                              {isOpen ? <ChevronUp className="w-4 h-4 text-codex-blue shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                            </button>
                            {isOpen && (
                              <div className="px-3 pb-3 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-2">
                                {faq.answer[language]}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Direct Request CTA */}
                  <Link
                    to={`/request-project?service=${service.id}`}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-codex-blue to-codex-cyan hover:opacity-95 shadow-lg transition-all"
                  >
                    <span>{t('hero.cta.request')}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
