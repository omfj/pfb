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

const PORT = Number(process.env.API_PORT);

if (!PORT) {
  throw new Error("PORT is not defined");
}

console.log(`Server is running on port ${PORT}`);

serve({
  fetch: app.fetch,
  port: PORT,
});
