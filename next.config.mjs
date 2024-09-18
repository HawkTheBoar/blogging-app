/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config => {
        config.watchOptions = {
          poll: 1000,
          aggregateTimeout: 300,
          ignored: ['**/node_modules']
        }
        return config
      })
};

export default nextConfig;
