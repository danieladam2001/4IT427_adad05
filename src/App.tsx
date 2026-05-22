import { Routes, Route, NavLink } from 'react-router-dom';
import { WatchlistPage } from './pages/WatchlistPage'
import { AddFilmPage } from './pages/AddFilmPage.tsx'

function App() {
  return (
  <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4 md:p-8 antialiased text-zinc-900 dark:text-zinc-50">
    <div className="max-w-7xl mx-auto">
      
      <nav className="flex items-center gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-8 w-full">
        <NavLink 
          to="/" 
          end 
          className={({ isActive }) => `
            text-sm font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer
            ${isActive 
              ? 'bg-amber-500 text-white shadow-sm' 
              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }
          `}
        >
          Domů
        </NavLink>
        
        <NavLink 
          to="/form"
          className={({ isActive }) => `
            text-sm font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer
            ${isActive 
              ? 'bg-amber-500 text-white shadow-sm' 
              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }
          `}
        >
          Filmy
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<WatchlistPage />} />
        <Route path="/form" element={<AddFilmPage />} />
      </Routes>

    </div>
  </main>
  );
}

export default App;