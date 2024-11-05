import { Elysia } from "elysia";
import db from "./db";
import { Client } from "pg";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";

//Base APi path
const basePath = "/api";

//PostgreSQL Client
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

await client.connect();

const app = new Elysia()
  .use(cors())
  .use(
    swagger({
      documentation: {
        info: {
          title: "Authentication Test",
          version: "1.0.0",
          description: "API for testing authentication.",
        },
      },
    })
  )

  .get("/", async () => {
    return "Hello, world!";
  })

  .listen(5431, () => {
    console.log(`Server is running at http://localhost:5431`);
  });
