module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@json-driven-validator(.*)$': '<rootDir>/dist/$1',
  },
};
