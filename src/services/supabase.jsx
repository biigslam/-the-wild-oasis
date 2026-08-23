import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pekqeszhqdqitvpdprcc.supabase.co";
const supabaseKey = " sb_publishable_QKJZknFYQ2y9p1cevxu78A_jpXJhMZI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
