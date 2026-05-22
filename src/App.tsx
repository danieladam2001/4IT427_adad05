import { AddFilmForm } from "./components/AddFilmForm";
import { FilmCard } from "./components/FilmCard";
import { useWatchlist } from "./context/WatchlistContext";

function App() {
  const { films, markAllAsWatched } = useWatchlist();
  const seenFilmsCount = films.filter((film) => film.watched).length; 

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Film Watchlist</h1>
      <h2>Zhlédnuto: {seenFilmsCount} / {films.length}</h2>

      <button onClick={markAllAsWatched}>
        Označit vše
      </button>

      <div>
        <FilmCard></FilmCard>
      </div>

      <div>
        <AddFilmForm></AddFilmForm>
      </div>
    </main>
  );
}

export default App;