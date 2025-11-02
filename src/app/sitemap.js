// src/app/sitemap.js
export const dynamic = 'force-static'; // مهم مع output: 'export'

export default function sitemap() {
  const now = new Date().toISOString(); // آمن للتسلسل في الستاتيك
  const base = 'https://www.fajeralkhair.com';
  return [
    { url: `${base}/`,      lastModified: now },
    { url: `${base}/project`,   lastModified: now },
    { url: `${base}/aboutus`,   lastModified: now },
    { url: `${base}/contact`,   lastModified: now },
    { url: `${base}/questions`, lastModified: now },
    { url: `${base}/terms`,     lastModified: now },
  ];
}
