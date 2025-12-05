-- Change key_ideas columns to text arrays to match code expectations
ALTER TABLE public.practice_sessions DROP COLUMN IF EXISTS key_ideas_covered;
ALTER TABLE public.practice_sessions DROP COLUMN IF EXISTS key_ideas_missed;
ALTER TABLE public.practice_sessions ADD COLUMN key_ideas_covered TEXT[] DEFAULT '{}';
ALTER TABLE public.practice_sessions ADD COLUMN key_ideas_missed TEXT[] DEFAULT '{}';