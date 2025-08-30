const normalizedBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  basePath: normalizedBasePath,
  assetPrefix: normalizedBasePath,
};

module.exports = nextConfig;


