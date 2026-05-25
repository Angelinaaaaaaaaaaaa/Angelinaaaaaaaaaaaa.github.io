// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'rdl.ink' },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    
    // Optimize module resolution
    config.resolve.modules = ['node_modules', ...config.resolve.modules];
    
    config.module.rules.push({
      test: /\.(md|mdx|webp)$/,
      use: 'raw-loader',
    });

    if (dev && !isServer) {
      // Optimize for development
      config.optimization = {
        ...config.optimization,
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          name: false,
          cacheGroups: {
            default: false,
            vendors: false,
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
              reuseExistingChunk: true,
            },
            shared: {
              name: 'shared',
              chunks: 'all',
              minChunks: 1,
              enforce: true,
              priority: -20,
            },
          },
        },
      };
    }

    return config;
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    forceSwcTransforms: true,
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Improve development performance
  poweredByHeader: false,
  generateEtags: false,
};
