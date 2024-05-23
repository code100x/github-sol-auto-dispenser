/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["avatars.githubusercontent.com"]
      },
      transpilePackages: 
      [
        "@repo/ui",
        "@repo/tailwind-config",
      ]
};

export default nextConfig;
