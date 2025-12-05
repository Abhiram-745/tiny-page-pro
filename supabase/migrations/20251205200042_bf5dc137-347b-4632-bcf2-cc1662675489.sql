-- Create app_role enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- User roles table (separate from profiles for security)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL DEFAULT 'user',
  UNIQUE(user_id, role)
);

-- User settings table
CREATE TABLE public.user_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  theme TEXT DEFAULT 'dark',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Sections table
CREATE TABLE public.sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  spec_tag TEXT,
  level TEXT,
  learning_objectives TEXT[],
  content TEXT,
  keywords TEXT[],
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Practice sessions table
CREATE TABLE public.practice_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  topic_slug TEXT,
  subsection_title TEXT,
  overall_score INTEGER DEFAULT 0,
  max_marks INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Blurt sessions table
CREATE TABLE public.blurt_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  topic_slug TEXT,
  score INTEGER DEFAULT 0,
  max_score INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Submissions table
CREATE TABLE public.submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  section_id UUID REFERENCES public.sections(id),
  content TEXT,
  score INTEGER,
  feedback TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Starred questions table
CREATE TABLE public.starred_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_text TEXT,
  question_data JSONB,
  subject TEXT,
  topic TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, question_text)
);

-- Starred subsections table
CREATE TABLE public.starred_subsections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subsection_id TEXT NOT NULL,
  subject TEXT,
  topic TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, subsection_id)
);

-- Subtopic progress table
CREATE TABLE public.subtopic_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  topic_slug TEXT NOT NULL,
  subtopic_id TEXT NOT NULL,
  completed BOOLEAN DEFAULT false,
  score INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, topic_slug, subtopic_id)
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.practice_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blurt_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.starred_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.starred_subsections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subtopic_progress ENABLE ROW LEVEL SECURITY;

-- Security definer function for role checking
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Profiles policies
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- User roles policies
CREATE POLICY "Users can view own roles" ON public.user_roles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can manage roles" ON public.user_roles FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- User settings policies
CREATE POLICY "Users can view own settings" ON public.user_settings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own settings" ON public.user_settings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own settings" ON public.user_settings FOR UPDATE USING (auth.uid() = user_id);

-- Sections policies (public read, admin write)
CREATE POLICY "Anyone can view sections" ON public.sections FOR SELECT USING (true);
CREATE POLICY "Admins can manage sections" ON public.sections FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Practice sessions policies
CREATE POLICY "Users can view own practice sessions" ON public.practice_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own practice sessions" ON public.practice_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Blurt sessions policies
CREATE POLICY "Users can view own blurt sessions" ON public.blurt_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own blurt sessions" ON public.blurt_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Submissions policies
CREATE POLICY "Users can view own submissions" ON public.submissions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own submissions" ON public.submissions FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Starred questions policies
CREATE POLICY "Users can view own starred questions" ON public.starred_questions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own starred questions" ON public.starred_questions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own starred questions" ON public.starred_questions FOR DELETE USING (auth.uid() = user_id);

-- Starred subsections policies
CREATE POLICY "Users can view own starred subsections" ON public.starred_subsections FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own starred subsections" ON public.starred_subsections FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own starred subsections" ON public.starred_subsections FOR DELETE USING (auth.uid() = user_id);

-- Subtopic progress policies
CREATE POLICY "Users can view own subtopic progress" ON public.subtopic_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own subtopic progress" ON public.subtopic_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own subtopic progress" ON public.subtopic_progress FOR UPDATE USING (auth.uid() = user_id);

-- Trigger to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'display_name');
  
  INSERT INTO public.user_settings (user_id)
  VALUES (NEW.id);
  
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();