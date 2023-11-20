/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'gateway.ipfscdn.io',
      'bafybeifdqyjohniyqpmxvwq6rj5gcbr6ivtqq67cizgfe36io47ur3fefe.ipfs.cf-ipfs.com',
    ],
  },
};

module.exports = nextConfig;
