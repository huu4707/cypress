const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      console.log(config.browsers);
      const mode = config.env.mode || "development";

      const pathOfConfigurationFile = `cypress/config/cypress.${mode}.json`;
      const settings = require(path.join(__dirname, pathOfConfigurationFile));

      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl;
      }
      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env,
        };
      }
      return config;
    },
  },
});
