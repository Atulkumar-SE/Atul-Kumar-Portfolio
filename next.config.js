/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',       // Tells Next.js to generate static HTML/CSS/JS (into an '/out' folder)
  images: {
    unoptimized: true,
  },
  // Add these two lines (Ensure you keep the leading slash)
  basePath: '/Atul-Kumar-Portfolio', 
  assetPrefix: '/Atul-Kumar-Portfolio',
}
module.exports = nextConfig
