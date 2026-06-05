/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',       // Tells Next.js to generate static HTML/CSS/JS (into an '/out' folder)
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig
