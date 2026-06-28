const { LOCATIONS } = require("../src/data/locations");
const { SERVICES } = require("../src/data/services");

module.exports = function handler(req, res) {
  const baseUrl = "https://nexstuc.vercel.app";

  const staticUrls = [
    "",
    "/stukadoor",
    "/stucwerk",
    "/latexspuiten",
    "/spackspuiten",
    "/schilderwerk",
    "/beton-cire",
    "/badkamerrenovatie",
  ];

  const locationUrls = [];

  SERVICES.forEach((service) => {
    LOCATIONS.forEach((loc) => {
      locationUrls.push(`/${service.slug}/${loc.slug}`);
    });
  });

  const allUrls = [...staticUrls, ...locationUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === "" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(xml);
};
