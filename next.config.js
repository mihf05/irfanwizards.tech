/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/irfanwizards.tech/' : '',
  basePath: isProd ? '/irfanwizards.tech' : '',
  images: {
    unoptimized: true // Disable image optimization for GitHub Pages
  },
  // other configurations...
}

module.exports = nextConfig;