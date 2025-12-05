CREATE EXTENSION IF NOT EXISTS "pg_graphql";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "plpgsql";
CREATE EXTENSION IF NOT EXISTS "supabase_vault";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



--
-- Name: app_role; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.app_role AS ENUM (
    'admin',
    'moderator',
    'user'
);


--
-- Name: handle_new_user(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.handle_new_user() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', ''));

  insert into public.user_settings (user_id)
  values (new.id)
  on conflict (user_id) do nothing;

  insert into public.user_roles (user_id, role)
  values (new.id, 'user')
  on conflict (user_id, role) do nothing;

  return new;
end;
$$;


--
-- Name: has_role(uuid, public.app_role); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.has_role(_user_id uuid, _role public.app_role) RETURNS boolean
    LANGUAGE sql STABLE SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  );
$$;


--
-- Name: update_subtopic_progress_after_blurt(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_subtopic_progress_after_blurt() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
declare
  v_avg_score numeric(5,2);
  v_total_attempts integer;
begin
  select 
    avg((score::numeric / max_score::numeric) * 100),
    count(*)
  into v_avg_score, v_total_attempts
  from public.blurt_sessions
  where user_id = new.user_id
    and topic_slug = new.topic_slug
    and subsection_slug = new.subsection_slug;

  insert into public.subtopic_progress (
    user_id, topic_slug, subsection_slug,
    blurt_score_avg, total_blurt_attempts, last_practiced_at
  ) values (
    new.user_id, new.topic_slug, new.subsection_slug,
    v_avg_score, v_total_attempts, now()
  )
  on conflict (user_id, topic_slug, subsection_slug)
  do update set
    blurt_score_avg = excluded.blurt_score_avg,
    total_blurt_attempts = excluded.total_blurt_attempts,
    last_practiced_at = now();

  return new;
end;
$$;


--
-- Name: update_subtopic_progress_after_exam(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_subtopic_progress_after_exam() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
declare
  v_avg_score numeric(5,2);
  v_total_attempts integer;
begin
  select 
    avg((overall_score::numeric / max_marks::numeric) * 100),
    count(*)
  into v_avg_score, v_total_attempts
  from public.practice_sessions
  where user_id = new.user_id
    and topic_slug = new.topic_slug
    and subsection_slug = new.subsection_slug;

  insert into public.subtopic_progress (
    user_id, topic_slug, subsection_slug,
    exam_score_avg, total_exam_attempts, last_practiced_at
  ) values (
    new.user_id, new.topic_slug, new.subsection_slug,
    v_avg_score, v_total_attempts, now()
  )
  on conflict (user_id, topic_slug, subsection_slug)
  do update set
    exam_score_avg = excluded.exam_score_avg,
    total_exam_attempts = excluded.total_exam_attempts,
    last_practiced_at = now();

  return new;
end;
$$;


SET default_table_access_method = heap;

--
-- Name: blurt_sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.blurt_sessions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    topic_slug text NOT NULL,
    subsection_slug text NOT NULL,
    pair_number integer NOT NULL,
    score integer NOT NULL,
    max_score integer NOT NULL,
    keywords_added text[] DEFAULT '{}'::text[] NOT NULL,
    keywords_missed text[] DEFAULT '{}'::text[] NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: practice_sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.practice_sessions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    section_id uuid,
    topic_slug text,
    subsection_slug text,
    subsection_title text,
    questions_count integer DEFAULT 1 NOT NULL,
    overall_score integer NOT NULL,
    max_marks integer NOT NULL,
    key_ideas_missed text[] DEFAULT '{}'::text[] NOT NULL,
    key_ideas_covered text[] DEFAULT '{}'::text[] NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: profiles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.profiles (
    id uuid NOT NULL,
    full_name text,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: sections; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sections (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    title text NOT NULL,
    spec_tag text NOT NULL,
    level text NOT NULL,
    learning_objectives text[] DEFAULT '{}'::text[] NOT NULL,
    content text NOT NULL,
    keywords text[] DEFAULT '{}'::text[] NOT NULL
);


--
-- Name: starred_questions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.starred_questions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    question_text text NOT NULL,
    question_type text NOT NULL,
    marks integer DEFAULT 1,
    markscheme text,
    model_answer text,
    topic_slug text,
    subsection_slug text,
    subsection_title text,
    subject text,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: starred_subsections; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.starred_subsections (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    topic_slug text NOT NULL,
    subsection_slug text NOT NULL,
    subsection_title text NOT NULL,
    subject text,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: submissions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.submissions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id uuid NOT NULL,
    section_id uuid NOT NULL,
    content text NOT NULL,
    score integer,
    keywords_found text[],
    keywords_missed text[]
);


--
-- Name: subtopic_progress; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.subtopic_progress (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    topic_slug text NOT NULL,
    subsection_slug text NOT NULL,
    blurt_score_avg numeric(5,2) DEFAULT 0,
    exam_score_avg numeric(5,2) DEFAULT 0,
    total_blurt_attempts integer DEFAULT 0,
    total_exam_attempts integer DEFAULT 0,
    last_practiced_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    last_pair_index integer DEFAULT 0
);


--
-- Name: user_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_roles (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    role public.app_role NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: user_settings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_settings (
    user_id uuid NOT NULL,
    theme text DEFAULT 'system'::text NOT NULL,
    timer_enabled boolean DEFAULT true NOT NULL,
    notifications_enabled boolean DEFAULT true NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: blurt_sessions blurt_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blurt_sessions
    ADD CONSTRAINT blurt_sessions_pkey PRIMARY KEY (id);


--
-- Name: practice_sessions practice_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.practice_sessions
    ADD CONSTRAINT practice_sessions_pkey PRIMARY KEY (id);


--
-- Name: profiles profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);


--
-- Name: sections sections_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_pkey PRIMARY KEY (id);


--
-- Name: starred_questions starred_questions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.starred_questions
    ADD CONSTRAINT starred_questions_pkey PRIMARY KEY (id);


--
-- Name: starred_subsections starred_subsections_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.starred_subsections
    ADD CONSTRAINT starred_subsections_pkey PRIMARY KEY (id);


--
-- Name: starred_subsections starred_subsections_user_id_topic_slug_subsection_slug_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.starred_subsections
    ADD CONSTRAINT starred_subsections_user_id_topic_slug_subsection_slug_key UNIQUE (user_id, topic_slug, subsection_slug);


--
-- Name: submissions submissions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.submissions
    ADD CONSTRAINT submissions_pkey PRIMARY KEY (id);


--
-- Name: subtopic_progress subtopic_progress_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subtopic_progress
    ADD CONSTRAINT subtopic_progress_pkey PRIMARY KEY (id);


--
-- Name: subtopic_progress subtopic_progress_user_id_topic_slug_subsection_slug_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subtopic_progress
    ADD CONSTRAINT subtopic_progress_user_id_topic_slug_subsection_slug_key UNIQUE (user_id, topic_slug, subsection_slug);


--
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);


--
-- Name: user_roles user_roles_user_id_role_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_user_id_role_key UNIQUE (user_id, role);


--
-- Name: user_settings user_settings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_settings
    ADD CONSTRAINT user_settings_pkey PRIMARY KEY (user_id);


--
-- Name: blurt_sessions trg_update_subtopic_after_blurt; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER trg_update_subtopic_after_blurt AFTER INSERT ON public.blurt_sessions FOR EACH ROW EXECUTE FUNCTION public.update_subtopic_progress_after_blurt();


--
-- Name: practice_sessions trg_update_subtopic_after_exam; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER trg_update_subtopic_after_exam AFTER INSERT ON public.practice_sessions FOR EACH ROW EXECUTE FUNCTION public.update_subtopic_progress_after_exam();


--
-- Name: blurt_sessions blurt_sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blurt_sessions
    ADD CONSTRAINT blurt_sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: practice_sessions practice_sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.practice_sessions
    ADD CONSTRAINT practice_sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: profiles profiles_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: submissions submissions_section_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.submissions
    ADD CONSTRAINT submissions_section_id_fkey FOREIGN KEY (section_id) REFERENCES public.sections(id) ON DELETE CASCADE;


--
-- Name: submissions submissions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.submissions
    ADD CONSTRAINT submissions_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: subtopic_progress subtopic_progress_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subtopic_progress
    ADD CONSTRAINT subtopic_progress_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: user_roles user_roles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: user_settings user_settings_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_settings
    ADD CONSTRAINT user_settings_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: sections Admins can delete sections; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can delete sections" ON public.sections FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: sections Admins can insert sections; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can insert sections" ON public.sections FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: sections Admins can update sections; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can update sections" ON public.sections FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: user_roles Admins can view all roles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admins can view all roles" ON public.user_roles FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));


--
-- Name: sections Anyone can view sections; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can view sections" ON public.sections FOR SELECT USING (true);


--
-- Name: blurt_sessions Users can create their own blurt sessions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can create their own blurt sessions" ON public.blurt_sessions FOR INSERT TO authenticated WITH CHECK ((auth.uid() = user_id));


--
-- Name: practice_sessions Users can create their own practice sessions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can create their own practice sessions" ON public.practice_sessions FOR INSERT TO authenticated WITH CHECK ((auth.uid() = user_id));


--
-- Name: submissions Users can create their own submissions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can create their own submissions" ON public.submissions FOR INSERT TO authenticated WITH CHECK ((auth.uid() = user_id));


--
-- Name: starred_questions Users can delete their own starred questions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can delete their own starred questions" ON public.starred_questions FOR DELETE USING ((auth.uid() = user_id));


--
-- Name: starred_subsections Users can delete their own starred subsections; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can delete their own starred subsections" ON public.starred_subsections FOR DELETE USING ((auth.uid() = user_id));


--
-- Name: profiles Users can insert their own profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK ((auth.uid() = id));


--
-- Name: subtopic_progress Users can insert their own progress; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can insert their own progress" ON public.subtopic_progress FOR INSERT TO authenticated WITH CHECK ((auth.uid() = user_id));


--
-- Name: user_settings Users can insert their own settings; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can insert their own settings" ON public.user_settings FOR INSERT TO authenticated WITH CHECK ((auth.uid() = user_id));


--
-- Name: starred_questions Users can insert their own starred questions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can insert their own starred questions" ON public.starred_questions FOR INSERT WITH CHECK ((auth.uid() = user_id));


--
-- Name: starred_subsections Users can insert their own starred subsections; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can insert their own starred subsections" ON public.starred_subsections FOR INSERT WITH CHECK ((auth.uid() = user_id));


--
-- Name: profiles Users can update their own profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE TO authenticated USING ((auth.uid() = id));


--
-- Name: subtopic_progress Users can update their own progress; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can update their own progress" ON public.subtopic_progress FOR UPDATE TO authenticated USING ((auth.uid() = user_id));


--
-- Name: user_settings Users can update their own settings; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can update their own settings" ON public.user_settings FOR UPDATE TO authenticated USING ((auth.uid() = user_id));


--
-- Name: blurt_sessions Users can view their own blurt sessions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own blurt sessions" ON public.blurt_sessions FOR SELECT TO authenticated USING ((auth.uid() = user_id));


--
-- Name: practice_sessions Users can view their own practice sessions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own practice sessions" ON public.practice_sessions FOR SELECT TO authenticated USING ((auth.uid() = user_id));


--
-- Name: profiles Users can view their own profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT TO authenticated USING ((auth.uid() = id));


--
-- Name: subtopic_progress Users can view their own progress; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own progress" ON public.subtopic_progress FOR SELECT TO authenticated USING ((auth.uid() = user_id));


--
-- Name: user_roles Users can view their own roles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own roles" ON public.user_roles FOR SELECT TO authenticated USING ((auth.uid() = user_id));


--
-- Name: user_settings Users can view their own settings; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own settings" ON public.user_settings FOR SELECT TO authenticated USING ((auth.uid() = user_id));


--
-- Name: starred_questions Users can view their own starred questions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own starred questions" ON public.starred_questions FOR SELECT USING ((auth.uid() = user_id));


--
-- Name: starred_subsections Users can view their own starred subsections; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own starred subsections" ON public.starred_subsections FOR SELECT USING ((auth.uid() = user_id));


--
-- Name: submissions Users can view their own submissions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own submissions" ON public.submissions FOR SELECT TO authenticated USING ((auth.uid() = user_id));


--
-- Name: blurt_sessions; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.blurt_sessions ENABLE ROW LEVEL SECURITY;

--
-- Name: practice_sessions; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.practice_sessions ENABLE ROW LEVEL SECURITY;

--
-- Name: profiles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

--
-- Name: sections; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.sections ENABLE ROW LEVEL SECURITY;

--
-- Name: starred_questions; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.starred_questions ENABLE ROW LEVEL SECURITY;

--
-- Name: starred_subsections; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.starred_subsections ENABLE ROW LEVEL SECURITY;

--
-- Name: submissions; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;

--
-- Name: subtopic_progress; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.subtopic_progress ENABLE ROW LEVEL SECURITY;

--
-- Name: user_roles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

--
-- Name: user_settings; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--


