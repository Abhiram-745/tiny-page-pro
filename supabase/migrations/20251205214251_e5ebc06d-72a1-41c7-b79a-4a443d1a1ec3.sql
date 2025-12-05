-- Add marking_breakdown column to mock_exam_results for detailed marking feedback
ALTER TABLE public.mock_exam_results 
ADD COLUMN IF NOT EXISTS marking_breakdown JSONB DEFAULT NULL;