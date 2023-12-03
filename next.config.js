/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org'
      }, {
        protocol: 'https',
        hostname: 'animationvisarts.com'
      }, {
        protocol: 'https',
        hostname: 'links.papareact.com'
      }, {
        protocol: 'https',
        hostname: 'venturebeat.com'
      }
    ]
  }
}

module.exports = nextConfig
