import './MovieItem.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function MovieItem({movie}) {

    const history = useHistory();
    const dispatch = useDispatch();

    // const reduxState = useSelector(store => store);
    // let [movieDetails, setMovieDetails] = useState({});
    // let [genres, setGenres] = useState({});


    useEffect( () => {
        makeDetailPackage();
    }, [] );

    

    function handleClick(event) {
        
        dispatch({type: 'SET_DETAILS', payload: {movie}});
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