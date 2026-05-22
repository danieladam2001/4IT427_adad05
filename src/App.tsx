import { AddFilmForm } from "./components/AddFilmForm";
import { FilmCard } from "./components/FilmCard";
import { useWatchlist } from "./context/WatchlistContext";

function App() {
  const { films, markAllAsWatched } = useWatchlist();
  const seenFilmsCount = films.filter((film) => film.watched).length; 

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4 md:p-8 antialiased text-zinc-900 dark:text-zinc-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header / Dashboard Banner */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm mb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">Film Watchlist</h1>
            <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">
              Zhlédnuto: <span className="font-bold text-amber-500">{seenFilmsCount}</span> z <span className="font-bold text-zinc-700 dark:text-zinc-300">{films.length}</span> filmů
            </h2>
          </div>

          {/* Action Button */}
          <button 
            onClick={markAllAsWatched}
            className="self-start sm:self-center text-xs font-bold text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-[0.98] px-4 py-2.5 rounded-lg transition-all border border-zinc-200 dark:border-zinc-700 shadow-sm"
          >
            ✓ Označit vše jako zhlédnuté
          </button>
        </header>

        {/* Content Layout: Side-by-side on desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Main movie list section */}
          <div className="w-full lg:flex-1">
            <FilmCard />
          </div>

          {/* Sticky sidebar for adding new films */}
          <div className="w-full lg:w-[420px] lg:sticky lg:top-8">
            <AddFilmForm />
          </div>

        </div>
      </div>
    </main>
  );
}

export default App;