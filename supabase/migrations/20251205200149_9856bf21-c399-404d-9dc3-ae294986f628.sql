-- Add more missing columns to practice_sessions
ALTER TABLE public.practice_sessions ADD COLUMN IF NOT EXISTS key_ideas_missed INTEGER DEFAULT 0;