import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DocumentDetail from './DocumentDetail';
import axiosDocuments from '../../../apis/documentsPDF';
import useAxiosFunction from '../../../hooks/useAxiosFunction';

function DocumentDetailContainer() {
  const [response, error, loading, axiosFetch] = useAxiosFunction();

  const { id } = useParams();

  const getDocuments = () => {
    axiosFetch({
      axiosInstance: axiosDocuments,
      method: 'get',
      url: `/document/${id}`,
    });
  };

  useEffect(() => {
    getDocuments();
    // eslint-disable-next-line
  }, [id]);

  return <DocumentDetail pdf={response} error={error} loading={loading} />;
}

export default DocumentDetailContainer;
