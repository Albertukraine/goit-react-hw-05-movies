import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { SearchBox } from '../../components/SearchBox';
import { Main, MovieList, MovieItem } from './Movies.styled';
import * as API from '../../services/api';

const Movies = () => {
  const [movie, setMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName.trim() === '') return;

    async function fetchSearchMovie() {
      try {
        const movie = await API.searchMovie(movieName);

        if (movie.total_results === 0) {
          toast.warn('Your search did not return any results.', {
            theme: 'dark',
          });

          return;
        }

        setMovie(movie.results);
      } catch (error) {
        toast.error(`Oops something went wrong, try again.`);
      }
    }

    fetchSearchMovie();
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.elements.query.value.trim() === '') {
      toast.warn('In the Search field, enter the text to be searched.', {
        theme: 'dark',
      });

      return;
    }

    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <Main>
      <SearchBox onSubmit={handleSubmit} />
      {movie && (
        <MovieList>
          {movie.map(({ id, title }) => (
            <MovieItem key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </Main>
  );
};

export default Movies;
