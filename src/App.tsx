import FilmCard from "./components/FilmCard";
import { useWatchlist } from "./hooks/useWatchlist";
import { type Film } from "./types/film.types";

const INITIAL_FILMS: Film[] = [
  { title: "Inception", year: 2010, genre: "Sci-fi", rating: 9, watched: true },
  { title: "Interstellar", year: 2014, genre: "Sci-fi", rating: 10, watched: false },
  { title: "The Dark Knight", year: 2008, genre: "Akční", rating: 9, watched: true },
];

function App() {
  const { films, toggleWatched, markAllAsWatched } = useWatchlist(INITIAL_FILMS);

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Film Watchlist</h1>

      <button onClick={markAllAsWatched}>
        Označit vše
      </button>

      <div>
        {films.map((film) => (
          <FilmCard
            key={film.title}
            title={film.title}
            year={film.year}
            genre={film.genre}
            rating={film.rating}
            watched={film.watched}
            onToggleWatched={toggleWatched}
          />
        ))}
      </div>
    </main>
  );
}

export default App;