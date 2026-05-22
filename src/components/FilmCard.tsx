import { type FilmCardProps } from "../types/film.types";

export function FilmCard({
  title,
  year,
  genre,
  rating,
  watched,
  onToggleWatched,
  onDeleteMovie
}: FilmCardProps) {
  const isRatingValid = rating >= 1 && rating <= 10;

  return (
    <div>
      <h2>{title}</h2>
      <p>Rok: {year}</p>
      <p>Žánr: {genre}</p>
      <p>⭐ {isRatingValid ? rating : "Neplatné hodnocení"}/10</p>
      {watched === true ? <p>✓ Zhlédnuto</p> : <p>Nezhlédnuto</p>}
      <button onClick={() => onToggleWatched(title)}>
        Změnit stav zhlédnutí
      </button>
      <button onClick={() => onDeleteMovie(title)}>
        Odstranit film
      </button>
    </div>
  );
}

export default FilmCard;