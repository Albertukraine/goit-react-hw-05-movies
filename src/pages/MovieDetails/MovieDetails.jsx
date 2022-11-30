import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BackLink } from 'components/BackLink/BackLink';
import {
  Main,
  Box,
  PosterWrapper,
  DetailsWrapper,
  Title,
  UserScore,
  Overview,
  OverviewContent,
  Genres,
  GenresContent,
  AdditionalInfo,
  AdditionalInfoTitle,
  AdditionalInfoList,
  AdditionalInfoItem,
} from './MovieDetails.styled';
import * as API from '../../services/api';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieDetails = await API.getMovieDetails(id);
        setMovieDetails(movieDetails);
      } catch (error) {
        toast.error(`Oops something went wrong, try again.`);
      }
    }
    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return null;
  }

  return (
    <Main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Box>
        <PosterWrapper
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <DetailsWrapper>
          <Title>{movieDetails.title}</Title>
          <UserScore>
            User score: {Math.round(movieDetails.vote_average * 10)}%
          </UserScore>
          <Overview>Overview</Overview>
          <OverviewContent>{movieDetails.overview}</OverviewContent>
          <Genres>Genres</Genres>
          <GenresContent>
            {movieDetails.genres.map(genre => genre.name).join(', ')}
          </GenresContent>
        </DetailsWrapper>
      </Box>
      <AdditionalInfo>
        <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
        <AdditionalInfoList>
          <AdditionalInfoItem>
            <Link to="cast" state={{ ...location.state }}>
              Cast
            </Link>
          </AdditionalInfoItem>
          <AdditionalInfoItem>
            <Link to="reviews" state={{ ...location.state }}>
              Reviews
            </Link>
          </AdditionalInfoItem>
        </AdditionalInfoList>
      </AdditionalInfo>
      <Outlet />
    </Main>
  );
};

export default MovieDetails;
