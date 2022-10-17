import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LogIn from './LogIn';
import useAxiosFunction from '../../hooks/useAxiosFunction';
import axios from '../../apis/login';

function LogInContainer() {
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const navigate = useNavigate();

  const handleToggleVisibility = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axiosFetch({
      axiosInstance: axios,
      method: 'POST',
      url: '/login',
      body: {
        userName,
        password,
      },
    });
  };

  useEffect(() => {
    if (response.length === 0) return;
    sessionStorage.setItem('token', response.token);
    setUserName('');
    setPassword('');
    navigate('/documents');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <LogIn
      handleSubmit={handleSubmit}
      error={error}
      setUserName={setUserName}
      setPassword={setPassword}
      handleToggleVisibility={handleToggleVisibility}
      inputType={type}
    />
  );
}

export default LogInContainer;
