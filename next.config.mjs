/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["fakestoreapi.com"], // Add any other domains you're loading images from
	},
	// Enable CSS Modules
	cssModules: true,
	// Configure CSS Loader options
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: "[local]___[hash:base64:5]",
	},
};

export default nextConfig;
