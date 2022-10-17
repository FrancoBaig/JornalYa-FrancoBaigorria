import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Documents from './Documents';
import useAxiosFunction from '../../hooks/useAxiosFunction';
import axiosDocuments from '../../apis/documents';

function DocumentsContainer() {
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const navigate = useNavigate();

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

  const handleRedirectToPDF = (id) => {
    navigate(`/documents/${id}`);
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
        handleTableAction={handleRedirectToPDF}
      />
      <Outlet />
    </>
  );
}

export default DocumentsContainer;
