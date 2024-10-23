import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const OAK_API = process.env.API_KEY;

const headers = {
  Accept: 'application/json',
  Authorization: `Bearer ${OAK_API}`,
};

const baseUrl = 'https://open-api.thenational.academy/api/v0';

// Function to search for lessons based on the provided query, subject, and key stage
async function searchLesson(query: string, subject: string, ks: string = 'ks2'): Promise<any[] | null> {
  const url = `${baseUrl}/search/lessons?q=${query}&keyStage=${ks}&subject=${subject}`;

  try {
    const resp = await axios.get(url, { headers });
    const lessons = resp.data;

    // Set similarity score threshold
    const relevantResults = lessons.filter((lesson: any) => lesson.similarity >= 0.25);
    return relevantResults;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`HTTP error occurred: ${error.response?.status} - ${error.response?.statusText}`);
    } else {
      console.error(`Error occurred: ${error}`);
    }
    return null;
  }
}

// Function to retrieve lesson materials based on the lesson slug
async function retrieveLessonMaterial(lessonSlug: string): Promise<any | null> {
  const url = `${baseUrl}/search/lessons/${lessonSlug}/assets`;

  try {
    const resp = await axios.get(url, { headers });
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`HTTP error occurred: ${error.response?.status} - ${error.response?.statusText}`);
    } else {
      console.error(`Error occurred: ${error}`);
    }
    return null;
  }
}

// Function to retrieve lesson materials for multiple lessons based on a search query
async function retrieveMultipleLessonMaterials(
  query: string,
  subject: string,
  ks: string = 'ks2'
): Promise<{ [key: string]: { [key: string]: any } } | null> {
  const searchLessonResult = await searchLesson(query, subject, ks);
  const lessonMaterials: { [key: string]: { [key: string]: any } } = {};

  if (!searchLessonResult) {
    return null;
  }

  for (const lessonDict of searchLessonResult) {
    const subjectSlug = lessonDict.subjectSlug;
    const lessonSlug = lessonDict.lessonSlug;

    const materials = await retrieveLessonMaterial(lessonSlug);

    if (!lessonMaterials[subjectSlug]) {
      lessonMaterials[subjectSlug] = { [lessonSlug]: materials };
    } else {
      lessonMaterials[subjectSlug][lessonSlug] = materials;
    }
  }

  return lessonMaterials;
}

export { searchLesson, retrieveLessonMaterial, retrieveMultipleLessonMaterials };
