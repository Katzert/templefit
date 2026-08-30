/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isProdGithub = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  ...(isProd ? { output: 'export', trailingSlash: true } : {}),
  images: {
    unoptimized: true,
  },
  basePath: isProdGithub ? '/templefit' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  ...(!isProd ? {
    async rewrites() {
      return [
        {
          source: '/templefit',
          destination: '/',
        },
        {
          source: '/templefit/:path*',
          destination: '/:path*',
        },
      ];
    },
  } : {}),
};

export default nextConfig;
