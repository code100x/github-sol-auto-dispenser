/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github-readme-stats.vercel.app'],
    dangerouslyAllowSVG: true,
  },
  transpilePackages: 
  [
    "@repo/ui",
    "@repo/tailwind-config",
  ]
};

export default nextConfig;
