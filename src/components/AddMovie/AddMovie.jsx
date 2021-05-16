import { useState } from "react";


function AddMovie() {

    let [movieTitle, setMovieTitle] = useState('');
    let [imageUrl, setImageUrl] = useState('');
    let [movieDescription, setMovieDescription] = useState('');
    let [movieGenres, setMovieGenres] = useState([]);


    function submitMovie() {
        
    }


    return (
        <>
            <form onSubmit={submitMovie}>

            <input type="text" />
            <input type="text" />
            <textarea name="" id="" cols="40" rows="10"></textarea>
            <select multiple={true} name="Genres" id="genres">
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