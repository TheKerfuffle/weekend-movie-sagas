import { useEffect, useState } from "react"
import { useSelector } from "react-redux";


function Details() {

    const details = useSelector(store => store.currentDetails);


    useEffect(() => {
        console.log(details);
    }, [])

    return (
        <>

            <h3>{details.movie.title}</h3>
            <img src={details.movie.poster} alt={details.movie.title} />
            <p>{details.movie.description}</p>

            {/* {JSON.stringify(details.genres[0])} */}

            {details.genres != undefined ? (

                <ul>
                    {details.genres.map(item => {
                        if (item.movie_id == details.movie.id) {
                            return <li key={item.genre_id}> {item.name} </li>;
                        }
                         
                    }
                    )
                    }
                </ul>
            ) : (
                ''
            )
            }

        </>
    )
}

export default Details;