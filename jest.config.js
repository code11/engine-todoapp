module.exports = {
  testEnvironment: "jsdom",
  verbose: false,
  setupFilesAfterEnv: ['./setupTests.js'],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    '^.+\\.css$': 'jest-transform-css',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-file'
  },
  rootDir: "./",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testRegex: "(/(src|specs)/.*(\\.|/)(test|spec))\\.(ts|js)x?$",
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/app/**/*.{ts,tsx,js,jsx}"
  ],
  "reporters": [
    "default",
    "jest-screenshot/reporter"
  ],
  coverageThreshold: {
    global: {
      lines: 0,
      statements: 0,
      functions: 0,
      branches: 0,
    },
  },
};