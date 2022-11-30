import {Link, Outlet } from 'react-router-dom';


export const MovieDetails = props => {
    const {movieDetails} = props;
    const {original_title, overview, poster_path} = movieDetails;
    
    console.log("Props in movie details", movieDetails);
    if(!poster_path) {return};
    return ( <>
        
        <div><p>{original_title}</p>
        <p>{overview}</p>
      <img alt={original_title} src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
       </div>
       <ul>
      <li>
       <Link to="cast">CAST</Link>

      </li>
      <li>
       <Link to="reviews">Reviews</Link>

      </li>
       </ul>
       
       <Outlet/>
    
    </>
       
    )
}