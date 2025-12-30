/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // REQUIRED for GitHub Pages

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig
