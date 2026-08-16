import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/program', destination: '/kegiatan', permanent: true },
      { source: '/galeri', destination: '/kegiatan', permanent: true },
      { source: '/jadwal-shalat', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
