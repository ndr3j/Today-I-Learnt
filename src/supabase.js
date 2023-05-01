import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hqjaqtwmqetjmbmjjnab.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxamFxdHdtcWV0am1ibWpqbmFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3ODEzMjYsImV4cCI6MTk5NjM1NzMyNn0.5xpAOvvrSJ_7ntT-thOmRpVPYQbUO3pwwCbKwINQh2g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
