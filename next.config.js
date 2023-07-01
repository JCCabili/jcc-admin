/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  reactStrictMode: false,
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
