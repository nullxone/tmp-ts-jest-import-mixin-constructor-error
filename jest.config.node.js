module.exports = {
  testMatch: ["**/__spec__/**/*.ts", "**/?(*.)spec.ts"],
  // testMatch: ["**/__spec__/**/*.js", "**/?(*.)spec.js"],
  testEnvironment: "node",
  errorOnDeprecated: true, //?
  // transform: require("ts-jest").transform,
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  clearMocks: true,
  resetMocks: false, //remove
  restoreMocks: false, //remove
};
