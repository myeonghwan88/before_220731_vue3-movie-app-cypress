const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    viewportWidth: 1400,
    viewportHeight: 800,
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "webpack",
    },
  },
});
