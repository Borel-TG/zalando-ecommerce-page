import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Specify the allowed domain
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
