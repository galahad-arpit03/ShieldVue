import { MetadataRoute } from 'next';
import { allBlogs } from '@/Resources/Blogs/BlogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shieldvue.com';

  const staticRoutes = [
    '',
    '/platform/overview',
    '/platform/sbom-management',
    '/platform/cbom-management',
    '/platform/vulnerability-intelligence',
    '/platform/compliance-governance',
    '/solutions/supply-chain-security',
    '/solutions/open-source-risk',
    '/solutions/vulnerability-management',
    '/solutions/compliance-audit',
    '/resources/blogs',
    '/resources/faqs',
    '/contact-us',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const blogRoutes = allBlogs.map((blog) => ({
    url: `${baseUrl}/resources/blogs/${blog.id}`,
    lastModified: new Date(blog.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
