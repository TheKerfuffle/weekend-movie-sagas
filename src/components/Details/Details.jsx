import { useEffect, useState } from "react"
import { useSelector } from "react-redux";


function Details() {

    const details = useSelector(store => store.currentDetails);
    

    // useEffect(() => {
    //     console.log(details);
    // }, [])

    return (
        <>
            <h3>{details.movie.title}</h3>
            <img src={details.movie.poster} alt={details.movie.title} />
            <p>{details.movie.description}</p>

            {/* <ul>
                {details.genre.map(item => 
                    <li>
                        {item.name}
                    </li>)}
            </ul> */}
        </>
    )
}

export default Details;