import FilmCard from "./components/FilmCard";
const films = [
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-fi",
    rating: 9,
    watched: true,
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-fi",
    rating: 10,
    watched: false,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Akční",
    rating: 9,
    watched: true,
  },
];

function App() {
  const handleToggleWatched = (title: string) => {
    console.log(`Kliknuto na film: ${title}`);
  };
  return (
    <main>
      <h1>Film Watchlist</h1>
      {films.map((film) => (
        <FilmCard
          title={film.title}
          year={film.year}
          genre={film.genre}
          rating={film.rating}
          watched={film.watched}
          onToggleWatched={handleToggleWatched}
        />
      ))}
    </main>
  );
}

export default App;
