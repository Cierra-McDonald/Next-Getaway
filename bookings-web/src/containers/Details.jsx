import React, {useState, useEffect } from 'react';
import { getOnePlace } from '../services/placesApi';

const Details = () => { 
    const [places, setPlace] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getOnePlace(props.match.params.id).then(setPlace)
            .finally(() => setLoading(false))
       
    }, [])

    return (
        <div>
            {loading 
                ?
            <h2>Loading...</h2>
                :
            <div>
                <p>{places.name}</p>
            </div>
            }
        </div>
    )
}

export default Details;