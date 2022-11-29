import { useState, useEffect } from 'react';

const APIKEY = '70d2b9230e2d15a833e0a1e0ef2cf000';

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [normalizedQuery, setNormalizedQuery] = useState('');
  const [searchedFilms, setSearchedFilms] = useState([]);

  const handleInputChange = evt => {
    const { value } = evt.currentTarget;
    setSearchQuery(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchQuery === '') {
      alert('Please enter something');
      return;
    }
    setNormalizedQuery(searchQuery.toLowerCase().trim(''));
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${normalizedQuery}&page=1&include_adult=false`
    )
      .then(response => response.json())
      .then(res => setSearchedFilms(res.results));
  }, [normalizedQuery]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={searchQuery}
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search movie now"
        />
        <button type="submit">SUBMIT</button>
      </form>
      {searchedFilms?.map(movie => (
        <div display="flex" key={movie.id}>
          <img
            width="200px"
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          ></img>
          <p>{movie.title}</p>
        </div>
      ))}
    </>
  );
};
