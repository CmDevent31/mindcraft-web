import type { NextConfig } from "next";

const memeBase = process.env.NEXT_PUBLIC_MEME_BASE_URL;

const nextConfig: NextConfig = {
  images: {
    // Lokal: array kosong. R2: hostname otomatis dari env.
    remotePatterns: memeBase
      ? [
          {
            protocol: "https" as const,
            hostname: new URL(memeBase).hostname,
            pathname: "/**",
          },
        ]
      : [],
  },
};

export default nextConfig;