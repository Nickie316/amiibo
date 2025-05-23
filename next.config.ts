import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://amiiboapi.com/api/*'),
      new URL('https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/*')
    ]
  }
};

export default nextConfig;
