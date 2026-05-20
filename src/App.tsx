import { FilmCard, type FilmCardProps } from './components/FilmCard';

type FilmData = FilmCardProps;

const moviesData: FilmData[] = [
{
    title: "Inception",
    year: 2010,
    genre: "Thriller",
    rating: 9,
    watched: true,
    onToggleWatched: () => console.log()
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Akční",
    rating: 8,
    watched: true,
    onToggleWatched: () => console.log()
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 9,
    watched: false,
    onToggleWatched: () => console.log()
  }
];

const handleToggleWatched = (title: string): void => {
    console.log(` Stav zhlédnutí se mění pro film: "${title}"`);
  };

function App() {
  return (
    <>
      <div>
        {moviesData.map((movie) => (
          <FilmCard 
            key={movie.title}
            title={movie.title}
            year={movie.year}
            genre={movie.genre}
            rating={movie.rating}
            watched={movie.watched}
            onToggleWatched={handleToggleWatched}
          />
        ))}
      </div> 
    </>
  )
}

export default App
