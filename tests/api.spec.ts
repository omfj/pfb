import { test, expect } from "@playwright/test";

test("GET /", async ({ request }) => {
  const res = await request.get("http://localhost:8000");
  expect(res.status()).toBe(200);
  expect(await res.text()).toBe("Hello, World!");
});
