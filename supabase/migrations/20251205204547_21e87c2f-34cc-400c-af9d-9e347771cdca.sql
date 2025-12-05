-- Refresh PostgREST schema cache
NOTIFY pgrst, 'reload schema';

-- Grant proper permissions to authenticated users
GRANT ALL ON public.mock_exams TO authenticated;
GRANT ALL ON public.mock_exam_questions TO authenticated;
GRANT ALL ON public.mock_exam_answers TO authenticated;
GRANT ALL ON public.mock_exam_results TO authenticated;

-- Grant usage on sequences
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated;