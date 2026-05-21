import { type FilmCardProps } from "../types/film.types";

function FilmCard({
  title,
  year,
  genre,
  rating,
  watched,
  onToggleWatched,
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
    </div>
  );
}

export default FilmCard;