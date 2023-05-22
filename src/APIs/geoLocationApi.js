const api = 'http://api.openweathermap.org/geo/1.0/direct?';
const apiId = 'd95f167d4b404b819885cfb9060d8358';

const getGeoLocation = async (place) => {
  const response = await fetch(`${api}q=${place}&limit=5&appid=${apiId}`)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
  return response;
};

export default getGeoLocation;
