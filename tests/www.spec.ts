import { test, expect } from "@playwright/test";

test("front page loads api data", async ({ page }) => {
  await page.goto("/");

  const serverSays = page.getByTestId("server-says");

  await expect(serverSays).toHaveText("Server says: Hello, World!");
});
