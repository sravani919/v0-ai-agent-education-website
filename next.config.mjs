/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/v0-ai-agent-education-website",
  assetPrefix: "/v0-ai-agent-education-website/",

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
