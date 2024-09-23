import { defineConfig, devices } from "@playwright/test";

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: "./tests",
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  fullyParallel: true,
  reporter: "html",

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  webServer: [
    {
      command: "pnpm run dev",
      cwd: "./apps/www",
      port: 3000,
      reuseExistingServer: !isCI,
    },
    {
      command: "pnpm run dev",
      cwd: "./apps/api",
      port: 8000,
      reuseExistingServer: !isCI,
    },
  ],

  use: {
    headless: isCI,
    baseURL: "http://localhost:3000",
    video: "retain-on-failure",
    trace: "retain-on-failure",
    timezoneId: "Europe/Oslo",
  },
});
