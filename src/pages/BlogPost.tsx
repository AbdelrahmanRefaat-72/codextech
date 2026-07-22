import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Tag } from 'lucide-react';
import blogsData from '../data/blogs.json';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, dir, t } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  const post = blogsData.find((p) => p.slug === slug || p.id === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-codex-blue font-semibold hover:underline">
          Return to Blog
        </Link>
      </div>
    );
  }

  const postTitle = post.title[language];
  const postExcerpt = post.excerpt[language];
  const postContent = post.content[language];

  // Helper to format basic markdown-like content into elements
  const renderFormattedContent = (text: string) => {
    const paragraphs = text.split('\n\n');
    return paragraphs.map((para, i) => {
      if (para.startsWith('### ')) {
        return (
          <h3 key={i} className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-3">
            {para.replace('### ', '')}
          </h3>
        );
      }
      if (para.startsWith('1. ') || para.startsWith('- ')) {
        const lines = para.split('\n');
        return (
          <ul key={i} className="list-disc list-inside space-y-2 my-4 text-slate-700 dark:text-slate-300">
            {lines.map((line, lIdx) => (
              <li key={lIdx}>{line.replace(/^[0-9]\.\s*|-\s*/, '')}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={i} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-base">
          {para}
        </p>
      );
    });
  };

  return (
    <div className="pt-28 pb-20">
      <SEO
        title={postTitle}
        description={postExcerpt}
        ogImage={post.image}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          'headline': postTitle,
          'description': postExcerpt,
          'image': post.image,
          'author': {
            '@type': 'Organization',
            'name': 'Codex Technology'
          },
          'datePublished': post.date
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-codex-blue dark:text-codex-cyan hover:underline mb-8"
        >
          <ArrowIcon className="w-4 h-4" />
          <span>{t('blog.back')}</span>
        </Link>

        {/* Category & Meta */}
        <div className="space-y-4 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-codex-blue/10 text-codex-blue dark:text-codex-cyan text-xs font-bold uppercase">
            <Tag className="w-3.5 h-3.5" />
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {postTitle}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400 border-y border-slate-200 dark:border-slate-800 py-4">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-codex-blue" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-codex-cyan" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              {post.readTime[language]}
            </span>
          </div>
        </div>

        {/* Main Banner Image */}
        <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-10 shadow-2xl">
          <img src={post.image} alt={postTitle} className="w-full h-full object-cover" />
        </div>

        {/* Content Body */}
        <div className="prose dark:prose-invert max-w-none bg-white dark:bg-codex-darkCard p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl mb-12">
          {renderFormattedContent(postContent)}
        </div>

        {/* Share & Request Footer */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-codex-blue/10 to-codex-cyan/10 border border-codex-blue/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">
              {language === 'ar' ? 'هل تريد بناء نظام إداري أو موقع لمؤسستك؟' : 'Need custom software tailored for your business?'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {language === 'ar' ? 'تواصل مع فريق كودكس تكنولوجي للحصول على استشارة تقنية مجانية.' : 'Contact our software architects for a free technical consultation.'}
            </p>
          </div>
          <Link
            to="/request-project"
            className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-codex-blue hover:bg-codex-blueHover shadow-md shrink-0"
          >
            {t('hero.cta.request')}
          </Link>
        </div>

      </article>
    </div>
  );
};
