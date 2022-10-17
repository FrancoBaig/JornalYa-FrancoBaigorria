import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DocumentDetail from './DocumentDetail';
import useAxiosFunction from '../../../hooks/useAxiosFunction';

function DocumentDetailContainer() {
  const [response, error, loading, axiosFetch] = useAxiosFunction();

  const { id } = useParams();

  const getDocuments = () => {
    const instance = axios.create({
      baseURL: 'https://sbox-dev.boxcustodia.com/api-test',
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage.getItem('token'),
      },
      responseType: 'blob',
    });

    axiosFetch({
      axiosInstance: instance,
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
