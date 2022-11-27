export const MovieDetails = props => {
    const {movieDetails} = props;
    const {original_title, overview, poster_path} = movieDetails;
    
    console.log("Props in movie details", movieDetails);
    return (
        <div><p>{original_title}</p>
        <p>{overview}</p>
       <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
       </div>
    )
}