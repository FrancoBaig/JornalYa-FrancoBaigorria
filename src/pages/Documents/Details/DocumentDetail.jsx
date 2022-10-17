import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/Modal/Modal';
import PDFViewer from '../../../components/PDFViewer/PDFViewer';
import Loader from '../../../components/Loader/Loader';
import './documentDetails.css';

function DocumentDetail({ pdf, loading, error }) {
  const navigate = useNavigate();

  function handleClose() {
    navigate('/documents');
  }

  return (
    <Modal>
      <div className="details-wrapper">
        {loading && error && <Loader />}
        <div className="modal-header">
          <h2 className="modal-header__title">
            Recibos de sueldo de: Matias Romero
          </h2>
          <button className="btn btn--primary" onClick={handleClose}>
            Cerrar
          </button>
        </div>
        <PDFViewer document={pdf} />
      </div>
    </Modal>
  );
}

export default DocumentDetail;
