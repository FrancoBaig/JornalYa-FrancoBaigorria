import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import PDFPanel from './PDFPanel';
import './pdf.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function PDFReader({ document }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div className="pdf-wrapper">
      <PDFPanel scale={scale} setScale={setScale} />
      <Document file={document} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            size="A4"
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            scale={scale}
          />
        ))}
      </Document>
    </div>
  );
}

export default PDFReader;
