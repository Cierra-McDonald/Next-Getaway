import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';
import styles from './Places.css'
import LoadingSpinner from '../loading/LoadingSpinner'


const PlaceList = ({ places, loading }) => {
  return (
    <div>
      { loading 
        ? 
        <h2>Loading...</h2>
        // <LoadingSpinner/>
        :
        <ul aria-label="getaways" className={styles.ul}>
          {
            places.map((place) => (
            <li key={place.id} className={styles.list}>
             <Place  
             {...place} /> 
             </li>
             ))
          }
        </ul>
      }
    </div>
    
  )
  
  
};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      pricePerNight: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      imageThumbnail: PropTypes.string.isRequired,
      maxGuests: PropTypes.number.isRequired,
      petFriendly: PropTypes.bool.isRequired,
      pool: PropTypes.bool.isRequired,
      wifi: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default PlaceList;
