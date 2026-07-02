/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/posts/:id',
        destination: '/blog/posts/:id',
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
