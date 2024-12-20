import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            { hostname: 'localhost' },
            { hostname: 'minio' },
            { hostname: 'ergonomica-ac-media.s3.us-east-1.amazonaws.com' },
            { hostname: 'd1j0s1nyo2b00d.cloudfront.net' }
        ],
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
          process.on('uncaughtException', (err) => {
            if (err.code === 'ECONNRESET' || err.message === 'aborted') {
              console.warn('Connection reset by peer:', err);
            } else {
              console.error('Unhandled exception:', err);
            }
          });
    
          process.on('unhandledRejection', (reason, promise) => {
            console.error('Unhandled rejection at:', promise, 'reason:', reason);
          });
        }
        return config;
    }
}

const withMDX = createMDX({
    // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)
