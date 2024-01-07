/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['image.tmdb.org', 'example.com'],
    },
    distDir: 'deploy', 
  };
  
  module.exports = nextConfig;
  