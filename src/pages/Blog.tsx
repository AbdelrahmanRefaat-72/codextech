import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { BlogCard, BlogPostItem } from '../components/BlogCard';
import blogsData from '../data/blogs.json';

export const Blog: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web Development', 'Software Development', 'Business Technology', 'Tutorials'];

  const filteredPosts = blogsData.filter((post) => {
    if (selectedCategory === 'All') return true;
    return post.category === selectedCategory;
  });

  return (
    <div className="pt-28 pb-20">
      <SEO
        title={language === 'ar' ? 'المدونة والالمام التقني' : 'Technical Blog & Insights'}
        description={language === 'ar' ? 'مقالات مخصصة لخبراء وأصحاب الشركات حول تطوير الويب، أنظمة الـ ERP والعيادات، وتطبيقات سطح المكتب.' : 'Read expert tech articles on Web Development, Custom ERP Systems, Clinic Management, and Desktop Software architecture.'}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-codex-blue dark:text-codex-cyan">
            {t('nav.blog')}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {t('blog.title')}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-codex-blue text-white shadow-lg shadow-codex-blue/30'
                  : 'bg-white dark:bg-codex-darkCard text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-codex-blue'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post as BlogPostItem} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};
