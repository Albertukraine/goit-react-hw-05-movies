import {Link} from 'react-router-dom';

export const Movies = props => {
    const {trendFilms, onFilmClick} = props;
    console.log("Props at movies",trendFilms);

    return ( <>
    
    <ul>
        {trendFilms.map(film => <li onClick = {onFilmClick} id={film.id} key={film.id}>
            <Link to={'/details'}>
            {film.title}
            </Link>
            </li>)}
    </ul>
    </>
     )
    
}