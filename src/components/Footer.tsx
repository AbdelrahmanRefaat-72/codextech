import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, Facebook, Instagram, Linkedin, Github, Twitter, ArrowUpRight, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/share/1DHHPt6r9v/', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/codex.tech2026?igsh=cWdpbjdodGx2am1y', icon: Instagram },
    { name: 'TikTok', href: 'https://www.tiktok.com/@codextechnology0?_r=1&_t=ZS-98FXX8FmjkA', icon: Code2 },
    { name: 'X', href: 'https://x.com/codextechCodexd', icon: Twitter },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/135167964/', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/AbdelrahmanRefaat-72', icon: Github },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800/80 overflow-hidden">
      {/* Glow effect in background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-codex-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-codex-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative p-0.5 rounded-xl bg-gradient-to-tr from-codex-blue to-codex-cyan shadow-lg shadow-codex-blue/30 overflow-hidden">
                <img
                  src="/logo.png"
                  alt="CODEX Technology Logo"
                  className="h-10 w-10 object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  CODEX <span className="text-codex-cyan text-sm font-semibold">TECH</span>
                </span>
                <span className="text-[10px] font-medium text-slate-400 tracking-wider uppercase">
                  {t('slogan')}
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {t('footer.about')}
            </p>
            {/* Social Icons */}
            <div className="flex items-center flex-wrap gap-2 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-codex-cyan hover:border-codex-blue transition-all"
                    title={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-b border-codex-blue/30 pb-2 inline-block">
              {t('footer.links')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-codex-cyan transition-colors flex items-center gap-1">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-codex-cyan transition-colors flex items-center gap-1">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-codex-cyan transition-colors flex items-center gap-1">
                  {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-codex-cyan transition-colors flex items-center gap-1">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-codex-cyan transition-colors flex items-center gap-1">
                  {t('nav.blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-b border-codex-blue/30 pb-2 inline-block">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="hover:text-white transition-colors">{t('services.web.title')}</li>
              <li className="hover:text-white transition-colors">{t('services.custom.title')}</li>
              <li className="hover:text-white transition-colors">{t('services.desktop.title')}</li>
              <li>
                <Link to="/request-project" className="text-codex-cyan font-medium hover:underline inline-flex items-center gap-1">
                  <span>{t('nav.request')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-b border-codex-blue/30 pb-2 inline-block">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:codex.tech96@gmail.com"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-codex-cyan transition-colors"
                >
                  <Mail className="w-4 h-4 text-codex-blue shrink-0" />
                  <span>codex.tech96@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:01500236633"
                  className="flex items-start gap-2.5 text-slate-300 hover:text-codex-cyan transition-colors"
                >
                  <Phone className="w-4 h-4 text-codex-blue shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400">{t('contact.phone.egypt')}</div>
                    <span>01500236633</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+966510571307"
                  className="flex items-start gap-2.5 text-slate-300 hover:text-codex-cyan transition-colors"
                >
                  <Phone className="w-4 h-4 text-codex-cyan shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400">{t('contact.phone.saudi')}</div>
                    <span>+966510571307</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CODEX Technology. {t('footer.rights')}</p>
          <div className="flex items-center gap-6">
            <span>Enterprise Quality</span>
            <span>24/7 Support</span>
            <span>Global Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
