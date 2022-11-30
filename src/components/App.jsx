import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from 'Pages/HomePage/HomePage';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { MovieCast } from 'Pages/MovieCast/MovieCast';
import { SearchPage } from 'Pages/SearchPage/Searchpage';
import { MovieReviews } from 'Pages/MovieReviews/MovieRewiews';


export function App() {
  // const [searchQuery, setSearchQuery] = useState('');
  const [trendFilms, setTrendFilms] = useState([]);
  const [filmToShowID, setFilmToShowID] = useState('');
  const [movieDetails, setMovieDetails] = useState([]);

  const APIKEY = '70d2b9230e2d15a833e0a1e0ef2cf000';

  useEffect(() => {
    if (trendFilms.length > 1) {
      return;
    }
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`)
      .then(response => response.json())
      .then(res => setTrendFilms(res.results));
  });

  useEffect(() => {
    if (filmToShowID) {
      fetch(
        `https://api.themoviedb.org/3/movie/${filmToShowID}?api_key=${APIKEY}&language=en-US`
      )
        .then(response => response.json())
        .then(res => setMovieDetails(res));
    }
  }, [filmToShowID]);

  const onFilmClick = evt => {
    setFilmToShowID(evt.currentTarget.id);
    console.log(evt.currentTarget.id);
  };

  return (
    <>
    <Header />
    <Routes>
       <Route path='search' element={<SearchPage />}/>
       <Route path='home' element={<Movies onFilmClick={onFilmClick} trendFilms={trendFilms} />}/>
        <Route path='/details' element={<MovieDetails movieDetails={movieDetails} />}>
         <Route path='cast' element={<MovieCast filmToShowID={filmToShowID} />}/>
         <Route path='reviews' element={<MovieReviews filmToShowID={filmToShowID}/>}/>
         
        </Route>

    </Routes>
  
     
    </>
  );
}
