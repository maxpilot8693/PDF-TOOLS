import { Helmet } from 'react-helmet-async';

interface FaqItem {
  q: string;
  a: string;
}

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  faqs?: FaqItem[];
}

export function Seo({ title, description, canonical, type = 'website', faqs }: SeoProps) {
  const siteUrl = import.meta.env.VITE_APP_URL || 'https://toolforge.vercel.app';
  const url = canonical ? `${siteUrl}${canonical}` : siteUrl;

  const appSchemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ToolForge",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://toolforge.vercel.app"
  };

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

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="ToolForge" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {canonical && <link rel="canonical" href={url} />}
      <script type="application/ld+json">
        {JSON.stringify(appSchemaData)}
      </script>
      {faqSchemaData && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
      )}
    </Helmet>
  );
}
