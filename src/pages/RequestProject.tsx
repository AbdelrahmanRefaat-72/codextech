import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { CheckCircle2, MessageSquare, Mail, Calendar, Globe, User, FileText, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const RequestProject: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'Egypt',
    serviceType: preselectedService || 'website-development',
    timeline: '1 Month',
    description: '',
  });

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

  const timelineOptions = [
    language === 'ar' ? 'أقل من أسبوعين' : 'Under 2 Weeks',
    language === 'ar' ? 'شهر واحد' : '1 Month',
    language === 'ar' ? 'من 2 إلى 3 أشهر' : '2-3 Months',
    language === 'ar' ? 'مرن حسب الاتفاق' : 'Flexible',
  ];

  // Helper to format structured inquiry text for WhatsApp & Mail
  const buildFormattedInquiryText = () => {
    const selectedServiceLabel = serviceOptions.find(s => s.id === formData.serviceType)?.label || formData.serviceType;
    return (
      `🚀 *طلب مشروع جديد — CODEX Technology*\n\n` +
      `👤 *اسم العميل:* ${formData.fullName || 'غير محدد'}\n` +
      `🏢 *الشركة:* ${formData.companyName || 'غير محدد'}\n` +
      `📧 *البريد الإلكتروني:* ${formData.email || 'غير محدد'}\n` +
      `📞 *رقم الهاتف:* ${formData.phone || 'غير محدد'}\n` +
      `🌍 *الدولة:* ${formData.country}\n` +
      `🛠️ *نوع الخدمة:* ${selectedServiceLabel}\n` +
      `⏱️ *المدة المستهدفة:* ${formData.timeline}\n\n` +
      `📝 *وصف وتفاصيل المشروع:*\n${formData.description || 'لم يتم إدخال تفاصيل إضافية'}`
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = buildFormattedInquiryText();
    const whatsappUrl = `https://wa.me/966510571307?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedServiceLabel = serviceOptions.find(s => s.id === formData.serviceType)?.label || formData.serviceType;
    const subject = `Project Request: ${selectedServiceLabel} - ${formData.fullName || 'Client'}`;
    const body = buildFormattedInquiryText();
    const mailtoUrl = `mailto:codex.tech96@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="pt-28 pb-20">
      <SEO
        title={language === 'ar' ? 'اطلب مشروعك الخاص' : 'Request a Custom Project'}
        description={language === 'ar' ? 'احصل على عرض سعر وخطة تقنية مخصصة لمشروعك من كودكس تكنولوجي. تواصل عبر الواتساب السعودي أو الجيميل مباشرة.' : 'Request a project proposal from CODEX Technology. Send formatted specifications via WhatsApp or Email directly.'}
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
          <form className="space-y-8">
            
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
                    placeholder="+966 510571307"
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

            {/* Step 3: Timeline Selection */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>3. {t('request.timeline')}</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {timelineOptions.map((tOpt) => (
                  <button
                    key={tOpt}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeline: tOpt })}
                    className={`p-3 rounded-xl text-xs font-semibold text-center transition-all border ${
                      formData.timeline === tOpt
                        ? 'bg-amber-500/10 border-amber-500 text-amber-500 font-bold'
                        : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {tOpt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Description */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-codex-blue" />
                <span>4. {t('request.description')} *</span>
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

            {/* Step 5: Submission Triggers (WhatsApp & Gmail Direct options) */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500">
                <Sparkles className="w-4 h-4 text-codex-blue" />
                <span>{language === 'ar' ? 'اختر طريقة الإرسال المباشرة:' : 'Choose Submission Channel:'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Saudi WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl transition-all hover:scale-[1.01]"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>{language === 'ar' ? 'إرسال عبر الواتساب السعودي' : 'Send via Saudi WhatsApp'}</span>
                </button>

                {/* Gmail Mailto Button */}
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-codex-blue via-codex-cyan to-blue-500 hover:opacity-95 shadow-xl transition-all hover:scale-[1.01]"
                >
                  <Mail className="w-5 h-5" />
                  <span>{language === 'ar' ? 'إرسال عبر Gmail / البريد' : 'Send via Gmail / Email'}</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                {language === 'ar'
                  ? 'عند الضغط سيتم تجهيز رسالة كاملة بالتفاصيل المحددة ويمكنك مراجعتها وتعديلها قبل الإرسال فوراً.'
                  : 'Clicking either button opens a pre-filled draft with your selected options ready for review before sending.'}
              </p>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};
