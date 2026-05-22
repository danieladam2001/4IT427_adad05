import { useWatchlist } from "@/context/WatchlistContext";

export function FilmCard() {

  const { films, toggleWatched, removeFilm } = useWatchlist();

  return (
    <div>
      {films.map((film) => (
        <div>
          <h2>{film.title}</h2>
          <p>Rok: {film.year}</p>
          <p>Žánr: {film.genre}</p>
          <p>⭐ {film.rating >= 1 && film.rating <= 10 ? film.rating : "Neplatné hodnocení"}/10</p>
          {film.watched === true ? <p>✓ Zhlédnuto</p> : <p>Nezhlédnuto</p>}
          <button onClick={() => toggleWatched(film.id)}>
            Změnit stav zhlédnutí
          </button>
          <button onClick={() => removeFilm(film.id)}>
            Odstranit film
          </button>
        </div>
      ))}
    </div>
  );
}

export default FilmCard;