import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  CastSection,
  CastList,
  ActorInfo,
  ActorPhoto,
  ActorName,
  Сharacter,
} from './Cast.styled';
import * as API from '../../services/api';

export const Cast = () => {
  const [movieCredits, setMovieCredits] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieCredits() {
      try {
        const movieCredits = await API.getMovieCredits(id);
        setMovieCredits(movieCredits);
      } catch (error) {
        toast.error(`Oops something went wrong, try again.`);
      }
    }
    fetchMovieCredits();
  }, [id]);

  return (
    <CastSection>
      <CastList>
        {movieCredits &&
          movieCredits.cast.map(
            ({ cast_id, profile_path, name, character }) => (
              <ActorInfo key={cast_id}>
                <ActorPhoto
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
                  }
                  alt={name}
                />
                <ActorName>{name}</ActorName>
                <Сharacter>{character}</Сharacter>
              </ActorInfo>
            )
          )}
      </CastList>
    </CastSection>
  );
};

export default Cast;
