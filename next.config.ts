import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 deprecates `images.domains`, so every remote host is declared as
    // a remotePattern instead. Photography: Unsplash.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
