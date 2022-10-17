import Modal from '../../../components/Modal/Modal';
import PDFViewer from '../../../components/PDFViewer/PDFViewer';

function Loader() {
  return <h3>loading..</h3>;
}

function DocumentDetail({ pdf, loading, error }) {
  if (loading || error || !pdf) {
    <Loader />;
  }

  return (
    <Modal>
      <PDFViewer document={pdf} />
    </Modal>
  );
}

export default DocumentDetail;
