import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { CheckCircle2, Rocket, ArrowRight, ArrowLeft, DollarSign, Calendar, Globe, Building2, User, Mail, Phone, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export const RequestProject: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'Egypt',
    serviceType: preselectedService || 'website-development',
    budgetRange: '$3,000 - $7,000',
    timeline: '1 Month',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    { id: 'website-development', label: language === 'ar' ? 'تطوير موقع إلكتروني' : 'Website Development' },
    { id: 'custom-management-systems', label: language === 'ar' ? 'نظام إدارة مخصص (ERP/CRM)' : 'Custom Management System (ERP)' },
    { id: 'desktop-applications', label: language === 'ar' ? 'تطبيق سطح مكتب (Desktop App)' : 'Desktop Application' },
    { id: 'other', label: language === 'ar' ? 'استشارة برمجية أخرى' : 'Other Tech Solution' },
  ];

  const budgetOptions = [
    '$1,000 - $3,000',
    '$3,000 - $7,000',
    '$7,000 - $15,000',
    '$15,000+',
  ];

  const timelineOptions = [
    language === 'ar' ? 'أقل من أسبوعين' : 'Under 2 Weeks',
    language === 'ar' ? 'شهر واحد' : '1 Month',
    language === 'ar' ? 'من 2 إلى 3 أشهر' : '2-3 Months',
    language === 'ar' ? 'مرن حسب الاتفاق' : 'Flexible',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.description) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20">
      <SEO
        title={language === 'ar' ? 'اطلب مشروعك الخاص' : 'Request a Custom Project'}
        description={language === 'ar' ? 'احصل على عرض سعر وخطة تقنية مخصصة لمشروعك من كودكس تكنولوجي.' : 'Request a project proposal from CODEX Technology. Get exact budget, timeline, and tech stack specification.'}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-codex-blue dark:text-codex-cyan">
            {t('nav.request')}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {t('request.title')}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t('request.subtitle')}
          </p>
        </div>

        <div className="rounded-3xl bg-white dark:bg-codex-darkCard border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-2xl">
          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-6"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                <Rocket className="w-10 h-10 animate-bounce" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                {t('request.success')}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
                We have logged your specifications. You will receive an official technical estimate and proposal in your email inbox within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                }}
                className="px-8 py-3 rounded-xl text-xs font-bold text-white bg-codex-blue hover:bg-codex-blueHover shadow-md"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Step 1: Personal & Business info */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
                  <User className="w-5 h-5 text-codex-blue" />
                  <span>1. {language === 'ar' ? 'بيانات العميل والتواصل' : 'Contact & Business Details'}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">
                      {t('request.fullName')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-codex-blue"
                      placeholder="Ahmed Mohamed"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">
                      {t('request.company')}
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-codex-blue"
                      placeholder="Codex Global Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">
                      {t('request.email')} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-codex-blue"
                      placeholder="client@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">
                      {t('request.phone')}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-codex-blue"
                      placeholder="+20 1500236633"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">
                      {t('request.country')}
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-codex-blue"
                    >
                      <option value="Egypt">Egypt (مصر)</option>
                      <option value="Saudi Arabia">Saudi Arabia (المملكة العربية السعودية)</option>
                      <option value="United Arab Emirates">United Arab Emirates (الإمارات)</option>
                      <option value="Kuwait">Kuwait (الكويت)</option>
                      <option value="Qatar">Qatar (قطر)</option>
                      <option value="United States">United States</option>
                      <option value="Other">Other / International</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Service Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-codex-cyan" />
                  <span>2. {t('request.serviceType')}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceType: opt.id })}
                      className={`p-4 rounded-xl border text-left font-bold text-sm transition-all flex items-center justify-between ${
                        formData.serviceType === opt.id
                          ? 'border-codex-blue bg-codex-blue/10 text-codex-blue dark:text-codex-cyan shadow-md'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {formData.serviceType === opt.id && <CheckCircle2 className="w-4 h-4 text-codex-blue shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    <span>{t('request.budget')}</span>
                  </h4>
                  <div className="space-y-2">
                    {budgetOptions.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, budgetRange: b })}
                        className={`w-full p-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                          formData.budgetRange === b
                            ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
                            : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>{t('request.timeline')}</span>
                  </h4>
                  <div className="space-y-2">
                    {timelineOptions.map((tOpt) => (
                      <button
                        key={tOpt}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: tOpt })}
                        className={`w-full p-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                          formData.timeline === tOpt
                            ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                            : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {tOpt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 4: Description */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-codex-blue" />
                  <span>{t('request.description')} *</span>
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-codex-blue"
                  placeholder="Describe your goals, main features, or existing systems..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-codex-blue via-codex-cyan to-blue-500 hover:opacity-95 shadow-xl shadow-codex-blue/30 transition-all hover:scale-[1.01]"
              >
                <span>{t('request.submit')}</span>
                <ArrowIcon className="w-5 h-5" />
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
