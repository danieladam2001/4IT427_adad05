import { createContext, type ReactNode, useReducer, useContext, useEffect } from "react";
import { type Film } from '../types/film.types';
import { useQuery } from "@tanstack/react-query";

type FilmAction =
  | { type: 'SET_FILMS'; payload: Film[] }
  | { type: 'TOGGLE_WATCHED'; payload: { id: string } }
  | { type: 'MARK_ALL_AS_WATCHED' }
  | { type: 'ADD_FILM'; payload: Omit<Film, 'id'> }
  | { type: 'REMOVE_FILM'; payload: { id: string}};

interface FilmContextType {
  films: Film[];
  toggleWatched: (id: string) => void;
  markAllAsWatched: () => void;
  addFilm: (film: Omit<Film, 'id'>) => void;
  removeFilm: (id: string) => void;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}

function filmReducer(state: Film[], action: FilmAction): Film[] {

  switch (action.type) {
    case 'SET_FILMS':
      return action.payload;
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
    case 'ADD_FILM':
      return [
        ...state,
        {
          ...action.payload,
          id: crypto.randomUUID(),  // TODO: přesunout do AddFilmForm
          watched: false,
        },
      ];
    case 'REMOVE_FILM':
      return state.filter((film) => 
        film.id !== action.payload.id
      )
    default:
      return state;
  }
}

const WatchListContext = createContext<FilmContextType>({} as FilmContextType);

export function FilmProvider({ children }: { children: ReactNode }) {
  const [films, dispatch] = useReducer(filmReducer, []);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['films'],
    queryFn: () => fetch('/films.json').then((r) => r.json() as Promise<Film[]>),
    staleTime: 60_000,
  });

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_FILMS', payload: data });
    }
  }, [data]);

  const toggleWatched = (id: string) => {
    dispatch({ type: 'TOGGLE_WATCHED', payload: { id } });
  };

  const markAllAsWatched = () => {
    dispatch({ type: 'MARK_ALL_AS_WATCHED' });
  };

  const addFilm = (film: Omit<Film, 'id'>) => {
    dispatch({ type: 'ADD_FILM', payload: film });
  };

  const removeFilm = (id: string) => {
    dispatch({ type: 'REMOVE_FILM', payload: { id }})
  }

  useEffect(() => {
    const watchedCount = films.filter((film) => film.watched).length;
    const totalCount = films.length;
    document.title = `Zhlédnuto: ${watchedCount} / ${totalCount}`;
  }, [films]);

  return (
    <WatchListContext.Provider value={{ films, isLoading, isError, refetch, toggleWatched, markAllAsWatched, addFilm, removeFilm }}>
      {children}
    </WatchListContext.Provider>
  );
}

export const useWatchlist = () => useContext(WatchListContext);