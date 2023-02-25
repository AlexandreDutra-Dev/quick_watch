module.exports = {
  // ...
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.ts",
  },
  testEnvironment: "jest-environment-jsdom",

  // ...
};
