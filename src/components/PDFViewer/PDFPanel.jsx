import './pdf.css';
import { FaSearchPlus, FaSearchMinus } from 'react-icons/fa';

function PDFPanel({ scale, setScale }) {
  const isMinZoom = scale < 0.6;
  const isMaxZoom = scale >= 2.0;

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };

  return (
    <div className="control-panel">
      <div className="control-panel__actions">
        <span>{(scale * 100).toFixed()}%</span>
        <FaSearchPlus onClick={() => zoomIn()} />
        <FaSearchMinus onClick={() => zoomOut()} />
      </div>
    </div>
  );
}

export default PDFPanel;
