/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_APP_ID: string
  readonly VITE_OWNER_ID: string
  readonly VITE_ANALYTICS_ENABLED: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
