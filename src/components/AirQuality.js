import { PropTypes } from 'prop-types';
import { BsCircleFill } from 'react-icons/bs';

const AirQuality = (props) => {
  const { air } = props;
  let quality;
  let style;
  switch (air) {
    case 1: {
      quality = 'Good';
      style = { color: '#2FB039', fontSize: '1.4rem' };

      break;
    }
    case 2: {
      quality = 'Fair';
      style = { color: '#8FEB12', fontSize: '1.4rem' };
      break;
    }
    case 3: {
      quality = 'Moderate';
      style = { color: '#FAF605', fontSize: '1.4rem' };
      break;
    }
    case 4: {
      quality = 'Poor';
      style = { color: '#FA8A05', fontSize: '1.4rem' };
      break;
    }
    case 5: {
      quality = 'Very Poor';
      style = { color: '#F31F0A', fontSize: '1.4rem' };
      break;
    }
    default:
      quality = '';
      style = { color: 'transparent', fontSize: '1.4rem' };
      break;
  }
  return (
    <div className="quality">
      <h2 className="air-quality">
        Air Quality Index:&nbsp;&nbsp;
        {quality}
      </h2>
      <BsCircleFill className="air-quality-circle" style={style} />
    </div>
  );
};

AirQuality.propTypes = {
  air: PropTypes.number.isRequired,
};
export default AirQuality;
