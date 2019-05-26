module.exports = {
  projects: ["<rootDir>/common", "<rootDir>/server"],
  coverageDirectory: "spec/build/coverage",
  coverageReporters: ["lcov", "text-summary"],
  errorOnDeprecated: true, //?
};
