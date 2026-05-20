import { FilmCard, type FilmCardProps } from './components/FilmCard';

type FilmData = FilmCardProps

const moviesData: FilmData[] = [
{
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi / Thriller",
    rating: 9,
    watched: true,
    onToggleWatched: () => console.log()
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Akční / Drama",
    rating: 10,
    watched: true,
    onToggleWatched: () => console.log()
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi / Dobrodružný",
    rating: 9,
    watched: false,
    onToggleWatched: () => console.log()
  }
];


function App() {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
        {moviesData.map((movie) => (
          <FilmCard 
            key={movie.title}
            title={movie.title}
            year={movie.year}
            genre={movie.genre}
            rating={movie.rating}
            watched={movie.watched}
            onToggleWatched={movie.onToggleWatched}
          />
        ))}
      </div> 
    </>
  )
}

export default App
