import { useState } from "react"
import { useSelector } from "react-redux";


function Details(props) {

    const details = useSelector(store => store.currentDetails);

    return (
        <>
            <h3>{details.movie.title}</h3>
            <img src={details.movie.poster} alt={details.movie.title} />
            <p>{details.movie.description}</p>
            <p>{details.genre}</p>
        </>
    )
}

export default Details;