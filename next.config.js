/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud.modyocdn.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.modyo.cloud',
      }
    ],
  },
}



module.exports = nextConfig
