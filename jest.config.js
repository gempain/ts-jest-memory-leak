module.exports = {
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  transform: {
    '^.+\\.[tj]s$': ['ts-jest'],
  },
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],
  globalSetup: './setupTests.ts',
  // globalTeardown: './teardownTests.ts',
};
