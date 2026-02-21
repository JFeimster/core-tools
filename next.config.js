/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static-export friendly. Deploys clean on Vercel and can also be exported.
  output: "export",
  images: { unoptimized: true }
};

export default nextConfig;
