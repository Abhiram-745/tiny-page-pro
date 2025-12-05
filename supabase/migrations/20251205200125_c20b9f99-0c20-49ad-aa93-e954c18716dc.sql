-- Add missing columns to practice_sessions
ALTER TABLE public.practice_sessions ADD COLUMN IF NOT EXISTS questions_count INTEGER DEFAULT 0;

-- Add missing columns to starred_questions
ALTER TABLE public.starred_questions ADD COLUMN IF NOT EXISTS subsection_title TEXT;