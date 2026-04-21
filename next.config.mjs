/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/templefit',
  trailingSlash: true,
};

export default nextConfig;
