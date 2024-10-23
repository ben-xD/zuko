import axios from 'axios';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const CLOUDFLARE_AUTH_TOKEN = process.env.CLOUDFLARE_AUTH_TOKEN;
const ACCOUNT_ID = process.env.ACCOUNT_ID;

const headers = {
  Authorization: `Bearer ${CLOUDFLARE_AUTH_TOKEN}`,
};

async function generateRemediationStory(pupilDetails: object, reason: string): Promise<string | null> {
  const prompt = `
    Your task is to write a short story designed to help a pupil understand and empathize with the consequences of their actions, based on the following:

    Pupil Interests: Refer to the provided JSON with details of the pupil's interests and hobbies.
    Issue: The pupil recently caused a specific issue that needs to be addressed (included in the JSON). This issue should be woven into the story in a way that helps the pupil reflect on their behavior.
    Goal: The story should gently guide the pupil to realize the impact of their actions on others and themselves, encouraging positive change without being overly critical. The story should end with a lesson that resonates with the pupil, using their interests as a tool to teach empathy.
    Make the story fun, relatable, and age-appropriate, ensuring the pupil sees themselves in the protagonist.

    Pupil details: ${JSON.stringify(pupilDetails)}
    Reason for suspension: ${reason}

    Please don't use the actual child's name. Where possible try to use a real life example appropriate to the child's age.

    The story should be around 500 words.
  `;

  try {
    const response = await axios.post(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/@cf/meta/llama-3.2-3b-instruct`,
      {
        headers,
        data: {
          messages: [
            { role: 'system', content: 'You are a creative writer who specializes in crafting personalized, engaging stories for young learners.' },
            { role: 'user', content: prompt }
          ]
        }
      }
    );

    if (response.status === 200) {
      const result = response.data;

      // Check if the response contains the expected structure
      if (result.choices && result.choices.length > 0) {
        return result.choices[0].message.content;
      } else {
        console.error('Unexpected response structure:', result);
        return null;
      }
    } else {
      console.error(`API request failed with status code: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error(`API request failed: ${error}`);
    return null;
  }
}

export default generateRemediationStory;