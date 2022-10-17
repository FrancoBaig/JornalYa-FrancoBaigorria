import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Documents from './Documents';
import useAxiosFunction from '../../hooks/useAxiosFunction';

function DocumentsContainer() {
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const [ownerName, setOwnerName] = useState('');
  const navigate = useNavigate();

  const getDocuments = (filter = '') => {
    const instance = axios.create({
      baseURL: 'https://sbox-dev.boxcustodia.com/api-test',
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage.getItem('token'),
      },
    });

    axiosFetch({
      axiosInstance: instance,
      method: 'get',
      url: `/documents?name=${filter}`,
      headers: {
        token: sessionStorage.getItem('token'),
      },
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
