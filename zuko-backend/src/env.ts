import { z } from "zod";

// You may consider using config files instead of environment variables (yaml and zod)
// however, changing configs becomes harder when Kubernetes is not used.
// For example, how do you swap config files in Fly.io? We'd need to include
// multiple configuration files to pick between them, or upload them remotely.

// For more environment variables available on Fly, see
// https://fly.io/docs/reference/runtime-environment/

const envSchema = z.object({
  OAK_NATIONAL_ACADEMY_HTTP_URL: z.string(),
//   LOG_FASTIFY: z.coerce.boolean().default(false),
//   LOG_DATABASE: z.coerce.boolean().default(false),
//   LOG_TEST_DATABASE: z.coerce.boolean().default(false),
//   LOG_HONO_REQUEST: z.coerce.boolean().default(false),
//   OPENAI_API_KEY: z.string(),
//   CLOUDFLARE_ACCOUNT_ID: z.string(),
//   CLOUDFLARE_WORKERS_AI_TOKEN: z.string(),
//   DATABASE_URL: z
//     .string()
//     .describe(
//       [
//         "Connection string to postgres database, starting with `postgres://`.",
//         "Can be local or remote. Get the remote database from your project.",
//         "https://console.neon.tech/app/projects/project-name",
//       ].join(" "),
//     ),
//   ENVIRONMENT: z
//     .union([z.literal("production"), z.literal("development"), z.undefined()])
//     .describe(
//       "A flag to toggle features based on environment. Code should minimise usage of this.",
//     ),
});
