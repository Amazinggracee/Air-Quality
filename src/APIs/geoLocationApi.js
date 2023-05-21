const api = 'http://api.openweathermap.org/geo/1.0/direct?';
const apiId = '7ee6c59be0a3d1cda2a235909c744d19';

const getGeoLocation = async (place) => {
  const response = await fetch(`${api}q=${place}&limit=5&appid=${apiId}`)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
  return response;
};

export default getGeoLocation;
