import { format } from 'date-fns';

export interface PupilDetails {
  name: string;
  class: string;
  [key: string]: any;
}

// const messages: [
//   { role: 'system', content: 'You are an expert in professional communication and school administration.' },
//   { role: 'user', content: prompt },
// ],

export function generateSuspensionLetter(
  pupilDetails: PupilDetails,
  reason: string,
  name: string,
  suspensionLength: number,
  headteacher: string,
  suspensionBeginningDate: Date = new Date()
): string {
  const formattedDate = format(suspensionBeginningDate, 'do MMMM yyyy');

  return `
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
}

export default generateSuspensionLetter;