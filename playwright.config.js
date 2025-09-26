// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  //if we think the given timeout 30 sec is not enough we can declare the timeout
  //timeout: 40*1000,
  reporter : 'html',
  use: {
    browserName : 'chromium',
    headless: false,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

  },
projects: [
  {
    name: 'chromium',
    use: {
    browserName : 'chromium',
  },
},
],
});

