/**
 * @type {import('./next.config.type').NextConfigFunction}
 */
const nextConfigFunction = (phase, context) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    experimental: {
      appDir: true,
    },
  };

  return nextConfig;
};

module.exports = nextConfigFunction;
