const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@pages/(.*)$": "<rootDir>/pages/$1",
    "^@styles/(.*)$": "<rootDir>/styles/$1",
    "^@public/(.*)$": "<rootDir>/public/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(config);
