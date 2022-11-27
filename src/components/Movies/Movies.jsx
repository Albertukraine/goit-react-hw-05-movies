export const Movies = props => {
    const {trendFilms, onFilmClick} = props;
    console.log("Props at movies",trendFilms);

    return ( <>
    
    <button>Go Back</button>
    <ul>
        {trendFilms.map(film => <li onClick = {onFilmClick} id={film.id} key={film.id}>
            <a>
            {film.original_title} {film.name}
            </a>
            </li>)}
    </ul>
    </>
     )
    
}