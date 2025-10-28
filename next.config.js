/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enable strong cache busting for all assets
  generateEtags: true,
  // Add a unique build ID for every deployment
  generateBuildId: async () => {
    return Date.now().toString();
  },
  // Set custom headers to prevent browser/proxy caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, must-revalidate, max-age=0' },
          { key: 'Pragma', value: 'no-cache' },
          { key: 'Expires', value: '0' },
        ],
      },
    ];
  },
  // Force Turbopack to use this project as the root to avoid multi-root/duplicate React issues
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
