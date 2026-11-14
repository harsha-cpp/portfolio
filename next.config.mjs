/** @type {import('next').NextConfig} */
const nextConfig = {
  // Commented out 'output: export' to enable API routes
  // output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
