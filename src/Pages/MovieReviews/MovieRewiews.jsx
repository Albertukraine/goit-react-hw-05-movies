import {useState, useEffect} from 'react';

const APIKEY = '70d2b9230e2d15a833e0a1e0ef2cf000';

export const MovieRewiews = props => {
    const {filmToShowID} = props;
const [movieReviews, setMovieReview] = useState([]);


useEffect(()=> {
    if(!filmToShowID) {return};
    fetch(`https://api.themoviedb.org/3/movie/${filmToShowID}/reviews?api_key=${APIKEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(res => setMovieReview(res.results));
}, [filmToShowID]);



    return ( <div>

        {movieReviews?.map(review => <li key = {review.id}><p>Author:{review.author}</p><p>Rewiew:{review.content}</p></li>)}
    </div>
    
    
    
    );
}