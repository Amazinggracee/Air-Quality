import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAir } from '../redux/airquality/airquality';
import Air from './Air';
import CityName from '../components/CityName';
import { getLocation } from '../redux/getLocation/getLocation';
import { getCities } from '../redux/cities/cities';
import PaginatedItems from './PaginatedItems';

const Home = () => {
  const dispatch = useDispatch();
  const airData = useSelector((state) => state.AirSlice.air);
  const error = useSelector((state) => state.AirSlice.error);
  const inputLocation = (location) => {
    dispatch(getAir(location));
    dispatch(getLocation(location));
  };
  useEffect(() => {
    dispatch(getCities());
  });
  return (
    <div>
      <CityName inputLocation={inputLocation} />
      <Air airData={airData} error={error} />
      <PaginatedItems itemsPerPage={24} inputLocation={inputLocation} />
    </div>
  );
};
export default Home;
