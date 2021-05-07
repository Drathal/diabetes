module.exports = {
  verbose: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/jest/cssTransform.js'
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['**/*.spec.(ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.ts'],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  globals: {
    'ts-jest': {
      tsconfig: 'jest/tsconfig.jest.json'
    }
  }
}
