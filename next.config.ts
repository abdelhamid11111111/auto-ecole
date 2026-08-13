import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 deprecates `images.domains`, so every remote host is declared as
    // a remotePattern instead. Photography: Pexels. Learner avatars: randomuser.
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com", pathname: "/photos/**" },
      { protocol: "https", hostname: "randomuser.me", pathname: "/api/portraits/**" },
    ],
  },
};

export default nextConfig;
