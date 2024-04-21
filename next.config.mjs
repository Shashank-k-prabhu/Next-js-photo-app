/** @type {import('next').NextConfig} */
// next.config.mjs

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
        port: "",
      },
      
    ],
  },
};

export default nextConfig;

