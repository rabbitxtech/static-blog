const nextJest = require('next/jest')
const createJestConfig = nextJest({
	dir: './'
})

/** @type {import('jest').Config} */
const customJestConfig = {
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'^contentlayer/generated$': '<rootDir>/.contentlayer/generated',
		'^github-slugger$': '<rootDir>/tests/mocks/github-slugger.js',
		'^contentlayer/client$': '<rootDir>/tests/mocks/contentlayer-client.js'
	}
}
module.exports = createJestConfig(customJestConfig)
