import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import styles from './Places.css'

const Place = ({
  name,
  description,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
  id
}) => {
  return (
    <div>
      <Link exact="true" activeclassname="selected" to={`/places/${id}`} className={styles.link}>
        <h2>{name}</h2>
      <img src={image} alt={name} style={{height: '250px', width: '250px'}}/>
      <p>Price Per Night: ${pricePerNight}</p>
      <p>Description: {description}</p>
      <p>Location: {location}</p>
      </Link>
    </div>
  );
};

Place.propTypes = {
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
};

export default Place;
