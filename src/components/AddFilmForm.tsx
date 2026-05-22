import { useState, type FormEvent } from 'react';
import { useWatchlist } from '../context/WatchlistContext';

export function AddFilmForm() {
  const { addFilm } = useWatchlist();

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('5');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !year) {
      alert('Prosím vyplňte název a rok filmu.');
      return;
    }

    addFilm({
      title: title.trim(),
      year: Number(year),
      genre: genre.trim() || 'Neznámý',
      rating: Number(rating),
      watched: false
    });

    setTitle('');
    setYear('');
    setGenre('');
    setRating('5');
  };

  return (
    <form onSubmit={handleSubmit}>
      <hr></hr>
      <h3>Přidat nový film</h3>
      
      <div>
        <label htmlFor="title">Název filmu:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Např. Pulp Fiction"
          required
        />
      </div>

      <div>
        <label htmlFor="year">Rok vydání:</label>
        <input
          id="year"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Např. 1994"
          min="1880"
          max={new Date().getFullYear()}
          style={{width: "100px"}}
          required
        />
      </div>

      <div>
        <label htmlFor="genre">Žánr:</label>
        <input
          id="genre"
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Např. Krimi / Drama"
        />
      </div>

      <div>
        <label htmlFor="rating">Hodnocení ({rating}/10):</label>
        <input
          id="rating"
          type="range"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>

      <button type="submit">Přidat film</button>
    </form>
  );
}
