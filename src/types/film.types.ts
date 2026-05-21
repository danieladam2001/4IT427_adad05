export interface Film {
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
}

export interface FilmCardProps {
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
  onToggleWatched: (title: string) => void;
}