import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import {AppContext} from '../AppContext';

// TODO implement APIs:
// - Create quiz
// - Edit questions / answers

const ParamsSchema = z.object({
  id: z
    .string()
    .min(3)
    .openapi({
      param: {
        name: "id",
        in: "path",
      },
      example: "1212121",
    }),
});

const UserSchema = z
  .object({
    id: z.string().openapi({
      example: "123",
    }),
    name: z.string().openapi({
      example: "John Doe",
    }),
    age: z.number().openapi({
      example: 42,
    }),
  })
  .openapi("User");

// We chain all the routes so that they is included in userRouter, and then included the AppType type used by the frontend.
export const quizRouter = new OpenAPIHono<AppContext>()
.openapi(createRoute({
  method: "get",
  path: "/{id}",
  request: {
    params: ParamsSchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: UserSchema,
        },
      },
      description: "Retrieve the user",
    },
  },
}), (c) => {
  // Use OakClient for any data:
  const oakClient = c.var.oakHttpClient;
  const { id } = c.req.valid("param");
  return c.json({
    id,
    age: 20,
    name: "Zuko",
  });
});
