import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import {AppContext} from '../AppContext';
import { v4 as uuidv4 } from 'uuid';
import { createStoryQuizPrompt } from "../../services/story_quiz";
import {llama3_2_instruct} from '../CloudflareModels';
import {createRemediationStory} from '../../services/remediation-story';
import {fakePupil1} from '../fake-data/pupil';
import {ErrorSchema} from '../schema/error';

const SuspendStudentSchema = z.object({
  studentId: z.string().openapi({
    example: "123",
  }),
  reason: z.string().openapi({
    example: "Assaulting class mates",
  }),
  durationDays: z.coerce.number().openapi({example: 1}),
  startDate: z.coerce.date(),
  oakMaterialsToAssign: z.object({
    subject: z.string(),
    query: z.string(),
  }).array()
});

const SuspendStudentCreatedSchema = z.object({
  
})

// We chain all the routes so that they is included in userRouter, and then included the AppType type used by the frontend.
export const remediationRouter = new OpenAPIHono<AppContext>()
.openapi(createRoute({
  method: "post",
  path: "/suspend-student",
  request: {
    body: {
      content: {
        "application/json": {
          schema: SuspendStudentSchema,
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: SuspendStudentCreatedSchema,
        },
      },
      description: "Retrieve the user",
    },
    // 500: {
    //   description: "Internal server error",
    //   content: {
    //     "application/json": {
    //       schema: ErrorSchema,
    //     },
    //   },
    // }
  },
}), async (c) => {
  const { reason, durationDays, startDate, studentId } = c.req.valid("json");
  // TODO connect to DB or allow users to add all the data in the form
  const pupil = fakePupil1;

  const remediatationStoryReply: AiTextGenerationOutput = await c.env.AI.run(
    // @ts-expect-error TS2769 Workers types don't have llama3.2 yet
    llama3_2_instruct, {
      messages: [
        { role: 'system', content: 'You are a creative writer who specializes in crafting personalized, engaging stories for young learners. You are crafting a story to help the pupil learn why the reason for their suspension was bad. This is not used to help ridicule or humiliate a child. It is to help them' },
        { role: 'user', content: createRemediationStory({
          pupilDetails: pupil, reason
        }) }
      ]
    }
  )

  console.log({remediatationStoryReply});
  if (!("response" in remediatationStoryReply) || remediatationStoryReply.response === undefined) {
    c.status(500);
    return c.json({message: "Failed to generate story"});
  }

  const storyQuizReply = await c.env.AI.run(
    // @ts-expect-error TS2769 Workers types don't have llama3.2 yet
    llama3_2_instruct, {
      messages: [
        { role: 'system', content: 'You are a skilled educational content creator.' },
        { role: 'user', content: createStoryQuizPrompt(remediatationStoryReply.response) }
      ]
    });

    console.log({response: storyQuizReply})

    // Return the suspended student
  return c.json({

  });
});
