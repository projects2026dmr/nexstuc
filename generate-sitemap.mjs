import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// TS dosyasındaki gerçek array'i bulur
function readTSArray(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  const start = content.indexOf("=[");
  const end = content.indexOf("];", start);

  if (start === -1 || end === -1) {
    throw new Error("TS array parse edilemedi: " + filePath);
  }

  const arrayString = content.substring(start + 1, end + 1); // =[ ... ]; → sadece [ ... ]

  return eval(arrayString); // güvenli çünkü sadece array var
}

const locationsPath = path.join(__dirname, "src", "data", "locations.ts");
const servicesPath = path.join(__dirname, "src", "data", "services.ts");

const LOCATIONS = readTSArray(locationsPath);
const SERVICES = readTSArray(servicesPath);

const baseUrl = "https://nexstuc.vercel.app";

const staticUrls = [
  "",
  "/stukadoor",
  "/stucwerk",
  "/latexspuiten",
  "/spackspuiten",
  "/schilderwerk",
  "/beton-cire",
  "/badkamerrenovatie"
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

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), xml);

console.log("Sitemap generated successfully!");
