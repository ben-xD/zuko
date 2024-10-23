import axios from 'axios';
import * as dotenv from 'dotenv';
import { format } from 'date-fns';

// Load environment variables from .env file

dotenv.config();

const CLOUDFLARE_AUTH_TOKEN = process.env.CLOUDFLARE_AUTH_TOKEN;
const ACCOUNT_ID = process.env.ACCOUNT_ID;

const headers = {
  Authorization: `Bearer ${CLOUDFLARE_AUTH_TOKEN}`,
};

interface PupilDetails {
  name: string;
  class: string;
  [key: string]: any;
}

async function generateSuspensionLetter(
  pupilDetails: PupilDetails,
  reason: string,
  name: string,
  suspensionLength: number,
  headteacher: string,
  suspensionBeginningDate: Date = new Date()
): Promise<string | null> {
  const formattedDate = format(suspensionBeginningDate, 'do MMMM yyyy');

  const prompt = `
    Please write a suspension letter for a pupil using the following elements:

    Refer to the provided example letter for tone and structure.
    Use the provided JSON object for pupil-specific details. Only include information explicitly found in this data.
    Important:

    Do not include any sections related to missing public examinations or national curriculum tests.
    If any details are unclear or missing, omit them rather than assuming information.
    Here is the example letter: ""
    Pupil details: ${JSON.stringify(pupilDetails)}
    Suspension details: [reason: ${reason}, suspension_beginning_date: ${formattedDate}, duration: ${suspensionLength} days]
    Headteacher's Name: ${headteacher}

    Ensure the letter is clear, professional, and aligned with school policies.

    The pupil should be back the day following the suspension and a reintegration meeting should happen with the parent at 8am on that day.

    Make sure to format entered information correctly and don't enter it within square brackets.
  `;

  try {
    const response = await axios.post(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/@cf/meta/llama-3.2-3b-instruct`,
      {
        headers,
        data: {
          messages: [
            { role: 'system', content: 'You are an expert in professional communication and school administration.' },
            { role: 'user', content: prompt },
          ],
        },
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

export default generateSuspensionLetter;