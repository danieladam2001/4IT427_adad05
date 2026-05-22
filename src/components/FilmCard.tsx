import { useWatchlist } from "@/context/WatchlistContext";

export function FilmCard() {

  const { films, toggleWatched, removeFilm } = useWatchlist();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
      {films.map((film) => (
        <div key={film.id} className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">{film.title}</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Rok: {film.year}</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Žánr: {film.genre}</p>
          <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mt-1">⭐ {film.rating >= 1 && film.rating <= 10 ? film.rating : "Neplatné hodnocení"}/10</p>
          <div className="mt-3 mb-5">
            {film.watched === true ? (
              <p className="inline-block text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 rounded-md">
                ✓ Zhlédnuto
              </p>
            ) : (
              <p className="inline-block text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md">
                Nezhlédnuto
              </p>
            )}
          </div>
          <div className="flex gap-2 mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800">
            <button 
              onClick={() => toggleWatched(film.id)}
              className="flex-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 py-2 px-3 rounded-lg transition-colors"
            >
              Změnit stav zhlédnutí
            </button>
            <button 
              onClick={() => removeFilm(film.id)}
              className="text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/20 hover:bg-rose-100 dark:hover:bg-rose-950/40 py-2 px-3 rounded-lg transition-colors"
            >
              Odstranit film
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FilmCard;