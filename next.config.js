const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	// reactStrictMode: true,
	experimental: {
		appDir: true,
		optimizeCss: true,
		serverComponentsExternalPackages: ['mongoose']
	},
	webpack(config) {
		config.experiments = { ...config.experiments, topLevelAwait: true }
		return config
	}
}

module.exports = withContentlayer(nextConfig)

