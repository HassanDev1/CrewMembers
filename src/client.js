import { createClient } from "@supabase/supabase-js";

const URL = "https://ucrkkcojilmwmgvjsgza.supabase.co";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjcmtrY29qaWxtd21ndmpzZ3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3NDA3NDksImV4cCI6MTk5NjMxNjc0OX0.NXGfiLVq9M3pMZy0i5J_ejk-bceK_C3Co_2JhLl3tG0";

export const supabase = createClient(URL, API_KEY);
