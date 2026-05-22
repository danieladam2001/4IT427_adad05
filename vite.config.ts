// vite.config.ts (vznikne při instalaci)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Volitelne: alias pro importy
  resolve: {
    alias: { '@': '/src' },
  },
});