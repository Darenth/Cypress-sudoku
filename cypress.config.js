const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "video": true,
    baseUrl: 'http://localhost:3000',
    "defaultCommandTimeout": 5000,
    "pageLoadTimeout": 10000,
    //specPattern: 'integration/*.feature',
    //"ignoreTestFiles": ["*.js", "*.md"],

 
  },
});
