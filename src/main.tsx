import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CrispHistoryProvider } from './context/CrispHistoryProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CrispHistoryProvider>
      <App />
    </CrispHistoryProvider>
  </StrictMode>,
)
