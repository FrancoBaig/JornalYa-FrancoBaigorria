import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/Modal/Modal';
import PDFViewer from '../../../components/PDFViewer/PDFViewer';
import './documentDetails.css';

function Loader() {
  return <h3>loading..</h3>;
}

function DocumentDetail({ pdf, loading, error }) {
  const navigate = useNavigate();
  if (loading || error || !pdf) {
    <Loader />;
  }

  function handleClose() {
    navigate('/documents');
  }

  return (
    <Modal>
      <div className="details-wrapper">
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
