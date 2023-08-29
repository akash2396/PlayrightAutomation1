// @ts-check
const { defineConfig, devices, expect } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,

  expect: {

    /* This timeout will wait for an element for max 5 seconds  */
    timeout: 5000
  },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
   
    browserName : 'chromium',
    // headless : false,
    screenshot : 'on',
    trace : 'retain-on-failure' //off, on , retain-on-failure


  },

});

