import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Air = (props) => {
  const navigate = useNavigate();
  const { airData, error } = props;

  if (error === 'Cannot read properties of undefined (reading \'lat\')') {
    navigate('/PageNotFound', { state: { message: 'Requested Page not Found' } });
  } else if (airData !== null && airData.coord) {
    navigate('/AirDetail', { state: { message: 'Requested Page not Found' } });
  }
  return (
    <div className="Air-container" />
  );
};

Air.defaultProps = {
  airData: null,
  error: null,
};
Air.propTypes = {
  airData: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired),
  error: PropTypes.string,
};
export default Air;
