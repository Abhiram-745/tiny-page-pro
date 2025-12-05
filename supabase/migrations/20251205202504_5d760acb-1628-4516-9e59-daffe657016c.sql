-- Create mock_exams table
CREATE TABLE public.mock_exams (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  subject TEXT NOT NULL,
  topic_title TEXT NOT NULL,
  selected_topics TEXT[] NOT NULL,
  time_limit_minutes INTEGER NOT NULL,
  total_marks INTEGER NOT NULL,
  submission_method TEXT NOT NULL CHECK (submission_method IN ('paper', 'keyboard', 'stylus')),
  status TEXT NOT NULL DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'submitted', 'marking', 'completed')),
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ended_at TIMESTAMP WITH TIME ZONE,
  total_score INTEGER,
  marking_progress INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create mock_exam_questions table
CREATE TABLE public.mock_exam_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  exam_id UUID NOT NULL REFERENCES public.mock_exams(id) ON DELETE CASCADE,
  topic TEXT NOT NULL,
  question_number INTEGER NOT NULL,
  question_text TEXT NOT NULL,
  marks INTEGER NOT NULL,
  expected_key_points TEXT[],
  markscheme TEXT,
  diagram_svg TEXT,
  table_html TEXT,
  page_number INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create mock_exam_answers table
CREATE TABLE public.mock_exam_answers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  exam_id UUID NOT NULL REFERENCES public.mock_exams(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.mock_exam_questions(id) ON DELETE CASCADE,
  answer_text TEXT,
  answer_image_url TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create mock_exam_results table
CREATE TABLE public.mock_exam_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  exam_id UUID NOT NULL REFERENCES public.mock_exams(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.mock_exam_questions(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  max_marks INTEGER NOT NULL,
  feedback TEXT,
  model_answer TEXT,
  key_points_covered TEXT[],
  key_points_missed TEXT[],
  what_done_well TEXT,
  areas_to_improve TEXT,
  marked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.mock_exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mock_exam_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mock_exam_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mock_exam_results ENABLE ROW LEVEL SECURITY;

-- RLS policies for mock_exams
CREATE POLICY "Users can view own mock exams" ON public.mock_exams FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own mock exams" ON public.mock_exams FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own mock exams" ON public.mock_exams FOR UPDATE USING (auth.uid() = user_id);

-- RLS policies for mock_exam_questions (via exam ownership)
CREATE POLICY "Users can view questions for own exams" ON public.mock_exam_questions FOR SELECT USING (EXISTS (SELECT 1 FROM public.mock_exams WHERE id = exam_id AND user_id = auth.uid()));
CREATE POLICY "Users can insert questions for own exams" ON public.mock_exam_questions FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM public.mock_exams WHERE id = exam_id AND user_id = auth.uid()));

-- RLS policies for mock_exam_answers (via exam ownership)
CREATE POLICY "Users can view answers for own exams" ON public.mock_exam_answers FOR SELECT USING (EXISTS (SELECT 1 FROM public.mock_exams WHERE id = exam_id AND user_id = auth.uid()));
CREATE POLICY "Users can insert answers for own exams" ON public.mock_exam_answers FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM public.mock_exams WHERE id = exam_id AND user_id = auth.uid()));
CREATE POLICY "Users can update answers for own exams" ON public.mock_exam_answers FOR UPDATE USING (EXISTS (SELECT 1 FROM public.mock_exams WHERE id = exam_id AND user_id = auth.uid()));

-- RLS policies for mock_exam_results (via exam ownership)
CREATE POLICY "Users can view results for own exams" ON public.mock_exam_results FOR SELECT USING (EXISTS (SELECT 1 FROM public.mock_exams WHERE id = exam_id AND user_id = auth.uid()));
CREATE POLICY "Users can insert results for own exams" ON public.mock_exam_results FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM public.mock_exams WHERE id = exam_id AND user_id = auth.uid()));