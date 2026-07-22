import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Brand & Nav
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About Us',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact Us',
    'nav.request': 'Request Project',
    'slogan': 'We Code. You Grow.',
    'brand.name': 'CODEX Technology',

    // Hero Section
    'hero.badge': 'Enterprise Software & Digital Engineering',
    'hero.title': 'Building Powerful Digital Solutions For Modern Businesses',
    'hero.subtitle': 'We create professional websites, custom management systems, and desktop applications that help businesses scale faster and maximize revenue.',
    'hero.cta.portfolio': 'View Portfolio',
    'hero.cta.request': 'Request Project',
    'hero.stats.projects': 'Projects Delivered',
    'hero.stats.clients': 'Satisfied Clients',
    'hero.stats.uptime': 'Support & Uptime',
    'hero.stats.satisfaction': 'Client Retention Rate',

    // Services Section
    'services.badge': 'Our Expertise',
    'services.title': 'Software Engineering Tailored For Growth',
    'services.subtitle': 'From custom web platforms to complex enterprise ERPs and desktop tools, we deliver excellence.',
    'services.viewAll': 'Explore All Services',
    'services.web.title': 'Website Development',
    'services.web.desc': 'Business websites, restaurant platforms, medical portals, landing pages, and portfolio sites engineered for conversion.',
    'services.custom.title': 'Custom Management Systems',
    'services.custom.desc': 'Education platforms, clinic management, inventory control, and enterprise ERP solutions tailored to your operations.',
    'services.desktop.title': 'Desktop Applications',
    'services.desktop.desc': 'High-performance desktop business software, administrative tools, and specialized desktop programs.',

    // Featured Portfolio Section
    'portfolio.badge': 'Selected Work',
    'portfolio.title': 'Proven Track Record of Impactful Software',
    'portfolio.subtitle': 'Explore our latest web applications, custom management systems, and desktop software.',
    'portfolio.all': 'All Projects',
    'portfolio.viewDemo': 'Live Preview',
    'portfolio.viewGithub': 'View Source',
    'portfolio.viewDetails': 'View Details',
    'portfolio.viewAll': 'View Full Portfolio',

    // Why Choose Us
    'why.badge': 'The CODEX Advantage',
    'why.title': 'Why Leading Businesses Choose Codex Technology',
    'why.subtitle': 'We combine modern engineering practices with strategic design to build software that scales effortlessly.',
    'why.1.title': 'Luxury & Modern Design',
    'why.1.desc': 'Aesthetics that wow your customers, paired with intuitive UX to drive higher retention.',
    'why.2.title': 'High Performance & Speed',
    'why.2.desc': 'Sub-second load times, optimized codebases, and seamless responsiveness across all screen sizes.',
    'why.3.title': 'Custom Architecture',
    'why.3.desc': 'No generic templates. We architect tailored solutions built around your exact business requirements.',
    'why.4.title': 'Dedicated 24/7 Support',
    'why.4.desc': 'Long-term support, security updates, and maintenance to keep your operations running continuously.',

    // Process
    'process.badge': 'How We Work',
    'process.title': 'From Concept To Deployment',
    'process.subtitle': 'A structured, transparent engineering process designed to deliver on-time and within budget.',
    'process.1.title': '1. Discovery & Strategy',
    'process.1.desc': 'We analyze your business goals, user needs, and software requirements.',
    'process.2.title': '2. Architecture & Design',
    'process.2.desc': 'We draft modern UI/UX mockups and plan robust backend data systems.',
    'process.3.title': '3. Agile Engineering',
    'process.3.desc': 'Clean, modular code development with continuous testing and progress updates.',
    'process.4.title': '4. Launch & Scaling',
    'process.4.desc': 'Smooth deployment on high-speed infrastructure with ongoing maintenance support.',

    // CTA
    'cta.title': 'Ready To Accelerate Your Business Growth?',
    'cta.subtitle': 'Partner with Codex Technology today. Let us transform your vision into enterprise-grade software.',
    'cta.button': 'Start Your Project Now',
    'cta.contact': 'Contact Our Team',

    // About Page
    'about.story.title': 'Company Story',
    'about.story.text': 'Codex Technology is a digital solutions company focused on creating high-quality software products for businesses and individuals. Founded by engineers passionate about excellence, we bridge the gap between complex software requirements and sleek, user-centric products.',
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'To become a trusted technology partner for businesses worldwide through innovative, secure, and reliable digital solutions that drive sustainable digital transformation.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'Deliver professional software solutions with exceptional quality, clear communication, transparent pricing, and long-term continuous support.',
    'about.values.title': 'Our Core Values',
    'about.values.quality': 'Quality',
    'about.values.quality.desc': 'Uncompromising standard in code cleanlines, security, and design UI.',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'Leveraging modern tech stacks to keep your business ahead of competitors.',
    'about.values.transparency': 'Transparency',
    'about.values.transparency.desc': 'Clear timelines, direct communication, and zero hidden fees.',
    'about.values.commitment': 'Commitment',
    'about.values.commitment.desc': 'We stand by our code and ensure total customer satisfaction post-launch.',
    'about.values.growth': 'Growth',
    'about.values.growth.desc': 'Building software designed to scale effortlessly as your revenue grows.',

    // Contact Page
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Have a project in mind or need expert technical consultation? Reach out to us directly.',
    'contact.email': 'Email Us',
    'contact.phone.egypt': 'Egypt Branch',
    'contact.phone.saudi': 'Saudi Arabia Branch',
    'contact.social': 'Connect With Us',
    'contact.form.name': 'Your Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Project Details / Message',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Thank you! Your message has been sent successfully. We will get back to you shortly.',

    // Request Project Page
    'request.title': 'Request a Custom Project',
    'request.subtitle': 'Fill out the form below to receive a personalized proposal, technical breakdown, and cost estimation.',
    'request.fullName': 'Full Name',
    'request.company': 'Company Name',
    'request.email': 'Email Address',
    'request.phone': 'Phone Number',
    'request.country': 'Country',
    'request.serviceType': 'Select Service Type',
    'request.budget': 'Budget Range',
    'request.timeline': 'Target Timeline',
    'request.description': 'Project Description & Requirements',
    'request.submit': 'Submit Project Request',
    'request.success': 'Your project request has been submitted! Our solutions architect will contact you within 24 hours.',

    // Blog Page
    'blog.title': 'Insights & Tech Knowledge',
    'blog.subtitle': 'Articles on web development, enterprise software, clinic systems, and digital business growth.',
    'blog.readMore': 'Read Article',
    'blog.back': 'Back to Articles',
    'blog.author': 'Codex Tech Team',

    // Footer
    'footer.about': 'Codex Technology is a premier software development agency delivering high-performance web applications, management systems, and custom desktop software.',
    'footer.links': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Direct Contact',
    'footer.rights': 'All rights reserved.',
  },
  ar: {
    // Brand & Nav
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.portfolio': 'أعمالنا',
    'nav.about': 'من نحن',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'nav.request': 'اطلب مشروعك',
    'slogan': 'نحن نبرمج. أنت تنمو.',
    'brand.name': 'كودكس تكنولوجي',

    // Hero Section
    'hero.badge': 'هندسة البرمجيات والحلول الرقمية المتكاملة',
    'hero.title': 'بناء حلول رقمية قوية ومبتكرة للشركات والمؤسسات الحديثة',
    'hero.subtitle': 'نقوم بتطوير مواقع إلكترونية احترافية، وأنظمة إدارة مخصصة، وتطبيقات سطح المكتب لتساعد أعمالك على النمو السريع ومضاعفة الأرباح.',
    'hero.cta.portfolio': 'استعرض أعمالنا',
    'hero.cta.request': 'اطلب مشروعك الآن',
    'hero.stats.projects': 'مشروع تم تسليمه',
    'hero.stats.clients': 'عميل واثق بنا',
    'hero.stats.uptime': 'دعم وتواجد دائم',
    'hero.stats.satisfaction': 'نسبة رضا العملاء',

    // Services Section
    'services.badge': 'خبراتنا البرمجية',
    'services.title': 'حلول برمجية مخصصة لنمو وتطوير أعمالك',
    'services.subtitle': 'من منصات الويب الحديثة إلى أنظمة إدارة الشركات المعقدة وتطبيقات سطح المكتب.',
    'services.viewAll': 'استكشف كافة الخدمات',
    'services.web.title': 'تطوير المواقع الإلكترونية',
    'services.web.desc': 'مواقع للشركات، المطاعم والكافيهات، العيادات والمراكز الطبية، صفحات الهبوط، ومواقع التعريف الشخصية.',
    'services.custom.title': 'أنظمة الإدارة المخصصة (ERP)',
    'services.custom.desc': 'أنظمة إدارة التعليم والمدارس، أنظمة العيادات والمستشفيات، إدارة المخازن والمبيعات، والحلول الإدارية الخاصة.',
    'services.desktop.title': 'تطبيقات سطح المكتب',
    'services.desktop.desc': 'برامج إدارية فائقة السرعة، أدوات محاسبية وتنفيذية مخصصة للعمل على أجهزة المحلات والشركات.',

    // Featured Portfolio Section
    'portfolio.badge': 'معرض الأعمال',
    'portfolio.title': 'سجل حافل بالحلول البرمجية الناجحة',
    'portfolio.subtitle': 'تصفح أحدث مشاريعنا في تطبيقات الويب، أنظمة الإدارة المخصصة، وبرامج سطح المكتب.',
    'portfolio.all': 'جميع المشاريع',
    'portfolio.viewDemo': 'معاينة حية',
    'portfolio.viewGithub': 'كود المصدر',
    'portfolio.viewDetails': 'تفاصيل المشروع',
    'portfolio.viewAll': 'مشاهدة المعرض الكامل',

    // Why Choose Us
    'why.badge': 'لماذا كودكس؟',
    'why.title': 'لماذا تختار الشركات كودكس تكنولوجي؟',
    'why.subtitle': 'نجمع بين أحدث التقنيات البرمجية والتصميم العصري الفاخر لإنشاء برامج تعمل بكفاءة عالية.',
    'why.1.title': 'تصميم فاخر وعصري',
    'why.1.desc': 'واجهات تذهل عملاءك وتمنحهم تجربة استخدام سهلة ترفع من معدل التحويل والاحتفاظ.',
    'why.2.title': 'سرعة وأداء استثنائي',
    'why.2.desc': 'أكواد ملمومة ومعدّلة لأعلى سرعة استجابة على جميع الأجهزة مع حماية عالية.',
    'why.3.title': 'معمارية مخصصة بالكامل',
    'why.3.desc': 'بدون قوالب جاهزة، نبني لك حلولاً مخصصة تناسب كافة تفاصيل واحتياجات عملك.',
    'why.4.title': 'دعم فني متواصل 24/7',
    'why.4.desc': 'دعم وتحديثات مستمرة لضمان عمل أنظمتك وموقعك بكفاءة ودون أي انقطاع.',

    // Process
    'process.badge': 'خطوات العمل',
    'process.title': 'رحلة تحويل فكرتك إلى واقع برمجي',
    'process.subtitle': 'خطة عمل منظمة وشفافة تضمن التسليم في الوقت المحدد وبأعلى جودة.',
    'process.1.title': '1. الدراسة والاستراتيجية',
    'process.1.desc': 'نحلل متطلبات عملك وأهدافك لنضع خطة تقنية دقيقة.',
    'process.2.title': '2. التصميم وهندسة النظام',
    'process.2.desc': 'نصمم الواجهات التفاعلية ونحدد قواعد البيانات وهيكلية النظام.',
    'process.3.title': '3. التطوير والبرمجة',
    'process.3.desc': 'كتابة أكواد نظيفة وآمنة مع إجراء اختبارات مكثفة لكل ميزة.',
    'process.4.title': '4. الإطلاق والدعم',
    'process.4.desc': 'نشر البرمجيات على سيرفرات سريعة وتقديم التدريب والدعم الفني.',

    // CTA
    'cta.title': 'هل أنت مستعد لتطوير عملك ونقله إلى المستوى التالي؟',
    'cta.subtitle': 'تواصل مع كودكس تكنولوجي اليوم ودعنا نحول رؤيتك إلى برمجيات عالية الجودة.',
    'cta.button': 'ابدأ مشروعك الآن',
    'cta.contact': 'تواصل مع فريقنا',

    // About Page
    'about.story.title': 'قصة الشركة',
    'about.story.text': 'كودكس تكنولوجي هي شركة متخصصة في الحلول الرقمية وتطوير البرمجيات للشركات والأفراد. تأسست بواسطة مهندسين شغوفين بالتميز والابتكار لبناء برامج قوية وذات تجربة استخدام سلسة.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.text': 'أن نكون الشريك التقني الموثوق والمفضل للشركات والمؤسسات عالمياً من خلال تقديم حلول رقمية مبتكرة وآمنة تسهم في التحول الرقمي المستدام.',
    'about.mission.title': 'رسالتنا',
    'about.mission.text': 'تقديم حلول برمجية احترافية بجودة عالية، وتواصل شفاف، مع توفير دعم فني وتطوير مستمر طويل الأمد.',
    'about.values.title': 'قيمنا الجوهرية',
    'about.values.quality': 'الجودة',
    'about.values.quality.desc': 'التزام مطلق بأعلى معايير البرمجة النظيفة والأمان والتصميم.',
    'about.values.innovation': 'الابتكار',
    'about.values.innovation.desc': 'استخدام أحدث التقنيات لمنح عملك ميزة تنافسية حقيقية.',
    'about.values.transparency': 'الشفافية',
    'about.values.transparency.desc': 'وضوح تام في المواعيد، التكاليف، والتواصل بدون أي رسوم خفية.',
    'about.values.commitment': 'الالتزام',
    'about.values.commitment.desc': 'نلتزم بتسليم المشاريع وضمان رضا العملاء التام بعد الإطلاق.',
    'about.values.growth': 'النمو',
    'about.values.growth.desc': 'بناء برمجيات قابلة للتوسع ومصممة لخدمة زيادة أرباحك.',

    // Contact Page
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'هل لديك مشروع في ذهنك أو تحتاج إلى استشارة تقنية؟ نحن هنا لمساعدتك.',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone.egypt': 'فرع مصر',
    'contact.phone.saudi': 'فرع السعودية',
    'contact.social': 'تابعنا على المنصات',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.message': 'تفاصيل المشروع / الرسالة',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.form.success': 'شكراً لك! تم إرسال رسالتك بنجاح وسيتواصل معك فريقنا في أقرب وقت.',

    // Request Project Page
    'request.title': 'اطلب مشروعك الخاص',
    'request.subtitle': 'قم بتعبئة النموذج التالي للحصول على عرض سعر وخطة تقنية مخصصة لمشروعك.',
    'request.fullName': 'الاسم الكامل',
    'request.company': 'اسم الشركة / المؤسسة',
    'request.email': 'البريد الإلكتروني',
    'request.phone': 'رقم الهاتف',
    'request.country': 'الدولة',
    'request.serviceType': 'اختر نوع الخدمة المطلوب',
    'request.budget': 'الميزانية المتوقعة',
    'request.timeline': 'المدة الزمنية المستهدفة',
    'request.description': 'وصف وتفاصيل المشروع',
    'request.submit': 'إرسال طلب المشروع',
    'request.success': 'تم استلام طلبك بنجاح! سيتواصل معك مهندس حلول البرمجيات خلال 24 ساعة.',

    // Blog Page
    'blog.title': 'المدونة والالمام التقني',
    'blog.subtitle': 'مقالات متخصصة في تطوير المواقع، أنظمة العيادات والشركات، وتكنولوجيا إدارة الأعمال.',
    'blog.readMore': 'اقرأ المقال بالكامل',
    'blog.back': 'العودة للمقالات',
    'blog.author': 'فريق كودكس التقني',

    // Footer
    'footer.about': 'كودكس تكنولوجي شركة متخصصة في تطوير البرمجيات، تطبيقات الويب، أنظمة الإدارة المخصصة، وبرامج سطح المكتب.',
    'footer.links': 'روابط سريعة',
    'footer.services': 'خدماتنا',
    'footer.contact': 'التواصل المباشر',
    'footer.rights': 'جميع الحقوق محفوظة.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('codex-lang');
    if (saved === 'en' || saved === 'ar') return saved;
    return 'en';
  });

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('dir', dir);
    root.setAttribute('lang', language);
    localStorage.setItem('codex-lang', language);
  }, [language, dir]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
