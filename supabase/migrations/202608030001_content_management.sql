-- Phase 2: reusable content management and secure media storage.
create extension if not exists "pgcrypto";

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  email text unique,
  role text not null default 'admin' check (role in ('admin', 'host')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 1 and 80),
  description text not null default '',
  sort_order integer not null default 0,
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index if not exists categories_active_name_key on public.categories (lower(name)) where deleted_at is null;

create table if not exists public.media (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('image', 'video')),
  storage_path text not null unique,
  file_name text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.categories(id),
  media_id uuid references public.media(id) on delete set null,
  title text not null check (char_length(trim(title)) between 1 and 1000),
  question_type text not null check (question_type in ('multiple_choice', 'true_false')),
  difficulty smallint not null check (difficulty between 1 and 5),
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  internal_notes text not null default '',
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists questions_category_id_idx on public.questions(category_id);
create index if not exists questions_library_idx on public.questions(status, question_type, difficulty) where deleted_at is null;

create table if not exists public.answers (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.questions(id) on delete cascade,
  label text not null check (char_length(trim(label)) between 1 and 500),
  is_correct boolean not null default false,
  display_order smallint not null,
  unique(question_id, display_order)
);
create index if not exists answers_question_id_idx on public.answers(question_id);

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select coalesce((select role = 'admin' from public.users where id = auth.uid()), false)
    or coalesce(auth.jwt() -> 'app_metadata' ->> 'role', auth.jwt() -> 'user_metadata' ->> 'role', '') = 'admin';
$$;

alter table public.users enable row level security;
alter table public.categories enable row level security;
alter table public.media enable row level security;
alter table public.questions enable row level security;
alter table public.answers enable row level security;

create policy "admins manage users" on public.users for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage categories" on public.categories for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage media" on public.media for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage questions" on public.questions for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage answers" on public.answers for all using (public.is_admin()) with check (public.is_admin());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('question-media', 'question-media', false, 52428800, array['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/mp4', 'video/webm', 'video/quicktime'])
on conflict (id) do update set public = false, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;
create policy "admins manage question media" on storage.objects for all to authenticated using (bucket_id = 'question-media' and public.is_admin()) with check (bucket_id = 'question-media' and public.is_admin());
