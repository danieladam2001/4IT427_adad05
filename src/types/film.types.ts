export interface Film {
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
}

export interface FilmCardProps extends Film {
  onToggleWatched: (title: string) => void;
}