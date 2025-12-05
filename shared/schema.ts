import { pgTable, uuid, text, integer, timestamp, numeric, boolean, pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const appRoleEnum = pgEnum('app_role', ['admin', 'moderator', 'user']);

export const profiles = pgTable('profiles', {
  id: uuid('id').primaryKey(),
  fullName: text('full_name'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const userSettings = pgTable('user_settings', {
  userId: uuid('user_id').primaryKey(),
  theme: text('theme').default('system').notNull(),
  timerEnabled: boolean('timer_enabled').default(true).notNull(),
  notificationsEnabled: boolean('notifications_enabled').default(true).notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const userRoles = pgTable('user_roles', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull(),
  role: appRoleEnum('role').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const sections = pgTable('sections', {
  id: uuid('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  title: text('title').notNull(),
  specTag: text('spec_tag').notNull(),
  level: text('level').notNull(),
  learningObjectives: text('learning_objectives').array().default([]).notNull(),
  content: text('content').notNull(),
  keywords: text('keywords').array().default([]).notNull(),
});

export const submissions = pgTable('submissions', {
  id: uuid('id').defaultRandom().primaryKey(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  userId: uuid('user_id').notNull(),
  sectionId: uuid('section_id').notNull(),
  content: text('content').notNull(),
  score: integer('score'),
  keywordsFound: text('keywords_found').array(),
  keywordsMissed: text('keywords_missed').array(),
});

export const practiceSessions = pgTable('practice_sessions', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull(),
  sectionId: uuid('section_id'),
  topicSlug: text('topic_slug'),
  subsectionSlug: text('subsection_slug'),
  subsectionTitle: text('subsection_title'),
  questionsCount: integer('questions_count').default(1).notNull(),
  overallScore: integer('overall_score').notNull(),
  maxMarks: integer('max_marks').notNull(),
  keyIdeasMissed: text('key_ideas_missed').array().default([]).notNull(),
  keyIdeasCovered: text('key_ideas_covered').array().default([]).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const blurtSessions = pgTable('blurt_sessions', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull(),
  topicSlug: text('topic_slug').notNull(),
  subsectionSlug: text('subsection_slug').notNull(),
  pairNumber: integer('pair_number').notNull(),
  score: integer('score').notNull(),
  maxScore: integer('max_score').notNull(),
  keywordsAdded: text('keywords_added').array().default([]).notNull(),
  keywordsMissed: text('keywords_missed').array().default([]).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const subtopicProgress = pgTable('subtopic_progress', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull(),
  topicSlug: text('topic_slug').notNull(),
  subsectionSlug: text('subsection_slug').notNull(),
  blurtScoreAvg: numeric('blurt_score_avg', { precision: 5, scale: 2 }).default('0'),
  examScoreAvg: numeric('exam_score_avg', { precision: 5, scale: 2 }).default('0'),
  totalBlurtAttempts: integer('total_blurt_attempts').default(0),
  totalExamAttempts: integer('total_exam_attempts').default(0),
  lastPracticedAt: timestamp('last_practiced_at').defaultNow(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  lastPairIndex: integer('last_pair_index').default(0),
});

export const starredQuestions = pgTable('starred_questions', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull(),
  questionText: text('question_text').notNull(),
  questionType: text('question_type').notNull(),
  marks: integer('marks').default(1),
  markscheme: text('markscheme'),
  modelAnswer: text('model_answer'),
  topicSlug: text('topic_slug'),
  subsectionSlug: text('subsection_slug'),
  subsectionTitle: text('subsection_title'),
  subject: text('subject'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const starredSubsections = pgTable('starred_subsections', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull(),
  topicSlug: text('topic_slug').notNull(),
  subsectionSlug: text('subsection_slug').notNull(),
  subsectionTitle: text('subsection_title').notNull(),
  subject: text('subject'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const profilesRelations = relations(profiles, ({ one, many }) => ({
  settings: one(userSettings, {
    fields: [profiles.id],
    references: [userSettings.userId],
  }),
  roles: many(userRoles),
  submissions: many(submissions),
  practiceSessions: many(practiceSessions),
  blurtSessions: many(blurtSessions),
  subtopicProgress: many(subtopicProgress),
  starredQuestions: many(starredQuestions),
  starredSubsections: many(starredSubsections),
}));

export const sectionsRelations = relations(sections, ({ many }) => ({
  submissions: many(submissions),
}));

export const submissionsRelations = relations(submissions, ({ one }) => ({
  user: one(profiles, {
    fields: [submissions.userId],
    references: [profiles.id],
  }),
  section: one(sections, {
    fields: [submissions.sectionId],
    references: [sections.id],
  }),
}));
