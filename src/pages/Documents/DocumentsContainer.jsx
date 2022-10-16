import { useEffect } from 'react';
import Documents from './Documents';
import useAxiosFunction from '../../hooks/useAxiosFunction';
import axiosDocuments from '../../apis/documents';

function DocumentsContainer() {
  const [response, error, loading, axiosFetch] = useAxiosFunction();

  const getDocuments = () => {
    axiosFetch({
      axiosInstance: axiosDocuments,
      method: 'get',
      url: '/documents',
    });
  };

  useEffect(() => {
    getDocuments();
    // eslint-disable-next-line
  }, []);

  return (
    <Documents data={response.documents} error={error} loading={loading} />
  );
}

export default DocumentsContainer;
