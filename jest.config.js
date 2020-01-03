module.exports = {
  verbose: true,
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/src/__test__/setupTest.js'],
  moduleNameMapper: {
    '\\.(scss|sass|css)': '<rootDir>/src/utils/mocks/sassMocks.js'
  }
}
