import { config } from 'dotenv';
import { Config } from "drizzle-kit";

config({ path: '.dev.vars' });

// Migrations are ran from Node/command line rather than cloudflare workers

// Warning: using `./src/db/schema/index` or `/src/db/schema/` doesn't work
export default {
    schema: './src/db/schema/index.ts',
    out: "./migrations",
    dialect: "turso",
    // breakpoints: true,
    dbCredentials: {
      url: process.env.DB_TURSO_URL,
      authToken: process.env.DB_TURSO_AUTH_TOKEN,
    },
  } satisfies Config;