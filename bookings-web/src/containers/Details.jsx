import React, {useState, useEffect } from 'react';
import { getOnePlace } from '../services/placesApi';

const Details = (props) => { 
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
                <img src={places.image} alt={places.imageThumbnail}/>
                <p>{places.description}</p>
                <p>Max Guest: {places.maxGuests}</p>
                <p>Furry Friends: {places.petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</p>
                {places.pool ? <p>Has a Pool!</p> : null}
                {places.wifi ? <p>Free Wifi</p> : null}
            </div>
            }
        </div>
    )
}

export default Details;