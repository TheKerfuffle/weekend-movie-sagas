import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    // on list page load, get all movie and genre data
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_ALL_GENRES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (

                        <MovieItem key={movie.id} movie={movie}/>
                        
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;