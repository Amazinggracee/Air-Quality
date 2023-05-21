const api = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const apiId = '7ee6c59be0a3d1cda2a235909c744d19';

const getQuality = async (lat, lon) => {
  const response = await fetch(`${api}lat=${lat}&lon=${lon}&appid=${apiId}`)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
  return response;
};

export default getQuality;
