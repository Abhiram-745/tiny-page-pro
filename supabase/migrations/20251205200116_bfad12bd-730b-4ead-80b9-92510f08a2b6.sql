-- Add missing columns to profiles
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS full_name TEXT;

-- Add missing columns to practice_sessions
ALTER TABLE public.practice_sessions ADD COLUMN IF NOT EXISTS subsection_slug TEXT;
ALTER TABLE public.practice_sessions ADD COLUMN IF NOT EXISTS section_id TEXT;

-- Add missing columns to blurt_sessions
ALTER TABLE public.blurt_sessions ADD COLUMN IF NOT EXISTS subsection_slug TEXT;
ALTER TABLE public.blurt_sessions ADD COLUMN IF NOT EXISTS pair_number INTEGER;

-- Add missing columns to subtopic_progress
ALTER TABLE public.subtopic_progress ADD COLUMN IF NOT EXISTS last_pair_index INTEGER DEFAULT 0;

-- Add missing columns to starred_subsections
ALTER TABLE public.starred_subsections ADD COLUMN IF NOT EXISTS subsection_slug TEXT;
ALTER TABLE public.starred_subsections ADD COLUMN IF NOT EXISTS subsection_title TEXT;
ALTER TABLE public.starred_subsections ADD COLUMN IF NOT EXISTS topic_slug TEXT;

-- Add missing columns to starred_questions
ALTER TABLE public.starred_questions ADD COLUMN IF NOT EXISTS question_type TEXT;
ALTER TABLE public.starred_questions ADD COLUMN IF NOT EXISTS marks INTEGER;
ALTER TABLE public.starred_questions ADD COLUMN IF NOT EXISTS markscheme TEXT;
ALTER TABLE public.starred_questions ADD COLUMN IF NOT EXISTS model_answer TEXT;
ALTER TABLE public.starred_questions ADD COLUMN IF NOT EXISTS diagram_url TEXT;
ALTER TABLE public.starred_questions ADD COLUMN IF NOT EXISTS subsection_slug TEXT;
ALTER TABLE public.starred_questions ADD COLUMN IF NOT EXISTS topic_slug TEXT;

-- Add missing columns to user_settings
ALTER TABLE public.user_settings ADD COLUMN IF NOT EXISTS timer_enabled BOOLEAN DEFAULT true;
ALTER TABLE public.user_settings ADD COLUMN IF NOT EXISTS notifications_enabled BOOLEAN DEFAULT true;