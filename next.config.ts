import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: '/program', destination: '/kegiatan', permanent: true },
      { source: '/galeri', destination: '/kegiatan', permanent: true },
      { source: '/jadwal-shalat', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
