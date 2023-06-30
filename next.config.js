/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'raw.githubusercontent.com'
            },
            {
                hostname: 'skillicons.dev'
            }
        ]
    }
}

module.exports = nextConfig
