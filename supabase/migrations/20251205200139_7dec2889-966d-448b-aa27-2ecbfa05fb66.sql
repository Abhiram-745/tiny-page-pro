-- Add missing columns to subtopic_progress
ALTER TABLE public.subtopic_progress ADD COLUMN IF NOT EXISTS subsection_slug TEXT;
ALTER TABLE public.subtopic_progress ADD COLUMN IF NOT EXISTS last_practiced_at TIMESTAMPTZ;

-- Drop and recreate unique constraint for subtopic_progress
ALTER TABLE public.subtopic_progress DROP CONSTRAINT IF EXISTS subtopic_progress_user_id_topic_slug_subtopic_id_key;
CREATE UNIQUE INDEX IF NOT EXISTS subtopic_progress_user_subsection_idx ON public.subtopic_progress(user_id, topic_slug, subsection_slug) WHERE subsection_slug IS NOT NULL;

-- Add missing columns to practice_sessions
ALTER TABLE public.practice_sessions ADD COLUMN IF NOT EXISTS key_ideas_covered INTEGER DEFAULT 0;

-- Add missing columns to blurt_sessions for Dashboard
ALTER TABLE public.blurt_sessions ADD COLUMN IF NOT EXISTS key_ideas_covered INTEGER DEFAULT 0;