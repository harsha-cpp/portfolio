/** @type {import('next').NextConfig} */
const nextConfig = {
  // Commented out 'output: export' to enable API routes
  // output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
