import './MovieItem.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function MovieItem({movie}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const reduxState = useSelector(store => store);

    let [movieDetails, setMovieDetails] = useState({});
    let [genres, setGenres] = useState({});


    useEffect( () => {
        makeDetailPackage();
    }, [] );

    function makeDetailPackage() {

        for (let i = 0; i<reduxState.genres; i++ ) {
            if (movie.id == reduxState.genres[i].movie_id) {
                setGenres(...genres, reduxState.genres[i]);
            }
        }
        setMovieDetails({movie, genres});
    }

    function handleClick(event) {
        
        dispatch({type: 'SET_DETAILS', payload: movieDetails})
        history.push(`/details`);

    }


    return (
        <>
            <div onClick={handleClick}>
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} />
            </div>
        </>
    )
}

export default MovieItem;