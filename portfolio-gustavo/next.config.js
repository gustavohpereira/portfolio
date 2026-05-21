/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "skillicons.dev",
    },
  ],
},
}

module.exports = nextConfig
