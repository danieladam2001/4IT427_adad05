import { useState, type FormEvent } from 'react';
import { useWatchlist } from '../context/WatchlistContext';

export function AddFilmForm() {
  const { addFilm } = useWatchlist();

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('5');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !year) {
      alert('Prosím vyplňte název a rok filmu.');
      return;
    }

    addFilm({
      title: title.trim(),
      year: Number(year),
      genre: genre.trim() || 'Neznámý',
      rating: Number(rating),
      watched: false
    });

    setTitle('');
    setYear('');
    setGenre('');
    setRating('5');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm mt-8">
      <hr className="border-t border-zinc-100 dark:border-zinc-800 mb-5" />
      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">Přidat nový film</h3>
      
      {/* Grid container for standard inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="sm:col-span-2 flex flex-col gap-1.5">
          <label htmlFor="title" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            Název filmu:
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Např. Pulp Fiction"
            required
            className="w-full text-sm bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="year" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            Rok vydání:
          </label>
          <input
            id="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Např. 1994"
            min="1880"
            max={new Date().getFullYear()}
            required
            className="w-28 text-sm bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="genre" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            Žánr:
          </label>
          <input
            id="genre"
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Např. Krimi / Drama"
            className="w-full text-sm bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
          />
        </div>
      </div>

      {/* Range Input Section */}
      <div className="flex flex-col gap-2 mb-6 bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-lg border border-zinc-100 dark:border-zinc-800">
        <label htmlFor="rating" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 flex justify-between">
          <span>Hodnocení:</span>
          <span className="text-amber-600 dark:text-amber-400 font-bold">⭐ {rating}/10</span>
        </label>
        <input
          id="rating"
          type="range"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full accent-amber-500 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        className="w-full text-sm font-bold text-white bg-amber-500 hover:bg-amber-600 active:scale-[0.99] py-2.5 px-4 rounded-lg transition-all shadow-sm shadow-amber-500/10 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
      >
        Přidat film
      </button>
    </form>
  );
}
