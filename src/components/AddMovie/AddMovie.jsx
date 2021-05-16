import { useState } from "react";


function AddMovie() {

    let [movieTitle, setMovieTitle] = useState('');
    let [imageUrl, setImageUrl] = useState('');
    let [movieDescription, setMovieDescription] = useState('');
    let [movieGenre, setMovieGenre] = useState([]);


    function submitMovie() {
        console.log(movieTitle, imageUrl, movieDescription, movieGenre);
    }


    return (
        <>
            <form onSubmit={submitMovie}>

                <input type="text" value={movieTitle} placeholder="Movie Title"
                    onChange={(event) => setMovieTitle(event.target.value)} />

                <input type="text" value={imageUrl} placeholder="Poster Image URL"
                    onChange={(event) => setImageUrl(event.target.value)} />

                <textarea name="" id="description" cols="40" rows="10" value={movieDescription} onChange={(event) => setMovieDescription(event.target.value)} />
                <select name="Genres" id="genres" value={movieGenre} onChange={(event) => setMovieGenre(event.target.value)}>
                    <option>--- Choose all that Apply with CMD ---</option>
                    <option value="1">Adventure</option>
                    <option value="2">Animated</option>
                    <option value="3">Biographical</option>
                    <option value="4">Comedy</option>
                    <option value="5">Disaster</option>
                    <option value="6">Drama</option>
                    <option value="7">Epic</option>
                    <option value="8">Fantasy</option>
                    <option value="9">Musical</option>
                    <option value="10">Romantic</option>
                    <option value="11">Science Fiction</option>
                    <option value="12">Space-Opera</option>
                    <option value="13">Superhero</option>
                </select>
            </form>
        </>
    )
}

export default AddMovie;

// [  ] - an input field (for the movie title).
// [  ] - an input field (for the movie poster image URL)).
// [  ] - a textarea (for the movie description).
// [  ] - a dropdown (for the genres).