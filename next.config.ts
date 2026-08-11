import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera um site 100% estático (pasta /out), sem necessidade de servidor Node.js
  output: "export",
  trailingSlash: true,
  images: {
    // next/image não otimiza em runtime no modo export
    unoptimized: true,
  },
};

export default nextConfig;
