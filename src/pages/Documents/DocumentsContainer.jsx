import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Documents from './Documents';
import useAxiosFunction from '../../hooks/useAxiosFunction';
import axiosDocuments from '../../apis/documents';

function DocumentsContainer() {
  const [response, error, loading, axiosFetch] = useAxiosFunction();

  const getDocuments = (filter = '') => {
    axiosFetch({
      axiosInstance: axiosDocuments,
      method: 'get',
      url: `/documents?name=${filter}`,
    });
  };

  const handleFilter = (event, filter) => {
    event.preventDefault();
    getDocuments(filter);
  };

  useEffect(() => {
    getDocuments();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Documents
        data={response.documents}
        error={error}
        loading={loading}
        handleFilter={handleFilter}
      />
      <Outlet />
    </>
  );
}

export default DocumentsContainer;
