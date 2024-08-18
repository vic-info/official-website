/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "raw.githubusercontent.com",
      "www.notion.so",
      "github.com"
    ],
  },
};

module.exports = nextConfig;
