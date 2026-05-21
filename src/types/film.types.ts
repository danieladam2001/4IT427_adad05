export interface FilmBase {
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
}

export interface Film extends FilmBase {
  id: string;
}

export interface FilmCardProps extends FilmBase {
  onToggleWatched: (title: string) => void;
}