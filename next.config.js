/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const headers = async () => {
  return [
    {
      source: "/checkout",
      headers: [
        {
          key: "Authorization",
          value: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        },
      ],
    },
  ];
};

module.exports = {
  nextConfig,
  headers,
  images: {
    unoptimized: true,
  },
};
