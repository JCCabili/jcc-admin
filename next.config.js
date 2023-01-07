/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return[
      {
        source: "/system/products/list",
        destination: "/system/products",
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
