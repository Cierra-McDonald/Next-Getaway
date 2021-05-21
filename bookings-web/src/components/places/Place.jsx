import React from 'react';
import PropTypes from 'prop-types';
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
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Description: {description}</p>
      <p>Location: {location}</p>
      <p>Price Per Night: ${pricePerNight}</p>
      <img src={image} alt={name} style={{height: '250px', width: '250px'}}/>
      {/* <p>{imageThumbnail}</p> */}
      <p>Max Guest: {maxGuests}</p>
      <p>Furry Friends: {petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</p>
      {pool ? <p>Has a Pool!</p> : null}
      {wifi ? <p>Free Wifi</p> : null}
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
