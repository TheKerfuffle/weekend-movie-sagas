import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";


function Details() {

    const details = useSelector(store => store.currentDetails);
    const history = useHistory();

    // Takes us back to the movie list
    function goBack() {
        history.push('/');
    }

    // 
    useEffect(() => {
        console.log(details);
    }, [])

    return (
        <>
            {/* Display The details of a movie including its image and description */}
            <h3>{details.movie.title}</h3>
            <img src={details.movie.poster} alt={details.movie.title} />
            <p>{details.movie.description}</p>

            {/* {JSON.stringify(details)} */}

            {/* Conditionally render the genres of the selected movie, otherwise we get errors */}
            {details.genres != undefined ? (

                <ul>
                    {details.genres.map(item => {
                        return <li key={item.genre_id}> {item.name} </li>;
                    })}
                </ul>
            ) : (
                ''
            )
            }
            <button onClick={goBack}>Back To Movie List</button>

        </>
    )
}

export default Details;