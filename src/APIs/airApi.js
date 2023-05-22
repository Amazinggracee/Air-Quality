const api = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const apiId = 'd95f167d4b404b819885cfb9060d8358';

const getQuality = async (lat, lon) => {
  const response = await fetch(`${api}lat=${lat}&lon=${lon}&appid=${apiId}`)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
  return response;
};

export default getQuality;
