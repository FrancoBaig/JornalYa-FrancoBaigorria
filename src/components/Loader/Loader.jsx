import ClipLoader from 'react-spinners/ClipLoader';
import './loader.css';

function Loader() {
  return (
    <div className="loader-wrapper">
      <ClipLoader
        loading
        color="#424da0"
        size={80}
        aria-label="Loading Spinner"
      />
    </div>
  );
}

export default Loader;
