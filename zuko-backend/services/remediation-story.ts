import { PupilDetails } from "./suspension-letter";

export const createRemediationStory = ({pupilDetails, reason}: {pupilDetails: PupilDetails, reason: string}) => `
  Your task is to write a short story designed to help a pupil understand and empathize with the consequences of their actions, based on the following:

  Pupil Interests: Refer to the provided JSON with details of the pupil's interests and hobbies.
  Issue: The pupil recently caused a specific issue that needs to be addressed (included in the JSON). This issue should be woven into the story in a way that helps the pupil reflect on their behavior.
  Goal: The story should gently guide the pupil to realize the impact of their actions on others and themselves, encouraging positive change without being overly critical. The story should end with a lesson that resonates with the pupil, using their interests as a tool to teach empathy.
  Make the story fun, relatable, and age-appropriate, ensuring the pupil sees themselves in the protagonist.

  Pupil details: ${JSON.stringify(pupilDetails)}
  Reason for suspension: ${reason}

  Please don't use the actual child's name or any reference to a school suspension. Where possible try to use a real life example appropriate to the child's age

  The story should be around 500 words.

  Only output the story as text in markdown. Don't include any pre-amble or closing remarks.
`;
