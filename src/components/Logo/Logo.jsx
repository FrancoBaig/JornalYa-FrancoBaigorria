import PropTypes from 'prop-types';
import './logo.css';

function Logo({ className }) {
  return (
    <img
      className={`logo ${className}`}
      src="https://sbox-dev.boxcustodia.com/api/logo?tenant=afsdfaadfa"
      alt="JornalYa logo"
    />
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
