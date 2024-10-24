/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/changelog": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["changelogChangelog"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/changelog/latest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["changelogLatest"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/download/{slug}/type/{type}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description This endpoint provides a zip file containing the requested download type, except for video, which will return a direct download URL to the video file. Note that currently, worksheets and worksheet answers are contained inside the same zip file */
        get: operations["getDownloadsGetDownloads"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/key-stages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description This endpoint returns all the key stages (titles and slugs) that are currently available on Oak */
        get: operations["getKeyStagesGetKeyStages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/key-stages/{keyStage}/subject/{subject}/assets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description This endpoint returns signed download URLs and types for the assets currently available on Oak for a given key stage and subject, optionally filtered by type and unit, grouped by lesson */
        get: operations["getAssetsGetUnitAssets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/key-stages/{keyStage}/subject/{subject}/lessons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description This endpoint returns all the lessons (titles and slugs) that are currently available on Oak for a given subject and key stage, grouped by unit */
        get: operations["getKeyStageSubjectLessonsGetKeyStageSubjectLessons"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/key-stages/{keyStage}/subject/{subject}/questions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description This endpoint returns all the quiz questions and answers (and indicates which answers are correct and which are distractors), grouped by lesson, for a given key stage and subject */
        get: operations["getQuestionsGetQuestionsForKeyStageAndSubject"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/key-stages/{keyStage}/subject/{subject}/units": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description This endpoint returns all the units (titles and slugs) that are currently available on Oak for a given subject and key stage */
        get: operations["getAllKeyStageAndSubjectUnitsGetAllKeyStageAndSubjectUnits"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/key-stages/{keyStage}/subjects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description This endpoint returns all the subjects (titles and slugs) that are currently available on Oak for a given key stage */
        get: operations["getKeyStagesGetKeyStageSubjects"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lessons/{lesson}/assets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description This endpoint returns signed download URLS and types for the assets currently available on Oak for a given lesson */
        get: operations["getAssetsGetLessonAssets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lessons/{lesson}/quiz": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description This endpoint returns the quiz questions and answers (and indicates which answers are correct and which are distractors) for a given lesson */
        get: operations["getQuestionsGetQuestionsForLessons"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lessons/{lesson}/summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description This endpoint returns a summary for a given lesson */
        get: operations["getLessonsGetLesson"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search/lessons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description This endpoint returns lessons that are similar to the search criteria, including a similarity score, and details of the unit that it is in */
        get: operations["getLessonsSearchByTextSimilarity"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search/transcripts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Search for a term and find lessons that contain similar text in their video transcripts */
        get: operations["getTranscriptsSearchTranscripts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subjects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description This endpoint returns an array of all subjects that are currently available on Oak across all key stages */
        get: operations["subjectsGetAllSubjects"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/units/{unit}/summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description This endpoint returns unit information for a given unit, including slug, title, number of lessons, prior knowledge requirements, national curriculum statements, prior unit details, future unit descriptions, and lesson titles that form the unit */
        get: operations["getUnitsGetUnit"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Changelog: {
            version: string;
            date: string;
            changes: string[];
        }[];
        ChangelogLatest: {
            version: string;
            date: string;
            changes: string[];
        };
        DownloadSlugTypeType: {
            /** @description The downloadable URL */
            url: string;
            /** @description Only present on videos when no direct download/mp4 url is available */
            stream?: boolean;
            /** @description Used for non-video assets, the URL will be signed and valid for 1 hour */
            signed?: boolean;
            /**
             * @description Use the this type and the lesson slug in conjunction to get a signed download URL to the asset type from the /api/download endpoint
             * @enum {string}
             */
            type: "slidedeck" | "exitQuiz" | "exitQuizAnswers" | "starterQuiz" | "starterQuizAnswers" | "supplementaryResource" | "video" | "worksheet" | "worksheetAnswers";
        }[];
        KeyStages: {
            slug: string;
            title: string;
        }[];
        KeyStagesKeyStageSubjectSubjectAssets: unknown;
        KeyStagesKeyStageSubjectSubjectLessons: {
            /** @description Unit slug */
            unitSlug: string;
            /** @description Unit title */
            unitTitle: string;
            lessons: {
                /** @description Lesson slug */
                lessonSlug: string;
                /** @description Lesson title */
                lessonTitle: string;
            }[];
        }[];
        KeyStagesKeyStageSubjectSubjectQuestions: {
            lessonSlug: string;
            lessonTitle: string;
            starterQuiz: ({
                question: string;
                questionType: "multiple-choice" | "short-answer" | "match" | "order";
            } & ({
                /** @enum {string} */
                questionType: "multiple-choice";
                answers: ({
                    distractor: boolean;
                } & ({
                    /** @enum {string} */
                    type: "text";
                    content: string;
                } | {
                    /** @enum {string} */
                    type: "image";
                    content: {
                        url: string;
                        width: number;
                        height: number;
                        alt?: string;
                        /** @description Supplementary text for the image, if any */
                        text?: string;
                    };
                }))[];
            } | {
                /** @enum {string} */
                questionType: "short-answer";
                answers: {
                    /** @enum {string} */
                    type: "text";
                    content: string;
                }[];
            } | {
                /** @enum {string} */
                questionType: "match";
                answers: {
                    matchOption: {
                        /** @enum {string} */
                        type: "text";
                        content: string;
                    };
                    correctChoice: {
                        /** @enum {string} */
                        type: "text";
                        content: string;
                    };
                }[];
            } | {
                /** @enum {string} */
                questionType: "order";
                answers: ({
                    order: number;
                } & {
                    /** @enum {string} */
                    type: "text";
                    content: string;
                })[];
            }))[];
            exitQuiz: ({
                question: string;
                questionType: "multiple-choice" | "short-answer" | "match" | "order";
            } & ({
                /** @enum {string} */
                questionType: "multiple-choice";
                answers: ({
                    distractor: boolean;
                } & ({
                    /** @enum {string} */
                    type: "text";
                    content: string;
                } | {
                    /** @enum {string} */
                    type: "image";
                    content: {
                        url: string;
                        width: number;
                        height: number;
                        alt?: string;
                        /** @description Supplementary text for the image, if any */
                        text?: string;
                    };
                }))[];
            } | {
                /** @enum {string} */
                questionType: "short-answer";
                answers: {
                    /** @enum {string} */
                    type: "text";
                    content: string;
                }[];
            } | {
                /** @enum {string} */
                questionType: "match";
                answers: {
                    matchOption: {
                        /** @enum {string} */
                        type: "text";
                        content: string;
                    };
                    correctChoice: {
                        /** @enum {string} */
                        type: "text";
                        content: string;
                    };
                }[];
            } | {
                /** @enum {string} */
                questionType: "order";
                answers: ({
                    order: number;
                } & {
                    /** @enum {string} */
                    type: "text";
                    content: string;
                })[];
            }))[];
        }[];
        KeyStagesKeyStageSubjectSubjectUnits: {
            /** @description Unit title */
            unitTitle: string;
            /** @description Unit slug */
            unitSlug: string;
        }[];
        KeyStagesKeyStageSubjects: {
            subjectSlug: string;
            subjectTitle: string;
        }[];
        LessonsLessonAssets: unknown;
        LessonsLessonQuiz: {
            starterQuiz: ({
                question: string;
                questionType: "multiple-choice" | "short-answer" | "match" | "order";
            } & ({
                /** @enum {string} */
                questionType: "multiple-choice";
                answers: ({
                    distractor: boolean;
                } & ({
                    /** @enum {string} */
                    type: "text";
                    content: string;
                } | {
                    /** @enum {string} */
                    type: "image";
                    content: {
                        url: string;
                        width: number;
                        height: number;
                        alt?: string;
                        /** @description Supplementary text for the image, if any */
                        text?: string;
                    };
                }))[];
            } | {
                /** @enum {string} */
                questionType: "short-answer";
                answers: {
                    /** @enum {string} */
                    type: "text";
                    content: string;
                }[];
            } | {
                /** @enum {string} */
                questionType: "match";
                answers: {
                    matchOption: {
                        /** @enum {string} */
                        type: "text";
                        content: string;
                    };
                    correctChoice: {
                        /** @enum {string} */
                        type: "text";
                        content: string;
                    };
                }[];
            } | {
                /** @enum {string} */
                questionType: "order";
                answers: ({
                    order: number;
                } & {
                    /** @enum {string} */
                    type: "text";
                    content: string;
                })[];
            }))[];
            exitQuiz: ({
                question: string;
                questionType: "multiple-choice" | "short-answer" | "match" | "order";
            } & ({
                /** @enum {string} */
                questionType: "multiple-choice";
                answers: ({
                    distractor: boolean;
                } & ({
                    /** @enum {string} */
                    type: "text";
                    content: string;
                } | {
                    /** @enum {string} */
                    type: "image";
                    content: {
                        url: string;
                        width: number;
                        height: number;
                        alt?: string;
                        /** @description Supplementary text for the image, if any */
                        text?: string;
                    };
                }))[];
            } | {
                /** @enum {string} */
                questionType: "short-answer";
                answers: {
                    /** @enum {string} */
                    type: "text";
                    content: string;
                }[];
            } | {
                /** @enum {string} */
                questionType: "match";
                answers: {
                    matchOption: {
                        /** @enum {string} */
                        type: "text";
                        content: string;
                    };
                    correctChoice: {
                        /** @enum {string} */
                        type: "text";
                        content: string;
                    };
                }[];
            } | {
                /** @enum {string} */
                questionType: "order";
                answers: ({
                    order: number;
                } & {
                    /** @enum {string} */
                    type: "text";
                    content: string;
                })[];
            }))[];
        };
        LessonsLessonSummary: {
            lessonTitle: string;
            unitSlug: string;
            unitTitle: string;
            subjectSlug: string;
            subjectTitle: string;
            keyStageSlug: string;
            keyStageTitle: string;
            lessonKeywords: {
                keyword: string;
                description: string;
            }[];
            keyLearningPoints: {
                keyLearningPoint: string;
            }[];
            misconceptionsAndCommonMistakes: {
                misconception: string;
                response: string;
            }[];
            pupilLessonOutcome?: string;
            teacherTips: {
                teacherTip: string;
            }[];
            contentGuidance: {
                contentGuidanceArea: string;
                supervisionlevel_id: number;
                contentGuidanceLabel: string;
                contentGuidanceDescription: string;
            }[] | ("null" | null);
            supervisionLevel: string | ("null" | null);
            downloadsAvailable: boolean;
        };
        SearchLessons: {
            lessonSlug: string;
            lessonTitle: string;
            similarity: number;
            units: {
                unitSlug: string;
                unitTitle: string;
                examBoardTitle: string | ("null" | null);
                keyStageSlug: string;
                subjectSlug: string;
            }[];
        }[];
        SearchTranscripts: {
            lessonTitle: string;
            lessonSlug: string;
            transcriptSnippet?: string;
        }[];
        Subjects: unknown;
        UnitsUnitSummary: {
            unitSlug: string;
            unitTitle: string;
            tags: string[];
            priorKnowledgeRequirements: string[];
            nationalCurriculumContent: string[];
            priorUnit: {
                description: string;
                units: {
                    unitSlug: string;
                    unitTitle: string;
                }[];
            };
            futureUnit: {
                description: string;
                units: {
                    unitSlug: string;
                    unitTitle: string;
                }[];
            };
            unitLessons: {
                lessonSlug: string;
                lessonTitle: string;
            }[];
        };
    };
    responses: {
        /** @description Error response */
        error: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    message: string;
                    code: string;
                    issues?: {
                        message: string;
                    }[];
                };
            };
        };
        /** @description Successful response */
        ChangelogResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Changelog"];
            };
        };
        /** @description Successful response */
        ChangelogLatestResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ChangelogLatest"];
            };
        };
        /** @description Successful response */
        DownloadSlugTypeTypeResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["DownloadSlugTypeType"];
            };
        };
        /** @description Successful response */
        KeyStagesResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["KeyStages"];
            };
        };
        /** @description Successful response */
        KeyStagesKeyStageSubjectSubjectAssetsResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["KeyStagesKeyStageSubjectSubjectAssets"];
            };
        };
        /** @description Successful response */
        KeyStagesKeyStageSubjectSubjectLessonsResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["KeyStagesKeyStageSubjectSubjectLessons"];
            };
        };
        /** @description Successful response */
        KeyStagesKeyStageSubjectSubjectQuestionsResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["KeyStagesKeyStageSubjectSubjectQuestions"];
            };
        };
        /** @description Successful response */
        KeyStagesKeyStageSubjectSubjectUnitsResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["KeyStagesKeyStageSubjectSubjectUnits"];
            };
        };
        /** @description Successful response */
        KeyStagesKeyStageSubjectsResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["KeyStagesKeyStageSubjects"];
            };
        };
        /** @description Successful response */
        LessonsLessonAssetsResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["LessonsLessonAssets"];
            };
        };
        /** @description Successful response */
        LessonsLessonQuizResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["LessonsLessonQuiz"];
            };
        };
        /** @description Successful response */
        LessonsLessonSummaryResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["LessonsLessonSummary"];
            };
        };
        /** @description Successful response */
        SearchLessonsResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["SearchLessons"];
            };
        };
        /** @description Successful response */
        SearchTranscriptsResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["SearchTranscripts"];
            };
        };
        /** @description Successful response */
        SubjectsResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Subjects"];
            };
        };
        /** @description Successful response */
        UnitsUnitSummaryResponse200: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["UnitsUnitSummary"];
            };
        };
    };
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    changelogChangelog: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ChangelogResponse200"];
            default: components["responses"]["error"];
        };
    };
    changelogLatest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ChangelogLatestResponse200"];
            default: components["responses"]["error"];
        };
    };
    getDownloadsGetDownloads: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The lesson slug
                 * @example imagining-you-are-the-characters-the-three-billy-goats-gruff
                 */
                slug: string;
                /**
                 * @description Use the this type and the lesson slug in conjunction to get a signed download URL to the asset type from the /api/download endpoint
                 * @example video
                 */
                type: "slidedeck" | "exitQuiz" | "exitQuizAnswers" | "starterQuiz" | "starterQuizAnswers" | "supplementaryResource" | "video" | "worksheet" | "worksheetAnswers";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["DownloadSlugTypeTypeResponse200"];
            default: components["responses"]["error"];
        };
    };
    getKeyStagesGetKeyStages: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["KeyStagesResponse200"];
            default: components["responses"]["error"];
        };
    };
    getAssetsGetUnitAssets: {
        parameters: {
            query?: {
                /** @description Use the this type and the lesson slug in conjunction to get a signed download URL to the asset type from the /api/download endpoint */
                type?: "slidedeck" | "exitQuiz" | "exitQuizAnswers" | "starterQuiz" | "starterQuizAnswers" | "supplementaryResource" | "video" | "worksheet" | "worksheetAnswers";
                /**
                 * @description Optional unit slug to additionally filter by
                 * @example word-class
                 */
                unit?: string;
                offset?: unknown | number;
                /** @description Limit the number of results returned, max 100 */
                limit?: unknown | number;
            };
            header?: never;
            path: {
                /**
                 * @description Key stage slug to filter by, e.g. 'ks2' - note that casing is important here, and should be lowercase
                 * @example ks1
                 */
                keyStage: "ks1" | "ks2" | "ks3" | "ks4";
                /**
                 * @description Subject slug to search by, e.g. 'science' - note that casing is important here (always lowercase)
                 * @example english
                 */
                subject: "english" | "geography" | "history" | "maths" | "science" | "music" | "biology" | "chemistry" | "combined-science" | "physics";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["KeyStagesKeyStageSubjectSubjectAssetsResponse200"];
            default: components["responses"]["error"];
        };
    };
    getKeyStageSubjectLessonsGetKeyStageSubjectLessons: {
        parameters: {
            query?: {
                /**
                 * @description Optional unit slug to additionally filter by
                 * @example word-class
                 */
                unit?: string;
                offset?: unknown | number;
                /** @description Limit the number of results returned, max 100 */
                limit?: unknown | number;
            };
            header?: never;
            path: {
                /**
                 * @description Key stage slug to filter by, e.g. 'ks2' - note that casing is important here, and should be lowercase
                 * @example ks1
                 */
                keyStage: "ks1" | "ks2" | "ks3" | "ks4";
                /**
                 * @description Subject slug to filter by, e.g. 'english' - note that casing is important here, and should be lowercase
                 * @example english
                 */
                subject: "english" | "geography" | "history" | "maths" | "science" | "music" | "biology" | "chemistry" | "combined-science" | "physics";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["KeyStagesKeyStageSubjectSubjectLessonsResponse200"];
            default: components["responses"]["error"];
        };
    };
    getQuestionsGetQuestionsForKeyStageAndSubject: {
        parameters: {
            query?: {
                offset?: unknown | number;
                /** @description Limit the number of results returned, max 100 */
                limit?: unknown | number;
            };
            header?: never;
            path: {
                /** @description Key stage slug to filter by, e.g. 'ks2' - note that casing is important here, and should be lowercase */
                keyStage: "ks1" | "ks2" | "ks3" | "ks4";
                /** @description Subject slug to search by, e.g. 'science' - note that casing is important here */
                subject: "english" | "geography" | "history" | "maths" | "science" | "music" | "biology" | "chemistry" | "combined-science" | "physics";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["KeyStagesKeyStageSubjectSubjectQuestionsResponse200"];
            default: components["responses"]["error"];
        };
    };
    getAllKeyStageAndSubjectUnitsGetAllKeyStageAndSubjectUnits: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Key stage slug to filter by, e.g. 'ks2' */
                keyStage: "ks1" | "ks2" | "ks3" | "ks4";
                /** @description Subject slug to search by, e.g. 'science' - note that casing is important here (always lowercase) */
                subject: "english" | "geography" | "history" | "maths" | "science" | "music" | "biology" | "chemistry" | "combined-science" | "physics";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["KeyStagesKeyStageSubjectSubjectUnitsResponse200"];
            default: components["responses"]["error"];
        };
    };
    getKeyStagesGetKeyStageSubjects: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Key stage slug to filter by, e.g. 'ks2' - note that casing is important here, and should be lowercase */
                keyStage: "ks1" | "ks2" | "ks3" | "ks4";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["KeyStagesKeyStageSubjectsResponse200"];
            default: components["responses"]["error"];
        };
    };
    getAssetsGetLessonAssets: {
        parameters: {
            query?: {
                /** @description Use the this type and the lesson slug in conjunction to get a signed download URL to the asset type from the /api/download endpoint */
                type?: "slidedeck" | "exitQuiz" | "exitQuizAnswers" | "starterQuiz" | "starterQuizAnswers" | "supplementaryResource" | "video" | "worksheet" | "worksheetAnswers";
            };
            header?: never;
            path: {
                /**
                 * @description The lesson slug
                 * @example child-workers-in-the-victorian-era
                 */
                lesson: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["LessonsLessonAssetsResponse200"];
            default: components["responses"]["error"];
        };
    };
    getQuestionsGetQuestionsForLessons: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example joining-using-and */
                lesson: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["LessonsLessonQuizResponse200"];
            default: components["responses"]["error"];
        };
    };
    getLessonsGetLesson: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The slug of the lesson
                 * @example joining-using-and
                 */
                lesson: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["LessonsLessonSummaryResponse200"];
            default: components["responses"]["error"];
        };
    };
    getLessonsSearchByTextSimilarity: {
        parameters: {
            query: {
                /** @example chratchet */
                q: string;
                /** @description Key stage slug to filter by, e.g. 'ks2' - note that casing is important here, and should be lowercase */
                keyStage?: "ks1" | "ks2" | "ks3" | "ks4";
                /**
                 * @description Subject slug to filter by, e.g. 'english' - note that casing is important here, and should be lowercase
                 * @example english
                 */
                subject?: "english" | "geography" | "history" | "maths" | "science" | "music" | "biology" | "chemistry" | "combined-science" | "physics";
                /** @description Optional unit slug to additionally filter by */
                unit?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SearchLessonsResponse200"];
            default: components["responses"]["error"];
        };
    };
    getTranscriptsSearchTranscripts: {
        parameters: {
            query: {
                /**
                 * @description A snippet of text to search for in the lesson video transcripts
                 * @example Who were the romans?
                 */
                q: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SearchTranscriptsResponse200"];
            default: components["responses"]["error"];
        };
    };
    subjectsGetAllSubjects: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SubjectsResponse200"];
            default: components["responses"]["error"];
        };
    };
    getUnitsGetUnit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The unit slug
                 * @example simple-compound-and-adverbial-complex-sentences
                 */
                unit: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["UnitsUnitSummaryResponse200"];
            default: components["responses"]["error"];
        };
    };
}
