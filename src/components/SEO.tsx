import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  schema,
}) => {
  const { language } = useLanguage();

  const defaultTitle = language === 'ar'
    ? 'كودكس تكنولوجي — نحن نبرمج. أنت تنمو.'
    : 'CODEX Technology — We Code. You Grow.';

  const defaultDesc = language === 'ar'
    ? 'شركة كودكس تكنولوجي لتطوير البرمجيات والمواقف الإلكترونية، أنظمة الإدارة المخصصة للشركات والعيادات، وتطبيقات سطح المكتب.'
    : 'CODEX Technology designs enterprise websites, custom management systems (ERP, Clinic, Education), and high-performance desktop applications.';

  const pageTitle = title ? `${title} | CODEX Technology` : defaultTitle;
  const pageDesc = description || defaultDesc;
  const currentUrl = canonical || window.location.href;

  useEffect(() => {
    // Set Title
    document.title = pageTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageDesc);

    // OpenGraph
    const setMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaTag('og:title', pageTitle);
    setMetaTag('og:description', pageDesc);
    setMetaTag('og:image', ogImage);
    setMetaTag('og:url', currentUrl);
    setMetaTag('og:type', 'website');

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // JSON-LD Schema.org script
    let scriptTag = document.getElementById('jsonld-schema') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'jsonld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareCompany',
      'name': 'Codex Technology',
      'alternateName': 'CODEX',
      'url': 'https://codextechnology.dev',
      'logo': 'https://codextechnology.dev/favicon.svg',
      'slogan': 'We Code. You Grow.',
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': '+20-1500236633',
          'contactType': 'customer support',
          'areaServed': 'EG'
        },
        {
          '@type': 'ContactPoint',
          'telephone': '+966-510571307',
          'contactType': 'sales',
          'areaServed': 'SA'
        }
      ],
      'sameAs': [
        'https://facebook.com',
        'https://linkedin.com',
        'https://github.com'
      ]
    };

    scriptTag.textContent = JSON.stringify(schema || defaultSchema);

  }, [pageTitle, pageDesc, currentUrl, ogImage, schema]);

  return null;
};
