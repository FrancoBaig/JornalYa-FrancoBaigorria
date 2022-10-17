import PropTypes from 'prop-types';
import './modal.css';

function Modal({ children }) {
  return (
    <div className="backdrop">
      <div className="centered">
        <div className="modal">{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.instanceOf(Element).isRequired,
};

export default Modal;
