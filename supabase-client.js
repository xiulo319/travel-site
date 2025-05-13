import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://zdmdrwndtjbrfppnxiuu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkbWRyd25kdGpicmZwcG54aXV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMTcxNTgsImV4cCI6MjA2MjY5MzE1OH0.nZr3Pc7dodUJwiiV2dqb03mdVuNGwzkpkcHbACePIFw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
