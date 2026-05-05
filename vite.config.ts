/*
LEEWAY HEADER — DO NOT REMOVE

REGION: CONFIG
TAG: CONFIG.VITE.MAIN
DESCRIPTION: Vite configuration for the portfolio

5WH:
WHAT = vite.config.ts
WHY = Build and dev server configuration
WHO = Leeway Innovations
WHERE = vite.config.ts
WHEN = 2026-05-05
HOW = Vite + Plugins

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE: PROPRIETARY
*/

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
