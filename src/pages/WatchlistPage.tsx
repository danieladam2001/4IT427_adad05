import { FilmCard } from "../components/FilmCard";
import { useWatchlist } from "../context/WatchlistContext";
import { useState } from "react";

export function WatchlistPage() {
  const [IsDarkMode, setIsDarkMode] = useState(false);
  
  // 1. Vytáhneme si z contextu nové stavy z useQuery a funkci refetch
  const { films, markAllAsWatched, isLoading, isError, refetch } = useWatchlist();
  const seenFilmsCount = films.filter((film) => film.watched).length; 

  const handleToggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4 md:p-8 antialiased text-zinc-900 dark:text-zinc-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header / Dashboard Banner */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm mb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">Film Watchlist</h1>
            <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">
              {/* Statistiky se ukážou korektně, až když nejsou stavy loading/error */}
              Zhlédnuto: <span className="font-bold text-amber-500">{seenFilmsCount}</span> z <span className="font-bold text-zinc-700 dark:text-zinc-300">{films.length}</span> filmů
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 self-start sm:self-center">
            <button
              onClick={handleToggleTheme}
              className="text-xs font-bold px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 shadow-sm transition-all cursor-pointer"
            >
              {IsDarkMode ? "☀️ Světlý režim" : "🌙 Tmavý režim"}
            </button>

            {/* Action Button */}
            <button 
              onClick={markAllAsWatched}
              className="self-start sm:self-center text-xs font-bold text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-[0.98] px-4 py-2.5 rounded-lg transition-all border border-zinc-200 dark:border-zinc-700 shadow-sm cursor-pointer"
            >
              ✓ Označit vše jako zhlédnuté
            </button>
          </div>
        </header>

        {/* Content Layout: Podmínkové vykreslení stavů přesně podle zadání */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:flex-1">
            
            {/* A. Stav LOADING */}
            {isLoading && (
              <div className="flex flex-col items-center justify-center p-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm text-zinc-500 dark:text-zinc-400">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500 mb-4"></div>
                <p className="text-sm font-medium">Načítám…</p>
              </div>
            )}

            {/* B. Stav ERROR */}
            {isError && !isLoading && (
              <div className="text-center p-8 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/30 rounded-xl shadow-sm">
                <p className="text-sm font-semibold text-rose-600 dark:text-rose-400 mb-4">
                  Chyba: Data se nepodařilo načíst z externího zdroje.
                </p>
                <button
                  onClick={() => refetch()}
                  className="text-xs font-bold text-white bg-rose-500 hover:bg-rose-600 px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  Zkusit načíst znovu
                </button>
              </div>
            )}

            {/* C. Stav SUCCESS */}
            {!isLoading && !isError && (
              <FilmCard />
            )}

          </div>
        </div>

      </div>
    </main>
  );
}