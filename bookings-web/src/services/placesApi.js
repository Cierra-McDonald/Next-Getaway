export const getPlaces = async () => {
  const response = await fetch('http://localhost:7890/api/v1/places')
  // (`${process.env.BASE_URL}/places`);
  if (response.ok) {
    const result = await response.json();
  
    return result.map(
      ({
        price_per_night,
        image_thumbnail,
        max_guests,
        pet_friendly,
        ...place
      }) => ({
        ...place,
        pricePerNight: price_per_night,
        imageThumbnail: image_thumbnail,
        maxGuests: max_guests,
        petFriendly: pet_friendly,
      })
    );
  } else {
    throw new Error(await response.json());
  }
};


export const getOnePlace = async(id) => { 
  const response = await fetch(`http://localhost:7890/api/v1/places/${id}`)
  // (`${process.env.BASE_URL}/places/${id}`);
  const onePlace = response.json();
  console.log(onePlace);

  return onePlace;
}
