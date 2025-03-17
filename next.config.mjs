/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true, // Important for UploadThing
      },
};

export default nextConfig;
