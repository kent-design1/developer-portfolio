/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export


    eslint: {
        // Allows production builds to complete even if there are ESLint errors.
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
        // domains: ['images.unsplash.com'],
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'images.unsplash.com',
        //     },
        //     {
        //         protocol: 'https',
        //         hostname: 'drive.google.com',
        //         port: '',
        //     },
        // ],
    },

};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
//     // trailingSlash: true,
//     eslint: {
//         ignoreDuringBuilds: true,
//     },
//     images: {
//         unoptimized: true,
//     },
// };
//
// export default nextConfig;


