import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Main, HeadTitle, MoviesList, MovieInfo } from './Home.styled';
import * as API from '../../services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const trendingMovies = await API.getTrendingMovies();
        setTrendingMovies(trendingMovies.results);
      } catch (error) {
        toast.error(`Oops something went wrong, try again.`);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <Main>
      <HeadTitle>Trending today</HeadTitle>
      <MoviesList>
        {trendingMovies.map(({ id, title }) => (
          <MovieInfo key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </MovieInfo>
        ))}
      </MoviesList>
    </Main>
  );
};

export default Home;

