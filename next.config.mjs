/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'matchpetong.s3.sa-east-1.amazonaws.com',
        pathname: '/animals/**',
      },
    ],
  },
}

export default nextConfig
