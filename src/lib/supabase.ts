
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xzrxacbtlnvgvnfjipwd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6cnhhY2J0bG52Z3ZuZmppcHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzOTE2NTYsImV4cCI6MjA2Njk2NzY1Nn0.C1DfiBcsjtpjeB4tZxTPyQUDHGDVE2OZWv-j1Y0_-vE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
