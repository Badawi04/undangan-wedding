import { createClient } from '@supabase/supabase-js';

// Ganti dengan URL dan API Key Anda dari Supabase
const SUPABASE_URL = 'https://kwthqqktusvgsgxlqzqp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3dGhxcWt0dXN2Z3NneGxxenFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NTgyODksImV4cCI6MjA5MzQzNDI4OX0.dl0KqriWAZ1J0Z9Cm9OBKWhkli3LsPcVPB6gKTbxdwo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
