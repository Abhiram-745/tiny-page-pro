-- Add missing columns to submissions
ALTER TABLE public.submissions ADD COLUMN IF NOT EXISTS keywords_found TEXT[] DEFAULT '{}';
ALTER TABLE public.submissions ADD COLUMN IF NOT EXISTS keywords_missed TEXT[] DEFAULT '{}';