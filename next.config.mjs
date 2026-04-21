/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Si vas a usar GitHub Pages, descomenta la siguiente línea y pon el nombre de tu repositorio
  // basePath: '/templefit',
};

export default nextConfig;
