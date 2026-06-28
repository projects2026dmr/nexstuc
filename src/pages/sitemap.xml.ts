import { generateSitemap } from "../sitemap";

export const prerender = false;

export async function GET() {
  const xml = generateSitemap();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
