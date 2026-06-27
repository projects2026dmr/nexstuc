import React from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonical }) => {
  // Vite + React 19 uyumlu head injection
  React.useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    const canonicalLink =
      document.querySelector('link[rel="canonical"]') ||
      document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    canonicalLink.setAttribute("href", canonical);
    document.head.appendChild(canonicalLink);

    // OG tags
    const setOG = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setOG("og:title", title);
    setOG("og:description", description);
    setOG("og:url", canonical);
    setOG("og:type", "website");

    // Twitter tags
    const setTwitter = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setTwitter("twitter:title", title);
    setTwitter("twitter:description", description);
    setTwitter("twitter:card", "summary_large_image");
  }, [title, description, canonical]);

  return null;
};

export default SEOHead;
