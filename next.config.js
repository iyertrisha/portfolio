/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/posts/:id',
        destination: '/',
        permanent: true,
      },
      {
        source: '/client-work/:path*',
        destination: '/experience/:path*',
        permanent: true,
      },
      {
        source: '/chatbot/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
