const { withContentlayer } = require('next-contentlayer')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	// reactStrictMode: true,
	experimental: {
		optimizeCss: true,
		serverComponentsExternalPackages: ['mongoose']
	},
	webpack(config) {
		config.experiments = { ...config.experiments, topLevelAwait: true }
		return config
	}
}

module.exports = withBundleAnalyzer(withContentlayer(nextConfig))

