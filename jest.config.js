module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: [
    "<rootDir>/setUpTests.ts",
    "<rootDir>/__mocks__/matchMedia.js",
    "<rootDir>/__mocks__/scrollTo.js",
  ],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.s?css$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
