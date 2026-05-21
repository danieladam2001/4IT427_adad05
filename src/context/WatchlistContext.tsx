import { createContext, type ReactNode, useReducer, useContext, useEffect } from "react";
import { type Film } from '../types/film.types';

const INITIAL_FILMS: Film[] = [
  {id: "1", title: "Inception", year: 2010, genre: "Sci-fi", rating: 9, watched: true },
  {id: "2", title: "Interstellar", year: 2014, genre: "Sci-fi", rating: 10, watched: false },
  {id: "3", title: "The Dark Knight", year: 2008, genre: "Akční", rating: 9, watched: true },
];

type FilmAction =
  | { type: 'TOGGLE_WATCHED'; payload: { id: string } }
  | { type: 'MARK_ALL_AS_WATCHED' };

interface FilmContextType {
  films: Film[];
  toggleWatched: (id: string) => void;
  markAllAsWatched: () => void;
}

function filmReducer(state: Film[], action: FilmAction): Film[] {

  switch (action.type) {
    case 'TOGGLE_WATCHED':
      return state.map((film) =>
        film.id === action.payload.id ? { ...film, watched: !film.watched } : film
      );
    case 'MARK_ALL_AS_WATCHED':
      return state.map((film) => ({
        ...film,
        watched: true
        })
      );
    default:
      return state;
  }
}

const WatchListContext = createContext<FilmContextType>({} as FilmContextType);

export function FilmProvider({ children }: { children: ReactNode }) {
  const [films, dispatch] = useReducer(filmReducer, INITIAL_FILMS);

  // Obalení dispatch funkcí do srozumitelných metod pro komponenty
  const toggleWatched = (id: string) => {
    dispatch({ type: 'TOGGLE_WATCHED', payload: { id } });
  };

  const markAllAsWatched = () => {
    dispatch({ type: 'MARK_ALL_AS_WATCHED' });
  };

  useEffect(() => {
    const watchedCount = films.filter((film) => film.watched).length;
    const totalCount = films.length;
    document.title = `Zhlédnuto: ${watchedCount} / ${totalCount}`;
  }, [films]);

  return (
    <WatchListContext.Provider value={{ films, toggleWatched, markAllAsWatched }}>
      {children}
    </WatchListContext.Provider>
  );
}

export const useWatchlist = () => useContext(WatchListContext);