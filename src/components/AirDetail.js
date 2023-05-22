import { useSelector } from 'react-redux';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import AirQuality from './AirQuality';
import AirCondition from './AirCondition';
import { resetState } from '../redux/airquality/airquality';

const AirDetail = () => {
  const navigate = useNavigate();
  const dispatch = useNavigate();
  const airData = useSelector((state) => state.AirSlice.air);
  const location = useSelector((state) => state.LocationSlice);
  const coordinates = airData
    ? `\u00A0\u00A0\u00A0\u00A0${airData.coord.lat}°,\u00A0\u00A0\u00A0\u00A0${airData.coord.lon}°`
    : 'Not found';
  const locationName = location ? location[0].name : 'Not found';
  const locationState = location ? location[0].state : 'Not found';
  const { country } = location ? location[0] : 'Not found';
  const { components } = airData ? airData.list[0] : 'Not found';
  const { air } = airData ? airData.list[0].main : 'Not found';
  const onClickHandler = () => {
    dispatch(resetState());
    navigate('/', { state: { message: 'Reset page' } });
  };

  return (
    <div>
      {airData ? (
        <div className="air-details">
          <button
            className="back-button"
            onClick={() => onClickHandler()}
            type="button"
          >
            <MdOutlineKeyboardBackspace />
            &nbsp;Go Back
          </button>
          <h1 className="location-heading">
            {locationName}
            ,
            {locationState ? (
              <span>
                {' '}
                {locationState}
                ,
              </span>
            ) : ''}
            {' '}
            {country}
          </h1>
          <p className="location-para">
            coords :
            {coordinates}
          </p>
          {locationState ? (
            <p className="location-para">
              state :
              {locationState}
            </p>
          ) : (
            ''
          )}
          <p className="location-para">
            country code :
            {country}
          </p>
          <AirQuality air={air} />
          <AirCondition components={components} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default AirDetail;
