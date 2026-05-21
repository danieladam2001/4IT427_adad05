import FilmCard from "./components/FilmCard";
import { useWatchlist } from "./context/WatchlistContext";

function App() {
  const { films, toggleWatched, markAllAsWatched } = useWatchlist();

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Film Watchlist</h1>

      <button onClick={markAllAsWatched}>
        Označit vše
      </button>

      <div>
        {films.map((film) => (
          <FilmCard
            key={film.id}
            title={film.title}
            year={film.year}
            genre={film.genre}
            rating={film.rating}
            watched={film.watched}
            onToggleWatched={() => toggleWatched(film.id)}
          />
        ))}
      </div>
    </main>
  );
}

export default App;