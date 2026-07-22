import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface BlogPostItem {
  id: string;
  slug: string;
  category: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  date: string;
  readTime: { en: string; ar: string };
  author: string;
  image: string;
  content: { en: string; ar: string };
}

export const BlogCard: React.FC<{ post: BlogPostItem; index: number }> = ({ post, index }) => {
  const { language, dir, t } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group rounded-2xl bg-white dark:bg-codex-darkCard border border-slate-200 dark:border-slate-800 hover:border-codex-blue/50 overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Cover image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
          <img
            src={post.image}
            alt={post.title[language]}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-codex-blue/90 text-white shadow-md">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-codex-blue" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-codex-cyan" />
              {post.readTime[language]}
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-codex-blue dark:group-hover:text-codex-cyan transition-colors leading-snug">
            {post.title[language]}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
            {post.excerpt[language]}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-2 pt-4">
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-codex-blue dark:text-codex-cyan group-hover:gap-3 transition-all"
        >
          <span>{t('blog.readMore')}</span>
          <ArrowIcon className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};
