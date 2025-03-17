module.exports = {
  siteUrl: process.env.SITE_URL || 'https://Angelinaaaaaaaaaaaa.github.io/',
  generateRobotsTxt: true,
  sitemapSize: 7000, // Split sitemap into multiple files, each containing up to 7000 URLs
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/500'], // Exclude pages that should not be included in the sitemap
  robotsTxtOptions: {
    additionalSitemaps: [
      // Add other manually created sitemaps here if needed
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // Add a transform function to customize the configuration for each URL
  transform: async (config, path) => {
    // Customize priority for different paths
    let priority = config.priority;
    
    // Homepage has the highest priority
    if (path === '/') {
      priority = 1.0;
    } 
    // Main section pages have higher priority
    else if (path.startsWith('/about') || path.startsWith('/projects')) {
      priority = 0.8;
    }
    
    // Return the configuration for this URL
    return {
      loc: path, // URL path
      changefreq: config.changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs || [],
    };
  },
};
