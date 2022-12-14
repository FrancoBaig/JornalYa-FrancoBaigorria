import { Link } from 'react-router-dom';
import './notfound.css';

function NotFound() {
  return (
    <div className="notfound-wrapper">
      <h3>Utiliza alguno de estos enlaces:</h3>
      <ul>
        <Link to="/login">
          <li>Log in</li>
        </Link>
        <Link to="/documents">
          <li>Documents</li>
        </Link>
      </ul>
    </div>
  );
}

export default NotFound;
