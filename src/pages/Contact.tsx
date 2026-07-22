import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Facebook, Instagram, Linkedin, Github, Twitter, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { name: 'TikTok', href: 'https://tiktok.com', icon: Code2 },
    { name: 'X', href: 'https://x.com', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com', icon: Github },
  ];

  return (
    <div className="pt-28 pb-20">
      <SEO
        title={language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
        description={language === 'ar' ? 'تواصل مع فريق كودكس تكنولوجي عبر البريد الإلكتروني codex.tech96@gmail.com أو الهاتف.' : 'Get in touch with Codex Technology. Call Egypt branch 01500236633 or Saudi branch +966510571307.'}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-codex-blue dark:text-codex-cyan">
            {t('nav.contact')}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {t('contact.title')}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-codex-darkCard border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
              
              <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                {language === 'ar' ? 'معلومات الاتصال المباشرة' : 'Direct Channels'}
              </h2>

              {/* Email */}
              <a
                href="mailto:codex.tech96@gmail.com"
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-codex-blue transition-all group"
              >
                <div className="p-3 rounded-xl bg-codex-blue/10 dark:bg-codex-blue/20 text-codex-blue dark:text-codex-cyan group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-400">
                    {t('contact.email')}
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">
                    codex.tech96@gmail.com
                  </div>
                </div>
              </a>

              {/* Egypt Phone */}
              <a
                href="tel:01500236633"
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-codex-blue transition-all group"
              >
                <div className="p-3 rounded-xl bg-codex-blue/10 dark:bg-codex-blue/20 text-codex-blue dark:text-codex-cyan group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-400">
                    {t('contact.phone.egypt')}
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">
                    01500236633
                  </div>
                </div>
              </a>

              {/* Saudi Phone */}
              <a
                href="tel:+966510571307"
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-codex-cyan transition-all group"
              >
                <div className="p-3 rounded-xl bg-codex-cyan/10 dark:bg-codex-cyan/20 text-codex-cyan group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-400">
                    {t('contact.phone.saudi')}
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">
                    +966 510571307
                  </div>
                </div>
              </a>

              {/* WhatsApp Quick Action */}
              <a
                href="https://wa.me/201500236633"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{language === 'ar' ? 'محادثة فورية عبر واتساب' : 'Instant WhatsApp Chat'}</span>
              </a>

              {/* Social Links Grid */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs font-bold uppercase text-slate-400 mb-3">
                  {t('contact.social')}
                </div>
                <div className="flex items-center flex-wrap gap-2">
                  {socialLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-codex-blue dark:hover:text-codex-cyan hover:border-codex-blue border border-slate-200 dark:border-slate-800 transition-all"
                        title={s.name}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-codex-darkCard border border-slate-200 dark:border-slate-800 shadow-2xl relative">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t('contact.form.success')}
                  </h3>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold text-codex-blue bg-codex-blue/10"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6">
                    {language === 'ar' ? 'أرسل لنا رسالة خاصة' : 'Send Us a Direct Inquiry'}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-codex-blue"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-codex-blue"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-codex-blue"
                      placeholder="+20 1500236633"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-codex-blue"
                      placeholder="Tell us about your project or technical goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-codex-blue to-codex-cyan hover:opacity-95 shadow-xl shadow-codex-blue/20 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t('contact.form.submit')}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
