import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "rukminim2.flixcart.com" },
      { protocol: "https", hostname: "www.mdcomputers.in" },
      { protocol: "https", hostname: "www.primeabgb.com" },
      { protocol: "https", hostname: "www.vedantcomputers.com" },
    ],
  },
};

export default nextConfig;
