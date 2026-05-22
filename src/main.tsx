import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { FilmProvider } from './context/WatchlistContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FilmProvider>
      <App />
    </FilmProvider>
  </StrictMode>,
)
