const withMDX = require('@next/mdx')();

const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "mdx"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
};

try {
  module.exports = withMDX(nextConfig);
} catch (error) {
  console.error('Error in next.config.js:', error);
  throw new Error('Error in next.config.js');
}
