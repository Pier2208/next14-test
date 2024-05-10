/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn-thumbnails.seatsio.net',
      },
    ],
  },
};

export default nextConfig;
