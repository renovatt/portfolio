/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development",
    },
    images: {
        remotePatterns: [
            {
                hostname: 'raw.githubusercontent.com'
            },
            {
                hostname: 'skillicons.dev'
            }
        ]
    },
    transpilePackages: ['three'],
}

const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
});

module.exports = withPWA(nextConfig);