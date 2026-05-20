type RatingRange = 1|2|3|4|5|6|7|8|9|10;

interface FilmCardProps {
  title: string;
  year: number;
  genre: string;
  rating: RatingRange; // Očekává se číslo od 1 do 10
  watched: boolean;
  onToggleWatched: (title: string) => void;
}

function FilmCard({
  title,
  year,
  genre,
  rating,
  watched,
  onToggleWatched,
}: FilmCardProps){
  return (
    <div>
      <h2>{title}</h2>
      <p>Rok vydání: {year}</p>
      <p>Žánr: {genre}</p>
      <p>Hodnocení: {rating}/10</p>
      <p>Viděno: {watched === true ? '✓ Zhlédnuto' : 'Ne'}</p>
      
      <button onClick={() => onToggleWatched(title)}>
        Změnit stav zhlédnutí
      </button>
    </div>
  );
}

export { FilmCard, type FilmCardProps };