/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.MAIN.ENTRY
DESCRIPTION: Application entry point

5WH:
WHAT = main.tsx
WHY = Bootstrapping the React application
WHO = Leeway Innovations
WHERE = src/main.tsx
WHEN = 2026-05-05
HOW = React DOM + App Mount

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE: PROPRIETARY
*/

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './ui/App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
