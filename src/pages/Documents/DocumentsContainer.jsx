import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Documents from './Documents';
import useAxiosFunction from '../../hooks/useAxiosFunction';
import axiosDocuments from '../../apis/documents';

function DocumentsContainer() {
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const [ownerName, setOwnerName] = useState('Juan');
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
    navigate(`/documents?name=${filter}`);
    getDocuments(filter);
  };

  const handleRedirectToPDF = (id, ownerName) => {
    setOwnerName(ownerName);
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
      <Outlet context={ownerName} />
    </>
  );
}

export default DocumentsContainer;
