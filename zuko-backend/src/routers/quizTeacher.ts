import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import {AppContext} from '../AppContext';
import { v4 as uuidv4 } from 'uuid';
import { quiz } from "../db/schema/quiz";

// TODO implement APIs:
// - Create quiz
// - Edit questions / answers

const CreateQuizParamsSchema = z.object({
  subject: z.string().openapi({
    example: "Geography",
    param: {
      name: "subject",
      // in: "query",
    }
  }),
  keyStage: z.string().openapi({
    example: "KS3",
    param: {
      name: "keyStage",
      // in: "query",
    }
  }),
  topic: z
    .string()
    .min(3)
    .openapi({
      param: {
        name: "topic",
        // in: "query",
      },
      example: "Racism",
    }),
    questionCount: z
    .coerce.string()
    .openapi({
      // name: "questionCount",
      param: {
        name: "questionCount",
      },
      example: "5",
    }),
});

const QuizQuestionWithAnswersSchema = z
  .object({
    id: z.string().openapi({
      example: "123",
    }),
    question: z.string().openapi({
      example: "What is the capital of France?",
    }),
    answers: z.string().array().openapi({
      example: ["Paris", "London", "Berlin", "Madrid"],
    }),
    correctAnswerIndex: z.number().openapi({example: 1})
  })
  .openapi("User");

const QuizWithAnswersSchema = z.object({
  subject: z.string().openapi({
    example: "Geography",
  }),
  keyStage: z.string().openapi({
    example: "KS3",
  }),
  topic: z
  .string()
  .min(3)
  .openapi({
    example: "Racism",
  }),
  questions: QuizQuestionWithAnswersSchema.array()
})

// We chain all the routes so that they is included in userRouter, and then included the AppType type used by the frontend.
export const quizTeacherRouter = new OpenAPIHono<AppContext>()
.openapi(createRoute({
  method: "get",
  path: "/{id}",
  request: {
    query: CreateQuizParamsSchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: QuizWithAnswersSchema,
        },
      },
      description: "Retrieve the user",
    },
  },
}), async (c) => {
  // Use OakClient for any data:
  const oakClient = c.var.oakHttpClient;
  // Use db to store data:
  const db = c.var.db;
  // const newQuestionId = uuidv4();
  const { topic, subject, questionCount, keyStage } = c.req.valid("query");
  // TODO use the AI prompt API to generate questions (use questionCount)

  const newQuiz = await db.insert(quiz).values({
  keyStage,
  subject,
  });

  return c.json({
    keyStage,
    subject,
    topic,
    questions: []
  });
});