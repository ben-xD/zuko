CREATE TABLE `quiz` (
	`id` integer PRIMARY KEY NOT NULL,
	`subject` text,
	`keyStage` text
);
--> statement-breakpoint
CREATE TABLE `quiz_answers` (
	`id` integer PRIMARY KEY NOT NULL,
	`questionId` integer,
	`answer` text,
	`correct` integer,
	FOREIGN KEY (`questionId`) REFERENCES `quiz_questions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `quiz_questions` (
	`id` integer PRIMARY KEY NOT NULL,
	`quizId` integer,
	`question` text,
	FOREIGN KEY (`quizId`) REFERENCES `quiz`(`id`) ON UPDATE no action ON DELETE no action
);
