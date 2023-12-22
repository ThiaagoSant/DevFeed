export default {
  testPathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts",
    "@testing-library/jest-dom",
  ],

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jest-environment-jsdom",
};
