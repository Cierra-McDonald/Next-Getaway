import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import ErrorBoundary  from '../components/errors/ErrorBoundary'


const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getPlaces().then(setPlaces)
      .finally(() => setLoading(false))
  }, []);

  return (
    <ErrorBoundary>
      <PlaceList places={places} loading={loading}/>
    </ErrorBoundary>
    ) 
  };

export default Getaways;
