import * as s from 'drizzle-orm/sqlite-core';

export const quiz = s.sqliteTable("quiz", {
    id: s.integer().primaryKey(),
    subject: s.text(),
    keyStage: s.text(),
});

export const quizQuestions = s.sqliteTable("quiz_questions", {
    id: s.integer().primaryKey(),
    quizId: s.integer().references(() => quiz.id), 
    question: s.text(),
});

export const quizAnswers = s.sqliteTable("quiz_answers", {
    id: s.integer().primaryKey(),
    questionId: s.integer().references(() => quizQuestions.id), 
    answer: s.text(),
    correct: s.integer({mode: "boolean"}),
});
