import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';

const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlaces().then(setPlaces)
      .finally(() => setLoading(false))
  }, []);

  return (
    <PlaceList places={places} loading={loading}/>
    
    ) 
  };

export default Getaways;
