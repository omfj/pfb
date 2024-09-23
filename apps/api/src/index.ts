import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();

app.use(logger());
app.use(cors());

app.get("/", (c) => {
  return c.text("Hello, World!");
});

const port = 8000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
