module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
}
