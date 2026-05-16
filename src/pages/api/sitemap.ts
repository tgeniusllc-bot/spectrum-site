import type { NextApiRequest, NextApiResponse } from 'next';

const BASE_URL = 'https://spectrumpsychiatry.us';

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${BASE_URL}</loc>
    </url>
    <url>
      <loc>${BASE_URL}/about</loc>
    </url>
    <url>
      <loc>${BASE_URL}/services</loc>
    </url>
    <url>
      <loc>${BASE_URL}/blog</loc>
    </url>
    <url>
      <loc>${BASE_URL}/contact</loc>
    </url>
  </urlset>`;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}