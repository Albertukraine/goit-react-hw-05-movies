import {useState, useEffect} from 'react';

const APIKEY = '70d2b9230e2d15a833e0a1e0ef2cf000';

export const MovieCast = props => {
    const {filmToShowID} = props;
const [artistCast, setArtistCast] = useState([]);


useEffect(() => {
    if(!filmToShowID) {return};
    fetch(`https://api.themoviedb.org/3/movie/${filmToShowID}/credits?api_key=${APIKEY}&language=en-US`)
    .then(response => response.json())
    .then(result => setArtistCast(result.cast));
},[filmToShowID]);

    return (
    
    <div>
        <h2>Cast</h2>
        <ul> 
        {artistCast?.map(actor => <li key={actor.id}>{actor.name}</li>)}
       </ul>
     
    </div>
    
    )
}