import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";


function AddMovie() {

    // Initialize variables for the inputs
    let [movieTitle, setMovieTitle] = useState('');
    let [imageUrl, setImageUrl] = useState('');
    let [movieDescription, setMovieDescription] = useState('');
    let [movieGenre, setMovieGenre] = useState(0);

    const genres = useSelector(store => store.genres)
    const dispatch = useDispatch();
    const history = useHistory();

    // Handles the submit form
    function submitMovie() {
        event.preventDefault();
        // console.log('Adding new Movie:', movieTitle, imageUrl, movieDescription, movieGenre);
        dispatch({type: 'ADD_NEW_MOVIE', payload: 
            {
            title: movieTitle ,
            poster: imageUrl, 
            description: movieDescription, 
            genre_id: movieGenre
            }
        })
        history.push('/');

    }

    function handleCancel() {
        // Clears inputs and redirects us to the home page
        setMovieTitle('');
        setImageUrl('');
        setMovieDescription('');
        setMovieGenre(0);
        history.push('/');
    }


    return (
        <>
        {/* Form that grabs title, description, image url and genre information for the dispatch */}
            <form onSubmit={submitMovie}>

                <input type="text" value={movieTitle} placeholder="Movie Title"
                    onChange={(event) => setMovieTitle(event.target.value)} />

                <input type="text" value={imageUrl} placeholder="Poster Image URL"
                    onChange={(event) => setImageUrl(event.target.value)} />

                <textarea name="" id="description" cols="40" rows="10" value={movieDescription} onChange={(event) => setMovieDescription(event.target.value)} />
                <select name="Genres" id="genres" value={movieGenre} onChange={(event) => setMovieGenre(event.target.value)}>
                    <option>--- Choose all that Apply with CMD ---</option>
                    {genres.map(item => {
                        return <option key={item.id} value={item.id}>{item.name}</option>
                    })}
                </select>
                <button type="submit">Add Movie</button>
            </form>
            <button onClick={handleCancel}>Cancel</button>
        </>
    )
}

export default AddMovie;

// [  ] - an input field (for the movie title).
// [  ] - an input field (for the movie poster image URL)).
// [  ] - a textarea (for the movie description).
// [  ] - a dropdown (for the genres).