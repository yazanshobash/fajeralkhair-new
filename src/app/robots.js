// src/app/robots.js
export const dynamic = 'force-static'; // مهم مع output: 'export'

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://www.fajeralkhair.com/sitemap.xml',
  };
}
