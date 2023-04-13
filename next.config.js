const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	// reactStrictMode: true,
	experimental: {
		appDir: true
		// typedRoutes: true
	}
}

module.exports = withContentlayer(nextConfig)

