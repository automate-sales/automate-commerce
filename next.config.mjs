import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      serverComponentsExternalPackages: ["geoip-lite"],
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            { hostname: 'localhost' },
            { hostname: 'minio' },
            { hostname: 'ergonomica-ac-media.s3.us-east-1.amazonaws.com' },
            { hostname: 'd1j0s1nyo2b00d.cloudfront.net' }
        ],
    },
}

const withMDX = createMDX({
    // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)
