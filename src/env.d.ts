interface ImportMetaEnv {
  readonly VITE_REGISTER_URL?: string;
  readonly VITE_VERIFY_URL?: string;
  // add other VITE_ variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
