import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const createStoryQuizPrompt = (storyText: string) => `
  Your task is to generate a quiz in JSON format based on the provided story, with a particular focus on reinforcing the moral lesson.

  Story: Refer to the story provided below.

  Quiz Structure: Create a set of 4 multiple-choice questions (with 4 options each) and 1 open-ended question. The quiz should be structured as follows:

  Questions 1: Focus on key events and characters in the story.
  Question 2: Ask a question specifically about the vocabulary
  Question 3: Center around the moral or lesson of the story, testing the pupil's understanding of the takeaway.
  Question 4: An open-ended question asking the pupil to reflect on how the story's moral applies to their own life.

  Format: Return the quiz in the following JSON structure:

  {
      "quiz": [
          {
              "question": "Question 1 text",
              "options": ["Option A", "Option B", "Option C", "Option D"],
              "correct_answer": "Option A"
          },
          {
              "question": "Question 2 text",
              "options": ["Option A", "Option B", "Option C", "Option D"],
              "correct_answer": "Option C"
          },
          {
              "question": "Question 3 text",
              "options": ["Option A", "Option B", "Option C", "Option D"],
              "correct_answer": "Option B"
          },
          {
              "question": "Question 4 text",
              "options": ["Option A", "Option B", "Option C", "Option D"],
              "correct_answer": "Option D"
          },
          {
              "question": "What is the main lesson or moral of the story?",
              "options": ["Option A", "Option B", "Option C", "Option D"],
              "correct_answer": "Option B"
          },
          {
              "question": "How can you apply the lesson from the story to your own life?",
              "answer_type": "open-ended"
          }
      ]
  }

  Note: Ensure that all quiz questions focus on reinforcing the story's moral, while also engaging the pupil with key story events.

  Please limit to no more than 4 questions.

  Story: ${storyText}
`;