import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const ACCOUNT_ID = 'your-account-id';
const CLOUDFLARE_AUTH_TOKEN = process.env.CLOUDFLARE_AUTH_TOKEN;

const headers = {
  Accept: 'application/json',
  Authorization: `Bearer ${CLOUDFLARE_AUTH_TOKEN}`,
};

// Function to generate next actions for a headteacher based on suspension details
async function generateNextActions(
  pupilDetails: object,
  reason: string,
  name: string,
  suspensionPolicy: string,
  suspensionBeginningDate: string,
  duration: number
): Promise<any> {
  const suspensionEndDate = '17th June 2024';
  const headteacherName = 'John Smith';
  
  const prompt = `
  Your task is to generate clear, actionable next steps for a headteacher to follow after suspending a pupil, in strict accordance with the school's suspension policy. Use the provided details to guide your response.

  Pupil Details: Refer to the provided JSON with pupil-specific information, including behavior history and any special circumstances.
  Suspension Reason: Use the suspension reason given in the JSON to tailor the next steps to address the specific issue.
  Time Frame: Consider the suspension duration (also in the JSON) and provide both immediate actions and follow-up steps for the headteacher to take during and after the suspension period.
  Action Areas:

  Communication: Steps for informing relevant parties (e.g., parents, staff, and potentially external authorities) in line with the school’s suspension policy.
  Support: Guidance on offering support to the pupil (e.g., pastoral care, behavioral intervention) to address the root cause of the issue, while adhering to the school’s policy on handling suspended pupils.
  Reintegration Plan: Develop a reintegration plan that aligns with the school’s policy for helping the pupil transition back to school post-suspension.
  Policy Alignment: Ensure all actions strictly follow the school's suspension policy and any legal obligations regarding suspensions.
  Please return the response in a clear bullet-point list, with each action labeled by the relevant time frame (e.g., Immediate, During Suspension, After Suspension).

  Pupil details: ${JSON.stringify(pupilDetails)}
  Suspension reason: ${reason}
  Suspension_beginning_date: ${suspensionBeginningDate}
  Time frame: ${duration} days
  School suspension policy: ${suspensionPolicy}

  The pupil should be back the day following the suspension and a reintegration meeting should happen with the parent at 8am on that day.
  `;

  try {
    const response = await axios.post(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/@cf/meta/llama-3.2-3b-instruct`,
      {
        messages: [
          { role: 'system', content: 'You are a seasoned school administrator and advisor to headteachers.' },
          { role: 'user', content: prompt },
        ],
      },
      { headers }
    );

    const result = response.data;

    if (result.choices && result.choices.length > 0) {
      const messageContent = result.choices[0].message.content;
      console.log(messageContent);
      return result;
    } else {
      console.error('Unexpected response structure:', result);
      return null;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error making API request: ${error.response?.status} - ${error.response?.statusText}`);
    } else {
      console.error(`Error: ${error}`);
    }
    return { error: error.toString() };
  }
}

export { generateNextActions };
