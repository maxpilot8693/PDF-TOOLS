import { Helmet } from 'react-helmet-async';

interface FaqItem {
  q: string;
  a: string;
}

interface HowToData {
  name: string;
  steps: string[];
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  keywords?: string;
  faqs?: FaqItem[];
  howTo?: HowToData;
  breadcrumbs?: BreadcrumbItem[];
}

export function Seo({ 
  title, 
  description, 
  canonical, 
  type = 'website', 
  keywords,
  faqs, 
  howTo, 
  breadcrumbs 
}: SeoProps) {
  const defaultBase = 'https://toolforge.vercel.app';
  const siteUrl = import.meta.env.VITE_APP_URL || (typeof window !== 'undefined' && window.location.origin ? window.location.origin : defaultBase);
  const cleanCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical.startsWith('/') ? canonical : `/${canonical}`}`) : siteUrl;

  const defaultKeywords = "pdf tools, merge pdf online free, split pdf, compress pdf, pdf to word converter, word to pdf, free online file tools, toolforge";
  const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  // 1. Software / WebApplication Structured Data
  const appSchemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ToolForge",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "url": cleanCanonical,
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "14850",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // 2. FAQ Schema
  const faqSchemaData = faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  // 3. HowTo Schema
  const howToSchemaData = howTo?.steps?.length ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howTo.name,
    "description": description,
    "step": howTo.steps.map((stepText, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": `Step ${idx + 1}`,
      "text": stepText
    }))
  } : null;

  // 4. BreadcrumbList Schema
  const defaultBreadcrumbs: BreadcrumbItem[] = breadcrumbs || [
    { name: "Home", path: "/" },
    ...(canonical && canonical !== "/" ? [{ name: title.split('|')[0].trim(), path: canonical }] : [])
  ];

  const breadcrumbSchemaData = defaultBreadcrumbs.length > 1 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": defaultBreadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.path.startsWith('http') ? crumb.path : `${siteUrl}${crumb.path.startsWith('/') ? crumb.path : `/${crumb.path}`}`
    }))
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Canonical URL */}
      <link rel="canonical" href={cleanCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={cleanCanonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="ToolForge" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(appSchemaData)}
      </script>
      {faqSchemaData && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
      )}
      {howToSchemaData && (
        <script type="application/ld+json">
          {JSON.stringify(howToSchemaData)}
        </script>
      )}
      {breadcrumbSchemaData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchemaData)}
        </script>
      )}
    </Helmet>
  );
}
