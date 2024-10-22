import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { apiReference as scalarUI } from "@scalar/hono-api-reference";
import { quizRouter } from "./routers/quiz";
import {createOakHttpClient} from './oakHttpClient';
import {AppContext} from './AppContext';
import { cors } from 'hono/cors'

// See https://hono.dev/docs/concepts/stacks and https://hono.dev/docs/guides/rpc for more information
// For streaming LLM responses over SSE, we can use https://hono.dev/docs/helpers/streaming#streamsse
// For middlewares, see https://hono.dev/docs/guides/middleware

const appName = "Zuko";
const appVersion = "0.0.1";
const openapiPath = "/openapi.json";
const app = new OpenAPIHono<AppContext>()
.doc31(openapiPath, {
  openapi: "3.1.0",
  info: {
    version: appVersion,
    title: appName,
  },
})
app.use('/api/*', cors())
.use(async (c, next) => {
  c.set("oakHttpClient", createOakHttpClient(c.env.OAK_NATIONAL_ACADEMY_HTTP_URL));
  await next();
})
.route("/api/quiz", quizRouter)
// TODO Register more routers here.
// .route("/example", exampleRouter)
.get("/", (c) => {
  return c.text("Hello Zuko!");
})
// .get('/urls', (c) => {
//   // Just to debug environment variables.
//   const oakUrl = c.env.OAK_NATIONAL_ACADEMY_HTTP_URL;
//   return c.text(oakUrl);
// })
.get("/docs", swaggerUI({ url: openapiPath }))
.get(
  "/scalar",
  scalarUI({
    spec: {
      url: openapiPath,
    },
  }),
);

export default app

export type AppType = typeof app
