-- ==============================================================================
-- SDB BANK INTEGRATED ANNUAL REPORT 2025 - SUPABASE DATABASE SCHEMA
-- ==============================================================================
-- Run this script in the Supabase SQL Editor:
-- https://supabase.com/dashboard/project/yaefjxsrsyrrrxwkmslq/sql
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. BRANDING CONFIGURATION TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.branding (
  id TEXT PRIMARY KEY DEFAULT 'global',
  config JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.branding ENABLE ROW LEVEL SECURITY;

-- Policies for branding
DROP POLICY IF EXISTS "Allow public read on branding" ON public.branding;
CREATE POLICY "Allow public read on branding"
  ON public.branding FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Allow public write on branding" ON public.branding;
CREATE POLICY "Allow public write on branding"
  ON public.branding FOR ALL
  USING (true)
  WITH CHECK (true);

-- ------------------------------------------------------------------------------
-- 2. USER FEEDBACK TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rating INTEGER DEFAULT 5,
  subject TEXT,
  section_id TEXT,
  message TEXT,
  comment TEXT,
  name TEXT,
  user_name TEXT,
  email TEXT,
  user_email TEXT,
  user_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Policies for feedback
DROP POLICY IF EXISTS "Allow public read on feedback" ON public.feedback;
CREATE POLICY "Allow public read on feedback"
  ON public.feedback FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Allow public insert on feedback" ON public.feedback;
CREATE POLICY "Allow public insert on feedback"
  ON public.feedback FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public delete on feedback" ON public.feedback;
CREATE POLICY "Allow public delete on feedback"
  ON public.feedback FOR DELETE
  USING (true);

-- ------------------------------------------------------------------------------
-- 3. REPORT BOOKMARKS & ANNOTATIONS TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.bookmarks (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  item_type TEXT DEFAULT 'note',
  item_id TEXT NOT NULL,
  title TEXT,
  section_id TEXT,
  personal_notes TEXT DEFAULT '',
  note_number NUMERIC DEFAULT 0,
  note_title TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.bookmarks ENABLE ROW LEVEL SECURITY;

-- Policies for bookmarks
DROP POLICY IF EXISTS "Allow all on bookmarks" ON public.bookmarks;
CREATE POLICY "Allow all on bookmarks"
  ON public.bookmarks FOR ALL
  USING (true)
  WITH CHECK (true);

-- Index for fast bookmark lookups by user
CREATE INDEX IF NOT EXISTS idx_bookmarks_user_id ON public.bookmarks(user_id);

-- ------------------------------------------------------------------------------
-- 4. AI CHAT SESSIONS TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.chats (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  title TEXT,
  messages JSONB DEFAULT '[]'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.chats ENABLE ROW LEVEL SECURITY;

-- Policies for chats
DROP POLICY IF EXISTS "Allow all on chats" ON public.chats;
CREATE POLICY "Allow all on chats"
  ON public.chats FOR ALL
  USING (true)
  WITH CHECK (true);

-- Index for chat sessions by user and update time
CREATE INDEX IF NOT EXISTS idx_chats_user_id ON public.chats(user_id, updated_at DESC);

-- ------------------------------------------------------------------------------
-- 5. INITIAL DATA SEEDING
-- ------------------------------------------------------------------------------
INSERT INTO public.branding (id, config, updated_at)
VALUES (
  'global',
  '{
    "logoTextSDB": "SDB",
    "logoTextBank": "bank",
    "logoColor": "#2B80C5",
    "logoTextColorBank": "#4D4D4F",
    "headOfficeImage": "/src/assets/images/sdb_head_office_1783367607149.jpg",
    "cooperativeFarmingImage": "/src/assets/images/cooperative_farming_1783367621583.jpg",
    "digitalBankingImage": "/src/assets/images/digital_banking_1783367635268.jpg",
    "boardroomLeadershipImage": "/src/assets/images/boardroom_leadership_1783367647402.jpg",
    "logoImage": "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/logo/sdb_logo_transparent.png",
    "coverVideo": "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/mainvideo.mp4"
  }'::jsonb,
  NOW()
)
ON CONFLICT (id) DO NOTHING;

